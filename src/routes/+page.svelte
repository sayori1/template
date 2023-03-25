<script lang="ts">
  import { Icon } from "$lib/icons";
  import beer from "$lib/icons/icons/beer";
  import { getNotificationsContext } from "svelte-notifications";

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
<Icon data={beer}></Icon>
</button>