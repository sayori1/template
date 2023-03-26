<script lang="ts">
  import Icon from "$lib/icons/components/Icon.svelte";
  import beer from "$lib/icons/icons/beer";
  import spinner from "$lib/icons/icons/spinner";
  import { getNotificationsContext } from "svelte-notifications";
  import { showModal } from "../packages/modal/modal";
  import Modal from "../packages/modal/modal.svelte";
  import Auth from "./auth/auth.svelte";

    const { addNotification } = getNotificationsContext();


</script>

<h1>This is test of template super framework</h1>

<a href="/test">test</a>
<button
  on:click={() => addNotification({
    text: 'Error!',
    position: 'top-center',
    type: 'error'
  })}
>
<Icon data={spinner} spin></Icon>
</button>

<button on:click={()=>showModal('auth')}>authorize</button>


<Modal key="auth">
  <Auth></Auth>
</Modal>