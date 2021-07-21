<script>
	export let posts = [];
</script>

<div class="list">
	{#each posts as post}
		<a class="card" href={`blog/${post.slug}`}>
			<img src={post.coverImage}/>
			<div class="text">
				<h2>{post.title}</h2>
				<p>{post.date}</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		padding: 1rem;
		height: 600px;
	}

	.card {
		position: relative;
		display: grid;
		grid-template-rows: 2fr 1fr;
		top: 0;
		-webkit-transition: 0.1s ease-out;
	}
	
	.card:hover {
		top: -5px;
		color: var(--accent);
		box-shadow: rgba(28, 33, 51, 0.25) 0px 25px 50px -12px;
	}

	.card img {
		background-image: url("https://cdn.wallpapersafari.com/46/92/aXvp5q.jpg");
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
	}

	.list a .text {
		padding: 1rem 2rem;
	}
</style>
