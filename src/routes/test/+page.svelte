<script lang="ts">
  import { put } from "../../template/core/controller";
  import { TestController } from "../controller";

   let controller = put(new TestController());
</script>

{controller.value}
<button on:click={()=>controller=controller.decrement()}>-</button>