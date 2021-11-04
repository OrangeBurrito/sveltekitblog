<script>
	import Card from "./Card.svelte";
	import Pager from "$lib/components/Pager.svelte";
	import { browser } from "$app/env";
	
	export let posts = []

	let selectedPosts = []

	export function onPageSelected(e) {
		const {startIndex, endIndex} = e.detail
		selectedPosts = posts.slice(startIndex, endIndex)
	}

	let displayedPostCount = 4

	if (browser) {
		if (window.matchMedia('(min-width: 500px)').matches) {
			console.log('post count:' + displayedPostCount)
		}
	
	}

</script>

<section>
	<div class="list-wrap">
		{#each selectedPosts as post}
		<Card href={`blog/${post.slug}`} sveltekit:prefetch>
			<img slot="image" src={post.coverImage} alt={post.title}/>
			<div slot="title">{post.title}</div>
			<div slot="description">{post.excerpt}</div>
			<div class="date-wrap" slot="date">
				<img id="date-icon" src="/images/clock_icon.png" alt="" />
				<time datetime={post.date}>{post.date}</time>
			</div>
		</Card>
		{/each}
	</div>
	<Pager total={posts.length} limit={displayedPostCount} on:page-selected={onPageSelected}/>
</section>

<svelte:options accessors/>

<style>
	section {
		grid-area: posts;
	}

	/* add margin-bottom to card for mobile view */
	.list-wrap :global(.card-wrap) {
		display: block;
		margin-bottom: var(--padding-medium);
	}

	@media screen and (min-width: 500px) {
		.list-wrap {
			display: grid;
			gap: var(--padding-regular);
		}
		
		/* remove margin-bottom from card */
		.list-wrap :global(.card-wrap) {margin-bottom: 0;}
	}

	@media screen and (min-width: 500px) {
		.list-wrap {grid-template-columns: repeat(3, minmax(100px, 1fr));}
	}
	
	@media screen and (min-width: 701px) {
		.list-wrap {grid-template-columns: repeat(4, minmax(100px, 1fr));}
	}

	@media screen and (max-height: 780px) {
		.list-wrap :global(.card-wrap .title) {font-size: var(-middling-fz);}
	}

</style>
