<script>
	import {onMount, onDestroy} from 'svelte'
	import {isFadeout} from '../../stores.js'
	export let post = {};

	onMount(() => {
		$isFadeout = true
	})

	onDestroy(() => {
		$isFadeout = false
	})
</script>

<div class="post-wrap">
	<header>
		<div class="text-container">
			<div>
				<h1>{post.title}</h1>
			</div>
			<div class="date">
				<strong>Published: </strong>{post.date}<br></div>
				{#if post.lastUpdated}
				<div class="date">
					<strong>Updated: </strong> {post.lastUpdated}
				</div>
				{/if}
		</div>
		<div class="cover-image">
			<img class="placeholder" src={post.coverImage} alt="" />
		</div>
	</header>
	<div class="content">{@html post.content}</div>
	<footer>Copyright © OrangeBurrito 2021</footer>
</div>

<style>
	.post-wrap {
		background: var(--white);
		width: 100%;
		margin: 0 auto;
		border-radius: var(--bdrs);
	}

	header {
		position: relative;
	}

	.cover-image {
		width: 100%;
		height: 250px;
	}

	.text-container {
		display: block;
		position: absolute;
		font-size: var(--regular-fz);
		bottom: 0;
		left: 0;
	}

	.date strong {
		font-family: var(--code-font);
		font-size: var(--regular-fz)
	}
	
	.text-container h1, .text-container .date {
		display: inline-block;
		background: var(--white);
		padding: var(--padding-small) var(--padding-regular);
		box-shadow: rgba(var(--bxs-black), 0.09) 0px 2px 1px, rgba(var(--bxs-black), 0.09) 0px 4px 2px, rgba(var(--bxs-black), 0.09) 0px 8px 4px, rgba(var(--bxs-black), 0.09) 0px 16px 8px, rgba(var(--bxs-black), 0.09) 0px 32px 16px;
	}

	.text-container .date {
		margin-right: 2rem;
	}

	.text-container .date:nth-of-type(3) {
		margin-top: -5rem;
		/* background: salmon; */
	}

	.content {
		position: relative;
		box-shadow: 0 -10px 8px -6px rgba(var(--bxs-black), 0.5);
		padding: var(--padding-regular) var(--padding-large);
	}

	.content :global(p) {
		margin-bottom: var(--padding-medium);
	}

	.content :global(a) {
		background:
     linear-gradient(
       to bottom, var(--accent) 0%,
       var(--accent) 100%
     );
		 padding-bottom: 3px;
		 background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 4px 2px;
		color: inherit;
		text-decoration: none;
		transition: all .125s ease-in;
	}

	.content :global(a:hover) {
		color: var(--white);
		background-size: 4px 50px;
	}

	.content :global(h1), .content :global(h2), .content :global(h3), .content :global(h4) {
		margin-top: var(--padding-huge);
		margin-bottom: var(--padding-regular);
	}

	.content :global(h2:first-of-type) {
		margin-top: var(--padding-regular);
	}

	.content :global(img) {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--padding-regular);
		border-radius: var(--bdrs);
	}

	.content :global(img + p) {
		text-align: center;
		font-family: var(--flourish-font);
		margin-bottom: var(--padding-large);
	}

	.content :global(.image-caption) {
		text-align: center;
		font-family: var(--flourish-font);
		margin-bottom: var(--padding-large);
	}

	footer {
		font-family: var(--code-font);
		text-align: center;

		padding: var(--padding-medium);
		color: var(--white);
		background: var(--dark);
	}

	@media (min-width: 500px) {
		.text-container {
			font-size: var(--medium-fz);
			bottom: var(--padding-regular);
			left: var(--padding-regular);
		}

		.cover-image {
			height: 300px;
		}
	}

	@media (min-width: 500px) and (max-width: 1023px) {
		.post-wrap {
			width: 50ch;
		}
	}

	@media (min-width: 1024px) {
		.post-wrap {
			position: absolute;
			width: 60ch;
			left: 50%;
			transform: translate(-50%);
		}

		/* .navbar-wrap::after {
			content: "";
			height: 400px;
			background: linear-gradient(to bottom, var(--medium), var(--light));
		} */
	}
</style>
