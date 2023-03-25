import type { IconData } from '$lib/components/Icon.svelte';
const googleWallet: Record<string, IconData> = {
  'google-wallet': {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: 'M441 672q33 0 52 26 266 364 362 774h-446q-127-441-367-749-12-16-3-33.5t29-17.5h373zM1000 1029q-49 199-125 393-79-310-256-594 40-221 44-449 211 340 337 650zM1099 320q235 324 384.5 698.5t184.5 773.5h-451q-41-665-553-1472h435zM1792 896q0 424-101 812-67-560-359-1083-25-301-106-584-4-16 5.5-28.5t25.5-12.5h359q21 0 38.5 13t22.5 33q115 409 115 850z'
      }
    ]
  }
};
export default googleWallet;
