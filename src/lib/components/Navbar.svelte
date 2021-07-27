<script>
	import Polaroid from "$lib/components/Polaroid.svelte";
</script>

<header>
	<a href="/">
		<h1 class="title">Orange<span>Blog</span></h1>
	</a>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="blog.svelte">Blogposts</a>
	</nav>

	<Polaroid/>
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

	/* header::after {
		content: '';
		height: 400px;
		background: linear-gradient(to bottom, var(--medium), var(--light));
	} */

	/*  OLD STUFF
	
	header .title {
		padding: var(--padding-regular);
		margin: 0 0 8px 8px;
		font-family: "IBM Plex Mono";
		font-size: 46px;
		
		text-shadow: -8px 8px var(--dark);
	}

	nav a {
		display: block;
		font-family: "Fira Code";
		font-size: 26px;
		padding: var(--padding-regular) 2rem;
	}

	nav a.active {
		background: var(--dark);
	}

	nav a.active::before {
		content: "> ";
	}

	.polaroid {
		position: relative;
		width: 70%;
		margin: 0 auto;
	}

	.polaroid .tape {
		z-index: 1;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 20%;
		right: 20%;
		top: -10%;
		width: 18%;
		height: 24%;
		transform: rotate(4deg);
		background: #beb98b;
		box-shadow: var(--card-shadow);
		box-shadow: 1.67379px 4.18446px 8.36893px 0.836893px rgba(28, 33, 51, 0.4);
	}

	.polaroid .content {
		transition: 0.1s ease-out;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		padding: var(--padding-regular);

		text-align: center;
		transform: rotate(-2deg);

		color: var(--black);
		background: var(--white);
		box-shadow: 4.18446px 8.34757px 8.36893px rgba(28, 33, 51, 0.1)
	}

	.polaroid img {
		width: 100%;
	}

	.polaroid .caption {
		font-size: 1.2rem;
		padding-top: var(--padding-regular);
	}

	.polaroid:hover > .content {
		transform: rotate(0deg);
		box-shadow: -4.18446px 3.34757px 8.36893px rgba(28, 33, 51, 0.1);
	}

	.polaroid:hover > .tape { transform: rotate(5deg)}
	

	@media screen and (min-width: 1150px) {
		header .title {
			font-size: var(--massive-fz);
		}

		nav a {
			font-size: 30px;
		}

		.polaroid .caption {
			font-size: 1.4rem;
		}
	} */
</style>
