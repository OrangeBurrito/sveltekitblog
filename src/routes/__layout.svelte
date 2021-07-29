<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "../style.css";
</script>

<div class="wrap">
	<Navbar />
	<slot />
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=IBM+Plex+Mono:wght@700&display=swap");

	.wrap {
		position: relative;
		height: 100vh;
		display: grid;
	}

	@media (min-width: 1024px) {
		.wrap {
			grid-template-columns: 1fr 4fr;
		}
	}
</style>
