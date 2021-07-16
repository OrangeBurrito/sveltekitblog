<script>
import Post from "./Post.svelte";

	export let posts = []
</script>

<div class="list">
	{#each posts as post}
	<a href={`blog/${post.slug}`}>
		<img src={post.coverImage} alt="can't find it :("/>
		<div class="text">
			<h2>{post.title}</h2>
			<pre>{post.date}</pre>
		</div>
	</a>
	{/each}
</div>

<style>
	.list a {
		display: inline-block;
		height: 300px;
		width: 400px;
		border-radius: 15px;
		margin: 0.5rem;
		font-size: 1.2rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		background:#cddceb;
	}

	.list a:hover {
		cursor: pointer;
		background: cornflowerblue;
	}

	.list a img {
		width: 100%;
		height: 65%;
	}

	.list a .text {
		padding: 1rem 2rem;
	}
</style>