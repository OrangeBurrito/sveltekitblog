<script context="module">
	export async function load({fetch}){
		const resp = await fetch('/blog/posts.json')
		const posts = await resp.json()

		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
import PostList from "$lib/components/PostList.svelte";
import SearchBar from "$lib/components/SearchBar.svelte";
import Themes from "$lib/components/Themes.svelte";

	export let posts = []
</script>

<svelte:head>
	<title>OrangeBlog</title>
</svelte:head>

<div class="wrap">
	<SearchBar/>
	<PostList {posts}/>
	<Themes/>
	<div class="card library">
		<h3>Recently Read Reviews</h3>
	</div>	
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 0.5fr 3fr 2fr;
		grid-template-areas:
		'search search'
		'posts posts'
		'themes library';
		flex-direction: column;
		gap: var(--padding-medium);
		margin: var(--padding-medium);
	}

	@media (min-width: 1024px) {
		.wrap {
			height: calc(100vh - (var(--padding-medium) * 2));
		}
	}
</style>