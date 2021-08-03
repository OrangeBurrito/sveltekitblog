<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "../style.css";
</script>

<div class="wrap">
	<Navbar />
	<slot />
</div>

<style>
	.wrap {
		position: relative;
		height: 100vh;
	}
	
	@media (min-width: 1024px) {
		.wrap {
			display: grid;
			grid-template-columns: 1fr 4fr;
		}
	}
</style>
