<script>
	import Card from "./Card.svelte";
	import Post from "./Post.svelte";

	import Pager from "$lib/components/Pager.svelte";

	let selectedPosts = [];

	function onPageSelected(e) {
		const {startIndex, endIndex} = e.detail
			selectedPosts = posts.slice(startIndex, endIndex)
	}

	export let posts = [];
</script>

<div class="list-wrap">
	<Pager total={posts.length} limit={4} on:page-selected={onPageSelected}/>
	{#each selectedPosts as post}
	<Card href={`blog/${post.slug}`}>
		<img slot="image" src={post.coverImage} alt={post.title}/>
		<div slot="title">{post.title}</div>
		<div slot="description">{post.excerpt}</div>
		<div slot="date">{post.date}</div>
		<svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" fill="var(--black)"/></svg>
	</Card>
	{/each}
</div>

<style>
	.list-wrap {
		position: absolute;
		position: relative;
		width: calc(100% - var(--padding-medium)*2);
		height: 100%;
		grid-area: posts;
		background-image: url('https://i.kym-cdn.com/photos/images/original/000/203/742/nothing_to_do_here_by_rober_raik-d4cxltj.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: right;
	}

	.list-wrap :global(.card-wrap) {
		display: grid;
		height: 100%;
		margin-bottom: var(--padding-medium);
	}

	.list-wrap :global(.card-wrap img) {max-height: 150px;}

	@media screen and (max-height: 780px) {
		.list-wrap :global(.card-wrap .title) {
			font-size: 22px;
		}
	}

	@media screen and (min-width: 375px) {
		.list-wrap {
			display: grid;
			grid-template-columns: repeat(4, 25%);
		gap: var(--padding-regular);
		}

		.list-wrap :global(.card-wrap) {margin-bottom: 0;}
	}
</style>
