<script lang="ts">
   import type { CrossAxisAlignment, MainAxisAlignment } from "../types/layout";

   export let mainAxisAlignment:MainAxisAlignment = 'flex-start';
   export let crossAxisAlignment:CrossAxisAlignment = 'start';

    $: style=`display:flex; flex-direction:column; 
    justify-content:${mainAxisAlignment}; 
    align-items:${crossAxisAlignment}; height:100%; min-height:100%;
    `;
</script>

<div style={style}>
    <slot></slot>
</div>