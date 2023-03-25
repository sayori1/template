import type { IconData } from "$lib/icons/components/Icon.svelte";
const microphone: Record<string, IconData> = {
  microphone: {
    width: 1152,
    height: 1792,
    paths: [
      {
        d: "M1152 704v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-217-24-364.5-187.5t-147.5-384.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45zM896 320v512q0 132-94 226t-226 94-226-94-94-226v-512q0-132 94-226t226-94 226 94 94 226z",
      },
    ],
  },
};
export default microphone;
