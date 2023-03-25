import { get, writable, type Writable } from "svelte/store";

export let debug: boolean = true;

export class Controller {
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

let controllers: Writable<Controller[]> = writable([]);

export function put<T extends Controller>(controller: T) {
  let existingController = get(controllers).find(
    (item) => item.constructor.name == controller.constructor.name
  ) as T | undefined;

  if (existingController != null && existingController.unique) {
    return existingController;
  }

  controller.init();
  controllers.update((_) => [..._, controller]);
  return controller;
}

export function find<T extends Controller>(targetType: {
  new (): T;
}): T | undefined {
  return get(controllers).find(
    (controller) => controller instanceof targetType
  ) as T | undefined;
}
