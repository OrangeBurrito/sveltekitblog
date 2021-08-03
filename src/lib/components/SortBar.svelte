<script>

</script>

<div class="sort-wrap">
	
	<button class="sort-desc">DESC</button>
	<button class="sort-asc">ASC</button>
	<button class="sort-best">🌟🏆</button>
	<button class="navigation older">
		<p>Previous</p>
		<h2 class="number">54</h2>
	</button>
	<button class="navigation newer">
		<p>Next</p>
		<h2 class="number">56</h2>
	</button>
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

	.navigation {
		position: relative;
		border: 2px solid salmon;
	}

	.navigation p {
		position: absolute;
		top: var(--padding-small);
		left: var(--padding-small);
	}

	.navigation .number {
		position: absolute;
		bottom: 2px;
		right: 6px;
		font-size: var(--big-fz);
		color: var(--dark);
	}

	.navigation:hover, .navigation:hover > .number {
		color: var(--light);
	}
</style>