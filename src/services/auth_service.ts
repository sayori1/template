import { setBearerToken } from "../api/api";
import { Service } from "./service";

export class AuthService extends Service {
  canGo(path: string): boolean {
    return true;
  }

  beforeRequest(url: string, data: object): void {
    const localToken = localStorage.getItem("token");
    if (localToken != null) {
      setBearerToken(localToken);
    }
  }
}
