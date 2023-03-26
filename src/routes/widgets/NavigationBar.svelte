<script>
	import { onMount } from 'svelte';
  import Row from '../../widgets/Row.svelte';
  import SizedBox from '../../widgets/SizedBox.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div
	style="background-color:#fbfbfa; position: fixed; top:0px; width: 100%; border-bottom: 1px solid #f5f5f4;"
>
	<Row crossAxisAlignment="center">
		<SizedBox width="1vw" />
		<h2 style="margin: 10px; font-size: 3vh">academy</h2>
		<SizedBox width="4vw" />
		<a href="/journal">обзор</a>
		<a href="/me">профиль</a>
	</Row>
</div>

<style>
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