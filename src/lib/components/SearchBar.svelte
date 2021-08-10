<div class="search-wrap">
	<input type="text" placeholder="search for posts">
	<div class="number-of-posts">??? Posts | </div>
	<button class="sorting-btn"> Sorting</button>
</div>

<style>
	.search-wrap {
		width: 100%;
		display: flex;
		background: var(--white);
		border-radius: var(--bdrs);
		grid-area: search;
	}

	input {
		width: 60%;
		height: 100%;
		background: none;
		font-size: inherit;
		font-family: inherit;
		padding: var(--padding-regular);
		border: none;
		border-radius: var(--bdrs);
		color: inherit;
	}

	.sorting-btn {
		border-left: 1px solid var(--black);
	}
</style>