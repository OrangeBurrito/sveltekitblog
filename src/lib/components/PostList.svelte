<script>
	export let posts = []
</script>

<div class="list">
	{#each posts as post}
	<div>
		<a href={`blog/${post}`}>{post}</a>
	</div>
	{/each}
</div>

<style>
	.list div {
		background:#cddceb;
		margin-bottom: 1rem;
	}
</style>