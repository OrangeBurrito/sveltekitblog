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
			<img src="static/profile.png" alt="orangeburrito circa 2021" />
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
	
	.navbar .title {
		padding: 1rem;
		margin: 0 0 8px 8px;
		font-family: "IBM Plex Mono";
		font-size: var(--massive-fz);
		text-shadow: -8px 8px var(--dark);
	}

	nav a {
		display: block;
		font-family: "Fira Code";
		font-size: 30px;
		padding: 1rem 2rem;
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
		margin-left: auto;
  margin-right: auto;
	
	}

	.polaroid .tape {
		z-index: 1;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		top: -40px;
		width: 40px;
		height: 90px;
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

		width: 230px;
		height: 300px;

		padding: 1rem;

		font-size: 1.5rem;
		text-align: center;
		transform: rotate(-2deg);

		color: var(--black);
		background: var(--white);
		box-shadow: -4.18446px 3.34757px 8.36893px rgba(28, 33, 51, 0.1);
	}

	.polaroid img {
		width: 100%;
	}

	.polaroid .caption {
		padding: 1rem;
	}

	.polaroid:hover > .content {
		transform: rotate(0deg);
		box-shadow: 4.18446px 8.34757px 8.36893px rgba(28, 33, 51, 0.1);
	}

	.polaroid:hover > .tape { transform: rotate(5deg)}
	
</style>
