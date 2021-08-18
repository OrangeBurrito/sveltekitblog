<script>
import Card from "./Card.svelte";
import Post from "./Post.svelte";

	export let posts = [];
</script>

<div class="list-wrap">
	{#each posts as post}
	<Card href={`blog/${post.slug}`}>
		<img slot="image" src={post.coverImage} alt={post.title}/>
		<div slot="title">{post.title}</div>
		<div slot="description">{post.excerpt}</div>
		<div slot="date">{post.date}</div>
		<svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" fill="var(--black)"/></svg>
	</Card>
		<!-- <a class="card" href={`blog/${post.slug}`}>
			<img class="placeholder" src={post.coverImage} alt=""/>
			<div class="text-container">
				<h2 class="title">{post.title}</h2>
				<p class="description">{post.content.split(/\s+/).slice(0,15).join(' ')}...</p>
			</div>
			<div class="info-container">
				{#if post.lastUpdated}
				<div class="date">{post.lastUpdated}</div>
				{:else}
				<div class="date">{post.date}</div>
				{/if}
					<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" fill="var(--black)"/></svg>
			</div>
		</a> -->
	{/each}
</div>

<style>
	.list-wrap {
		width: 100%;
		overflow-x: scroll;
		gap: var(--padding-medium);
		grid-area: posts;
	}


	.list-wrap :global(.card-wrap) {
		display: grid;
		gap: 5px;
		min-width: 250px;
		max-height: 350px;
		margin-bottom: var(--padding-medium);
	}

	.list-wrap :global(.card-wrap img) {max-height: 150px;}

	@media screen and (min-width: 375px) {
		.list-wrap {
			display: flex;
		}

		.list-wrap :global(.card-wrap) {
			margin-bottom: 0;
			max-height: 100%;
		}
	}
</style>
