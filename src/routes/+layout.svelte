<script>
    export const ssr = false;
	import './style.css';
    import Notifications from 'svelte-notifications';
    import NavigationBar from './widgets/NavigationBar.svelte';
    import { onMount } from 'svelte';
    import { App } from '../app';
    
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
