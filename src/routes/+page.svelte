<script lang="ts">
  import { Controller, put } from "../template/core/controller";
  import { TestController } from "./controller";

   let controller = put(new TestController());
</script>

<h1>This is test of template super framework</h1>

<button on:click={()=>controller = controller.increment()}>
    {controller.value}
</button>

<button on:click={()=>controller = controller.decrement()}>
    start async
</button>

<a href="/test">test</a>
  