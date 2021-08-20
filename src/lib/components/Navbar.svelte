<script>
	import Bust from '$lib/components/Bust.svelte'
	import {isFadeout} from '$lib/stores.js'
</script>

<div class="navbar-wrap" class:fadeout={$isFadeout === true}>
	<a href="/">
		<h1 class="title">Orange<span>Blog</span></h1>
	</a>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="/projects">Projects</a>
	</nav>
	<Bust/>
</div>

<style>
	.navbar-wrap {
		position: relative;
		background: var(--medium);
	}

	.navbar-wrap .title {
		padding: var(--padding-regular) var(--padding-large);
		margin: 0 0 8px 8px;
		font-family: var(--logo-font);
		font-size: 36px;

		text-shadow: -4px 4px var(--theme-dark);
		color: var(--theme-white);
		text-align: right;
	}

	nav {
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		color: var(--theme-white);
		margin-left: auto;
	}

	nav a {
		display: block;
		text-align: center;
		font-family: var(--code-font);
		font-size: 20px;
		padding: var(--padding-small) 2rem;
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

	@media (min-width: 500px) {

		.navbar-wrap .title {
			font-size: 46px;
			text-shadow: -8px 8px var(--theme-dark);
		}

		nav a {
			font-size: var(--medium-fz);
			padding: var(--padding-regular);
		}
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
		text-align: left;
		font-size: 4.5vw;
		padding: var(--padding-regular);
	}

		nav,
		nav a {
			display: block;
			width: 100%;
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
