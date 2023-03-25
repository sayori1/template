import { writable, type Writable } from "svelte/store";

export class Modal {
  isVisible: Writable<boolean>;
  constructor(public key: string) {
    this.isVisible = writable(false);
  }
}

export let modals: Writable<Modal[]> = writable([]);

export function addModal(modal: Modal) {
  modals.update((v) => [...v, modal]);
}

export function toggleModal(key: string, state: boolean) {
  modals.update((v) => {
    let filtered = v.filter((v) => v.key == key);
    filtered.forEach((v) => v.isVisible.update(() => state));
    return v;
  });
}

export function showModal(key: string) {
  toggleModal(key, true);
}

export function closeModal(key: string) {
  toggleModal(key, false);
}
