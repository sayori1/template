import { get, writable, type Writable } from "svelte/store";

export let debug: boolean = true;

export class Service {
  type: string;
  isBusy: boolean = false;

  constructor(public unique: boolean = true) {
    this.type = this.constructor.name;
  }

  init() {
    if (debug) console.log(this.constructor.name + " CREATED");
    this.onInit();
  }

  dispose() {
    if (debug) console.log(this.constructor.name + " DISPOSED");
    this.onDispose();
  }

  mount() {
    if (debug) console.log(this.constructor.name + " VIEW MOUNTED");
    this.onMount();
  }

  refresh() {
    if (debug) console.log(this.constructor.name + " REFRESHED");
    this.onRefresh();
  }

  protected onInit() {}

  protected onDispose() {}

  protected onMount() {}

  protected onRefresh() {}
}

let services: Writable<Service[]> = writable([]);

export function put<T extends Service>(service: T) {
  let existingController = get(services).find(
    (item) => item.constructor.name == service.constructor.name
  ) as T | undefined;

  if (existingController != null && existingController.unique) {
    return existingController;
  }

  service.init();
  services.update((_) => [..._, service]);
  return service;
}

export function find<T extends Service>(serviceType: {
  new (): T;
}): T | undefined {
  return get(services).find((service) => service instanceof serviceType) as
    | T
    | undefined;
}
