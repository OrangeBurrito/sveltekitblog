<script>

</script>

<div class="sort-wrap">
	
	<button class="sort-desc">DESC</button>
	<button class="sort-asc">ASC</button>
	<button class="sort-best">🌟🏆</button>
	<button class="navigation-older">Previous</button>
	<button class="navigation-newer">Next</button>
</div>

<style>
	.sort-wrap {
		height: 50vh;
		background: var(--salmon);
		padding: var(--padding-medium) var(--padding-medium) 0 0;
	}

	.sort-wrap button {
		width: 100%;
		height: 20%;

		display: flex;
		align-items: center;
		justify-content: center;

		background: none;
		border: none;
		font-size: inherit;
		font-family: inherit;
		cursor: pointer;
	}

	.sort-wrap button:hover {
		background: var(--white);
	}

	.sort-wrap button:nth-of-type(odd) {
		background: var(--medium);
	}

	.sort-wrap button:nth-of-type(odd):hover {
		background: var(--dark);
	}
</style>