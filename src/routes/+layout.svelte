<script>
    export const ssr = false;
	import './style.css';
    import NavigationBar from './widgets/NavigationBar.svelte';
    import { onMount } from 'svelte';
    import { App } from '../middlewares';
  import Notifications from 'svelte-notifications';
    
  onMount(()=>{
    App.onInit();
  });
</script>

<NavigationBar></NavigationBar>
<Notifications>
    <main style="width:70%">
        <slot />
    </main>
</Notifications>
