<script>
	export let post = {}
</script>

<div class="post-wrap">
	<header>
		<div class="text-container">
			<h1>{post.title}</h1>
			<div class="date">{post.date}</div>
		</div>
		<div class="cover-image">
			<img class="placeholder" src={post.coverImage}/>
		</div>
	</header>
	<div class="content">{@html post.content}</div>
	<footer>Copyright © OrangeBurrito 2021</footer>
</div>

<style>
	.post-wrap {
		padding: var(--padding-medium);
		background: var(--white);
		width: 60ch;
		margin: 0 auto;
	}
	
	header {
		position: relative;
		overflow: hidden;
		border-radius: var(--bdrs);
		background: salmon;
		margin-bottom: var(--padding-medium);
	}
/* 
	:global(.navbar::after) {
		content: '';
		height: 400px;
		background: linear-gradient(to bottom, var(--medium), var(--light));
	} */

	.cover-image {
		width: 100%;
		height: 300px;
	}

	.text-container {
		font-size: var(--medium-fz);
		position: absolute;
		color: var(--white);
		background: rgba(28,33,51, 0.8);
		padding: var(--padding-medium) var(--padding-large);
		border-bottom-right-radius: var(--bdrs);
	}

	.content :global(p) {
		margin-bottom: var(--padding-medium);
	}

	.content :global(a) {
		color: rgb(0,100,200);
		text-decoration: none;
	}

	.content :global(a:hover) {
		text-decoration: underline;
	}

	.content :global(a:visited){
		color: rgb(0,80,160);
	}

	.content :global(img) {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--padding-regular);
		/* width: 100%; */
		border-radius: var(--bdrs);
	}

	.content :global(.image-caption) {
		text-align: center;
		font-family: Actor, sans-serif;
		margin-bottom: var(--padding-large);
	}

	footer {
		font-family: Fira Code;
		text-align: center;

		padding: var(--padding-medium);
		margin: -1.5rem;
		margin-top: 1rem;

		color: var(--white);
		background: var(--dark);
	}
</style>