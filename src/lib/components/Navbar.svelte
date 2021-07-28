<script context="module">
	let isFadeOut = false
	
	export function fadeOutOn() {
		isFadeOut = true;
	}
	
	export function fadeOutOff() {
		isFadeOut = false;
	}

</script>

<script>
	import Polaroid from "$lib/components/Polaroid.svelte";

</script>

<header class:fadeout={isFadeOut === true}>
	<a href="/">
		<h1 class="title">Orange<span>Blog</span></h1>
	</a>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="blog.svelte">Blogposts</a>
	</nav>

	<Polaroid />
</header>

<style>
	header {
		color: var(--white);
		background: var(--medium);
	}

	header .title {
		padding: var(--padding-regular);
		margin: 0 0 8px 8px;
		font-family: "IBM Plex Mono";
		font-size: 46px;

		text-shadow: -8px 8px var(--dark);
	}

	.fadeout::after {
		content: "";
		height: 400px;
		background: linear-gradient(to bottom, var(--medium), var(--light));
	}

	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	nav a {
		display: block;
		text-align: center;
		font-family: "Fira Code";
		font-size: 26px;
		padding: var(--padding-regular) 2rem;
		color: inherit;
		background: #84acf2;
	}

	nav a.active {
		position: relative;
		background: royalblue;
	}

	nav a.active::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 50px;
		top: 0;
		right: -10%;
		background: linear-gradient(to right, #5f7ff2 50%, #6495ed 50%);
	}

	nav a:nth-of-type(2).active::after {
		left: -10%;
		background: linear-gradient(to left, #5f7ff2 50%, #6495ed 50%);
	}

	@media (min-width: 1024px) {
		header {
			height: 100vh;
			display: grid;
		}

		nav,
		nav a {
			display: block;
		}

		nav a {
			background: var(--medium);
			text-align: left;
		}

		nav a.active {
			background: var(--dark);
		}

		nav a.active::before {
			content: "> ";
		}

		nav a.active::after {
			background: none !important;
		}

		header > * {
			align-self: flex-start;
		}

		.title span {
			display: block;
		}
	}
</style>
