<script>
  import Row from '$lib/widgets/Row.svelte';
  import SizedBox from '$lib/widgets/SizedBox.svelte';
	import { onMount } from 'svelte';
  import { Routing } from '../../middlewares';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div class="navbar">
	<Row crossAxisAlignment="center">
		<SizedBox width="1vw" />
		<h2 style="margin: 10px; font-size: 3vh">academy</h2>
		<SizedBox width="4vw" />
		<a on:click={()=>Routing.goTo('/explore')}>обзор</a>
		<a on:click={()=>Routing.goTo('/profile')}>профиль</a>
	</Row>
</div>

<style>
	.navbar{
		background-color:#fbfbfa; 
		position: fixed; 
		top:0px; 
		width: 100%; 
		border-bottom: 1px solid #f5f5f4;
	}
	a {
		cursor: pointer;
		margin-right: 3%;
	}
	a:hover {
		color: rgb(71, 71, 71);
	}
	a {
		background-color: transparent;
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
</style>