import { get, writable, type Writable } from "svelte/store";
import { Controller } from "../template/core/controller";

export class TestController extends Controller {
  value = 0;

  increment() {
    this.value++;
    return this;
  }

  decrement() {
    this.value--;
    return this;
  }

  async asyncFunc() {
    await new Promise((r) => setTimeout(r, 2000));
    this.value = 100;
    return this;
  }
}
