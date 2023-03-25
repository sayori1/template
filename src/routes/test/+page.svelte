<script lang="ts">
  import { onMount } from "svelte";
  import { put } from "../../template/core/controller";
  import { TestController } from "../controller";

   let controller = put(new TestController());

   onMount(async()=>{
    controller = await controller.asyncFunc();
   })
</script>

{controller.value}
<button on:click={()=>controller=controller.decrement()}>-</button>