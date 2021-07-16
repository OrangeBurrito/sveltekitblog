<script>
import Post from "./Post.svelte";

	export let posts = []
</script>

<div class="list">
	{#each posts as post}
	<a href={`blog/${post.slug}`}>
		<img src={post.coverImage} alt="can't find it :("/>
		<h2>{post.title}</h2>
		<pre>{post.date}</pre>
	</a>
	{/each}
</div>

<style>
	.list a {
		display: inline-block;
		width: 400px;
		border-radius: 15px;
		padding: 2rem;
		margin: 0.5rem;
		font-size: 1.2rem;
		text-decoration: none;
		text-align: center;
		color: inherit;
		background:#cddceb;
	}

	.list a:hover {
		cursor: pointer;
		background: cornflowerblue;
	}
</style>