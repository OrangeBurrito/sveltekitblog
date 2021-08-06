<script>
import Post from "./Post.svelte";

	export let posts = [];
</script>

<div class="list">
	{#each posts as post}
		<a class="card" href={`blog/${post.slug}`}>
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
		</a>
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-auto-rows: auto;
		gap: var(--padding-medium);
		padding: var(--padding-medium);
		min-height: 0;  /* NEW */
  	min-width: 0; 
	}

	.placeholder {
		max-height: 150px;
	}

	.card {
		overflow: hidden;
		min-width: 0;
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

	.info-container {
		margin-top: -1rem;
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

	@media screen and (min-width: 1024px) {
		.list {
			max-height: 100vh;
		}
	}
</style>
