<script>
	import Polaroid from "$lib/components/Polaroid.svelte";
	import {isFadeout} from '../../stores.js'
</script>

<div class="navbar-wrap" class:fadeout={$isFadeout === true}>
	<a href="/">
		<h1 class="title">Orange<span>Blog</span></h1>
	</a>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="blog.svelte">Blogposts</a>
	</nav>

	<Polaroid />
</div>

<style>
	.navbar-wrap {
		color: var(--white);
		background: var(--medium);
	}

	.fadeout::after {
			content: "";
			height: 400px;
			background: linear-gradient(to bottom, var(--medium), var(--light));
	}

	.navbar-wrap .title {
		padding: var(--padding-regular);
		margin: 0 0 8px 8px;
		font-family: "IBM Plex Mono";
		font-size: 46px;

		text-shadow: -8px 8px var(--dark);
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
		.navbar-wrap {
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

		.navbar-wrap > * {
			align-self: flex-start;
		}

		.title span {
			display: block;
		}
	}
</style>
