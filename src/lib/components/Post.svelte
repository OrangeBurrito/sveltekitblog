<script>
	import { onMount, onDestroy } from "svelte";
	import { isFadeout } from "../../stores.js";
	export let post = {};

	onMount(() => {
		$isFadeout = true;
	});

	onDestroy(() => {
		$isFadeout = false;
	});
</script>

<div class="post-wrap">
	<header>
		<div class="cover-image">
			<img class="placeholder" src={post.coverImage} alt="" />
		</div>
		<div class="text-container">
			<div>
				<h1>{post.title}</h1>
			</div>
			<div class="dates">
				<div class="date">
					<strong>Published: </strong>{post.date}<br />
				</div>
				{#if post.lastUpdated}
					<div class="date">
						<strong>Updated: </strong>
						{post.lastUpdated}
					</div>
				{/if}
			</div>
		</div>
	</header>
	<div class="content">{@html post.content}</div>
	<footer>Copyright © OrangeBurrito 2021</footer>
</div>

<style>
	.post-wrap {
		display: block;
		width: 100%;
		margin: 0 auto;
		background: var(--white);
	}

	header {
		padding: var(--padding-medium) var(--padding-medium) 0 var(--padding-medium);
		position: relative;
	}

	.cover-image {
		position: relative;
		width: 100%;
		height: 250px;
	}

	.dates {
		display: flex;
	}

	.date strong {
		font-family: var(--code-font);
		font-size: var(--regular-fz);
	}

	.content {
		position: relative;
		padding: var(--padding-medium) var(--padding-large);
	}

	.content :global(p) {
		margin-bottom: var(--padding-medium);
	}

	.content :global(a) {
		background: linear-gradient(
			to bottom,
			var(--accent) 0%,
			var(--accent) 100%
		);
		padding-bottom: 3px;
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 4px 2px;
		color: inherit;
		text-decoration: none;
		transition: all 0.125s ease-in;
	}

	.content :global(a:hover) {
		color: var(--white);
		background-size: 4px 50px;
	}

	.content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.content :global(h4) {
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
		width: 100vw;
		font-family: var(--code-font);
		text-align: center;

		color: var(--white);
		background: var(--dark);
		padding: var(--padding-medium);
		margin-left: calc(-50vw + 50%);
	}

	@media (min-width: 500px) {
		.post-wrap {
			margin-top: var(--padding-medium);
			border-radius: var(--bdrs);
		}

		header {
			border-top-left-radius: var(--bdrs);
			border-top-right-radius: var(--bdrs);
			overflow: hidden;
			padding: 0;
		}

		.cover-image {
			height: 300px;
		}

		.text-container {
			display: block;
			position: absolute;
			z-index: 2;
			font-size: 20px;
			bottom: var(--padding-regular);
			left: var(--padding-regular);
		}

		.text-container h1,
		.text-container .date {
			display: inline-block;
			background: var(--white);
			padding: var(--padding-small) var(--padding-regular);
			box-shadow: rgba(var(--bxs-black), 0.2) 0px 20px 30px;
		}

		.dates {
			display: block;
		}

		.text-container .date {
			margin-right: 2rem;
		}

		.text-container .date:nth-of-type(3) {
			margin-top: -5rem;
		}

		.content {
			box-shadow: 0 0 10px rgba(var(--bxs-black), 0.8);
			clip-path: inset(-6px 0px 0px 0px);
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

		.cover-image {
			height: 350px;
		}

		.text-container {
			font-size: var(--medium-fz);
		}
	}
</style>
