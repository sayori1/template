<script lang="ts">
  import { setContext } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import { IndexedStackContext } from "./indexed_stack_context";

  let context = new IndexedStackContext()
  setContext('tab', context);

  export let selected = 0;
  $: context.selected.update((v)=>selected);

</script>

{selected}
<slot></slot>