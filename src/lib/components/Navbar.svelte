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
		<a href="/projects">Projects</a>
	</nav>

	<Polaroid />
</div>

<style>
	.navbar-wrap {
		position: relative;
		color: var(--white);
		background: var(--medium);
	}

	.navbar-wrap .title {
		padding: var(--padding-regular);
		margin: 0 0 8px 8px;
		font-family: var(--logo-font);
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
		font-family: var(--code-font);
		font-size: 26px;
		padding: var(--padding-regular) 2rem;
		color: inherit;
		background: var(--medium-light);
	}

	nav a.active {
		position: relative;
		background: var(--medium);
	}

	nav a.active::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 50px;
		top: 0;
		right: -10%;
		background: linear-gradient(to right, rgba(100,122,163,0.75) 50%, rgba(100,122,163,0.35) 50%);
	}

	nav a:nth-of-type(2).active::after {
		left: -10%;
		background: linear-gradient(to left, rgba(100,122,163,0.75) 50%, rgba(100,122,163,0.35) 50%);
	}

	@media (min-width: 1024px) {
		.navbar-wrap {
			height: 100vh;
			display: grid;
		}

		.fadeout::after {
			content: "";
			position: absolute;
			bottom: -200px;
			height: 200px;
			width: 100%;
			background: linear-gradient(to bottom, var(--medium), rgba(1,1,1,0));
	}

	.navbar-wrap .title {
		font-size: 60px;
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
