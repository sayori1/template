import type { IconData } from '$lib/components/Icon.svelte';
const volumeDown: Record<string, IconData> = {
  'volume-down': {
    width: 1152,
    height: 1792,
    paths: [
      {
        d: 'M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zM1152 896q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-36 12-56.5-12-56.5-29-36-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z'
      }
    ]
  }
};
export default volumeDown;
