import type { IconData } from '$lib/components/Icon.svelte';
const creditCard: Record<string, IconData> = {
  'credit-card': {
    width: 1920,
    height: 1792,
    paths: [
      {
        d: 'M1760 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600zM160 256q-13 0-22.5 9.5t-9.5 22.5v224h1664v-224q0-13-9.5-22.5t-22.5-9.5h-1600zM1760 1536q13 0 22.5-9.5t9.5-22.5v-608h-1664v608q0 13 9.5 22.5t22.5 9.5h1600zM256 1408v-128h256v128h-256zM640 1408v-128h384v128h-384z'
      }
    ]
  }
};
export default creditCard;
