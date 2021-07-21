<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import "../style.css";
</script>

<svelte:head>
	<html lang="en"/>
</svelte:head>

<div class="wrap">
	<Navbar/>

		<slot />
	<!-- <footer>Copyright © OrangeBurrito 2021</footer> -->
</div>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=IBM+Plex+Mono:wght@700&display=swap');

	.wrap {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 4fr;
	}
</style>
