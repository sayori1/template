import type { IconData } from '$lib/components/Icon.svelte';
const photo: Record<string, IconData> = {
  photo: {
    width: 1920,
    height: 1792,
    paths: [
      {
        d: 'M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
      }
    ]
  }
};
export default photo;
