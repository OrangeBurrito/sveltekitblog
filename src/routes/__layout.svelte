<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "../style.css";
</script>

<div class="wrap">
	<Navbar />
	<slot />
	<!-- <div class="background">
		<svg
			class="layer1"
			width="219"
			height="99"
			viewBox="0 0 219 99"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M219 0H164.333V33H109.556V22H54.7778V88H0V99H219V0Z"
				fill="var(--dark)"
			/>
		</svg>

		<svg
			class="layer2"
			width="360"
			height="149"
			viewBox="0 0 360 149"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M360 66.2222H328.6V0H291.4V16.5556H254.2V66.2222H217V0H179.8V33.1111H142.6V115.889H105.4V49.6667H68.2V99.3333H31V115.889H0V149H360V66.2222Z"
				fill="var(--medium)"
			/>
		</svg>

		<svg
			class="layer3"
			width="319"
			height="133"
			viewBox="0 0 319 133"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M360 14.6889H327.125V73.4444H244.5V14.6889H203.188V73.4444H161.875V0H120.563V102.822H79.25V117.511H37.9375V102.822H0V132.2H360V14.6889Z"
				fill="var(--medium-light)"
			/>
		</svg>

		<svg
			class="layer4"
			width="100%"
			height="56"
			viewBox="0 0 360 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 16V0H51.425V40H102.85V32H154.275H205.725V40H257.15V16H308.575V0H360V56H308.575H257.15H205.725H154.275H102.85H51.425H0V16Z"
				fill="var(--light)"
			/>
		</svg>
	</div> -->
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
