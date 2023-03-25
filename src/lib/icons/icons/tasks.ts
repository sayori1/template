import type { IconData } from '$lib/components/Icon.svelte';
const tasks: Record<string, IconData> = {
  tasks: {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: 'M1024 1408h640v-128h-640v128zM640 896h1024v-128h-1024v128zM1280 384h384v-128h-384v128zM1792 1216v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 704v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 192v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45z'
      }
    ]
  }
};
export default tasks;
