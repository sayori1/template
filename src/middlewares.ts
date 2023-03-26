import { goto } from "$app/navigation";
import { getAllServices } from "./services/service";

export class App {
  static onInit() {}
}

export class Routing {
  static goTo(path: string) {
    if (this.canGo(path)) {
      this.beforeGo(path);
      goto(path);
      this.afterGo(path);
    }
  }
  private static canGo(path: string): boolean {
    let services = getAllServices();
    let servicesSatisfy = services.every(
      (service) => service.canGo && service.canGo(path)
    );
    return servicesSatisfy;
  }
  private static beforeGo(path: string): void {
    let services = getAllServices();
    services.forEach((service) => service.beforeGo && service.beforeGo(path));
  }
  private static afterGo(path: string): void {
    let services = getAllServices();
    services.forEach((service) => service.afterGo && service.afterGo(path));
  }
}

export class Network {}
