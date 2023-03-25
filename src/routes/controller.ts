import { get, writable, type Writable } from "svelte/store";
import { Controller } from "../template/core/controller";

export class TestController extends Controller {
  value = 0;

  onTap() {
    this.value++;
    return this;
  }
}
