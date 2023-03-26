<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { get } from "svelte/store";
  import { fade } from "svelte/transition";
  import IndexedStack from "./IndexedStack.svelte";
  import type { IndexedStackContext } from "./indexed_stack_context";

  let context:IndexedStackContext = getContext('tab');
  export let index = context.getIndex();
  export let selected = context.selected;
</script>

<div transition:fade>
  {#if index == $selected}
    <slot></slot>
  {:else}
  {/if}
</div>