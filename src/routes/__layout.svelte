<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "$lib/stores";
	import "../styles/global.css";
	import "../styles/themes.css";
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

	/* .background {
		overflow: hidden;
		position: absolute;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: var(--medium-light);
		margin-top: 6rem;
	}

	.background svg {
		position: absolute;
		bottom: 0;
	}

	svg:not(:root) {
		width: 100%;
		height: auto;
	}

	.layer1 {
		transform: scale(0.6);
		bottom: 30%;
		right: -20%;
	}

	.layer2 {
		bottom: 10%;
	}

	.layer3 {
		left: 10%;
		bottom: 5%;
	} */

	@media (min-width: 1024px) {
		.wrap {
			display: grid;
			grid-template-columns: 1fr 4fr;
		}

		/* .background {
			margin-top: 0;
		} */
	}
</style>
