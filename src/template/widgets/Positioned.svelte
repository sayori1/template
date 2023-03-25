<script lang="ts">
  import type { PositionType } from "../types/layout";


    export let left: Size|undefined = undefined;
    export let top: Size|undefined = undefined;
    export let right: Size|undefined = undefined;
    export let bottom: Size|undefined = undefined;
    export let type: PositionType = 'relative';

    $: style=`
    position:absolute;
    width:fit-content;height:fit-content;` 
    + (left!=undefined?`left:${left};`:'')
    + (right!=undefined?`right:${right};`:'')
    + (top!=undefined?`top:${top};`:'')
    + (bottom!=undefined?`bottom:${bottom};`:'')
  </script>
  

{#if type=='absolute'}
        <div style={style}>
            <slot></slot>
        </div>
{:else}
    <div style="position:relative; width:100%; height:100%">
        <div style={style}>
            <slot></slot>
        </div>
    </div>
{/if}

