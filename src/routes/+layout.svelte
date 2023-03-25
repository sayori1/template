<script>
    export const ssr = false;
	import './style.css';
    import Notifications from 'svelte-notifications';
</script>

<Notifications>
    <main style="width:70%">
        <slot />
    </main>
</Notifications>
