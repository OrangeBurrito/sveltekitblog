<script>
	import "../style.css";
</script>

<div class="wrap">
	<header>
		<h1>SvelteKit</h1>
		<nav>
			<a href="/">Home</a>
			<a href="blog.svelte">Blogposts</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>Copyright © OrangeBurrito 2021</footer>
</div>


<style>
	.wrap {
		height: 100vh;
		display: grid;
		grid-template-rows: 1fr 8fr 1fr;
	}

	.wrap > * {
		width: 100%;
	}
	
	header {
		background: lightgray;
		display: flex;
		align-items: center;
	}

	footer {
		background: gray;
		text-align: center;
	}
</style>
