import { get, writable, type Writable } from "svelte/store";

export let debug: boolean = true;

export abstract class Service {
  type: string;
  isBusy: boolean = false;

  constructor(public unique: boolean = true) {
    this.type = this.constructor.name;
  }

  init() {
    if (debug) console.log(this.constructor.name + " CREATED");
    if (this.onInit) this.onInit();
  }

  dispose() {
    if (debug) console.log(this.constructor.name + " DISPOSED");
    if (this.onDispose) this.onDispose();
  }

  mount() {
    if (debug) console.log(this.constructor.name + " VIEW MOUNTED");
    if (this.onMount) this.onMount();
  }

  refresh() {
    if (debug) console.log(this.constructor.name + " REFRESHED");
    if (this.onRefresh) this.onRefresh();
  }

  onInit(): void {}

  onDispose(): void {}

  onMount(): void {}

  onRefresh(): void {}

  canGo(path: string): boolean {
    return true;
  }

  beforeGo(path: string): void {}

  afterGo(path: string): void {}

  beforeRequest(url: string, data: object): void {}

  afterRequest(responseJson: any): void {}

  onError(error: any): void {}
}

export let services: Writable<Service[]> = writable([]);

export function getAllServices(): Service[] {
  return get(services);
}

export function putService<T extends Service>(service: T) {
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

export function findService<T extends Service>(serviceType: {
  new (): T;
}): T | undefined {
  return get(services).find((service) => service instanceof serviceType) as
    | T
    | undefined;
}
