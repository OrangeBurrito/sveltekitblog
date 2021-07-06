<script>
	import "../style.css";
</script>

<div class="wrap">
	<header>
		<a href="/" class="header-title">
			<h1>SvelteKit</h1>
		</a>
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

	.header-title {
		color: inherit;
		text-decoration: none;
	}

	footer {
		background: gray;
		text-align: center;
	}
</style>
