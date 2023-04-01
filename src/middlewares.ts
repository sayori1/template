import { goto } from "$app/navigation";
import { setBearerToken } from "./api/api";
import { AuthService } from "./services/auth_service";
import { getAllServices, putService } from "./services/service";

export class App {
  static onInit() {
    putService(new AuthService());
  }
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

export class Network {
  static beforeRequest(url: string, data: object) {
    let services = getAllServices();
    services.forEach(
      (service) => service.beforeRequest && service.beforeRequest(url, data)
    );
  }

  //to do: all errors pass to onError
  static afterRequest(responseJson: any) {
    console.log("RESPONSE: " + responseJson);
    if (responseJson["error"] != null || responseJson.statusCode != null) {
      if (responseJson.statusCode == 1000) {
      }
      if (responseJson.statusCode == 2000) {
      }
      if (responseJson.statusCode == 1001) {
      }
      if (responseJson.statusCode == 500) {
      }
      throw responseJson;
    }
    let services = getAllServices();
    services.forEach(
      (service) => service.afterRequest && service.afterRequest(responseJson)
    );
  }

  static onError(error: any) {
    console.log("ERROR: " + error);
    let services = getAllServices();
    services.forEach((service) => service.onError && service.onError(error));
  }
}
