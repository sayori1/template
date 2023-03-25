import type { IconData } from '$lib/components/Icon.svelte';
const print: Record<string, IconData> = {
  print: {
    width: 1664,
    height: 1792,
    paths: [
      {
        d: 'M384 1536h896v-256h-896v256zM384 896h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zM1536 960q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 960v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z'
      }
    ]
  }
};
export default print;
