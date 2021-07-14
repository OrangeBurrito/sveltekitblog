<script>
	import "../style.css";
</script>

<svelte:head>
	<html lang="en"/>
</svelte:head>

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

	<!-- <footer>Copyright © OrangeBurrito 2021</footer> -->
</div>


<style>
	.wrap {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
	
	header {
		padding: 1rem;
		background: silver;
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
