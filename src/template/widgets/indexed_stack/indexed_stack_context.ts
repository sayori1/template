import { get, writable, type Writable } from "svelte/store";

export class IndexedStackContext {
  constructor(
    public selected: Writable<number> = writable(0),
    public indexAcc: Writable<number> = writable(0)
  ) {}

  getIndex(): number {
    let returnValue = get(this.indexAcc);
    this.indexAcc.update((v) => v + 1);
    return returnValue;
  }
}
