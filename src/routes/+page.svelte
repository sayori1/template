<script lang="ts">
  import { Controller, put } from "../template/core/controller";
  import { TestController } from "./controller";

   let controller = put(new TestController());
</script>

<button on:click={()=>controller = controller.increment()}>
    {controller.value}
</button>

<button on:click={()=>controller = controller.decrement()}>
    start async
</button>

<a href="/test">test</a>
  