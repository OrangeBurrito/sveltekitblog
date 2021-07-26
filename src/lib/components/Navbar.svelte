<header class="navbar">
	<a href="/">
		<h1 class="title">Orange Blog</h1>
	</a>
	<nav>
		<a class="active" href="/">Home</a>
		<a href="blog.svelte">Blogposts</a>
	</nav>

	<div class="polaroid">
		<div class="tape" />
		<div class="content">
			<img src="/profile.png" alt="orangeburrito circa 2021" />
			<div class="caption">orangeburrito<br />circa 2021</div>
		</div>
	</div>
</header>

<style>
	.navbar {
		color: var(--white);
		background: var(--medium);
		display: grid;
		grid-template-rows: repeat(1fr, auto);
	}

	/* .navbar::after {
		content: '';
		height: 400px;
		background: linear-gradient(to bottom, var(--medium), var(--light));
	} */

	.navbar .title {
		padding: var(--padding-regular);
		margin: 0 0 8px 8px;
		font-family: "IBM Plex Mono";
		font-size: var(--massive-fz);
		text-shadow: -8px 8px var(--dark);
	}

	nav a {
		display: block;
		font-family: "Fira Code";
		font-size: 30px;
		padding: var(--padding-regular) 2rem;
	}

	nav a.active {
		background: var(--dark);
	}

	nav a.active::before {
		content: "> ";
	}

	.polaroid {
		display: inline-block;
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
		height: 28%;
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

		font-size: 1.5rem;
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
		padding-top: var(--padding-regular);
	}

	.polaroid:hover > .content {
		transform: rotate(0deg);
		box-shadow: -4.18446px 3.34757px 8.36893px rgba(28, 33, 51, 0.1);
	}

	.polaroid:hover > .tape { transform: rotate(5deg)}
	
</style>
