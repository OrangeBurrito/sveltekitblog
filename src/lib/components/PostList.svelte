<script>
import Post from "./Post.svelte";

	export let posts = [];
</script>

<div class="list">
	{#each posts as post}
		<a class="card" href={`blog/${post.slug}`}>
			<img class="placeholder" src={post.coverImage}/>
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
				<!-- <div class="link-icon"> -->
					<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" fill="var(--black)"/></svg>
				<!-- </div> -->
			</div>
		</a>
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: var(--padding-medium);
		padding: var(--padding-medium);
		height: 100vh;
	}

	.card {
		display: grid;
		grid-template-rows: 40% 45% 15%;
		top: 0;
		transition: 0.1s ease-out;
	}
	
	.card:hover {
		top: -5px;
		box-shadow: rgba(var(--bxs-black), 0.25) 0px 25px 50px -12px;
	}

	.card:hover > .text-container {
		color: var(--accent);
	}

	@media screen and (max-width: 1200px) {
		.text-container :global(.title) {
			font-size: 22px;
		}
	
		.text-container :global(.description) {
			font-size: 16px;
			line-height: 130%;
		}
	}
</style>
