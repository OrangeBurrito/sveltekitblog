<script>
	export let posts = []
</script>

<div class="list">
	{#each posts as post}
	<div>
		<a href={`blog/${post.slug}`}>{post.title}</a>
	</div>
	{/each}
</div>

<style>
	.list div {
		background:#cddceb;
		margin-bottom: 1rem;
		padding: 1rem 2rem;
		text-decoration: none;
		font-size: 1.2rem;
		display: inline-block;
	}

	.list div:hover {
		cursor: pointer;
		background: cornflowerblue;
		font-size: 1.3rem;
	}
</style>