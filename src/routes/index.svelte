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
import SortBar from "$lib/components/SortBar.svelte";
import Themes from "$lib/components/Themes.svelte";

	export let posts = []
</script>

<svelte:head>
	<title>OrangeBlog</title>
</svelte:head>

<main>
	<PostList {posts}/>
	<SortBar/>
	<Themes/>
	<div class="card library">
		<h3>Recently Read Reviews</h3>
	</div>	
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 8fr 1fr;
	}
</style>