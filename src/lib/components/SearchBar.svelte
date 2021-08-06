<div class="search-wrap">
	<input type="text" placeholder="search for posts">
	<div class="number-of-posts">??? Posts | </div>
	<button class="sorting-btn"> Sorting</button>
</div>

<style>
	.search-wrap {
		width: calc(100% - var(--padding-medium) * 2);
		display: flex;
		background: var(--white);
		border-radius: var(--bdrs);
		margin: var(--padding-medium);
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
	}

	.sorting-btn {
		border-left: 1px solid var(--black);
	}
</style>