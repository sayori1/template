<script lang="ts">
  import type { DragType } from "../types/events";

    export let onClick:(arg0: MouseEvent)=>void = ()=>{};
    export let onDoubleClick:(arg0: MouseEvent)=>void = ()=>{};
    export let onDrag: (type: DragType, event: DragEvent)=>void = ()=>{};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
on:click={onClick} on:dblclick={onDoubleClick} 
    on:drag={(e)=>{onDrag('active', e)}}
    on:dragend={(e)=>{onDrag('end', e)}}
    on:dragstart={(e)=>{onDrag('start', e)}}
>
    <slot></slot>
</div>