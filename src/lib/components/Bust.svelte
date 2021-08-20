<div class="wrap">
		<img src="/bust_background.svg" alt="">
</div>

<style>
	.wrap {
		width: 80%;
		height: 80%;
		margin: 0 auto;
	}

	img {
		width: 100%;
		padding: 1rem;
		filter: drop-shadow(2px 2px 0 var(--theme-dark))
        drop-shadow(-2px 2px 0 var(--theme-dark))
        drop-shadow(2px -2px 0 var(--theme-dark))
        drop-shadow(-2px -2px 0 var(--theme-dark));
		transition: 0.1s ease-out;
		cursor: pointer;
	}

	img:hover {
		transform: rotate(-2deg);
		filter: drop-shadow(7px 2px 0 var(--medium))
        drop-shadow(-7px 2px 0 var(--medium))
        drop-shadow(6px 2px 0 var(--theme-dark))
        drop-shadow(-6px -2px 0 var(--theme-dark));
	}
</style>