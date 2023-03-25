import type { IconData } from "$lib/icons/components/Icon.svelte";
const subway: Record<string, IconData> = {
  subway: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M1088 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zM288 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM704 768v-512h-544v512h544zM1248 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM1408 768v-512h-576v512h576z",
      },
    ],
  },
};
export default subway;
