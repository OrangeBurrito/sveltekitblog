<script context="module">
	export async function load({fetch}){
		// const resp = await fetch('/blog/postSlugs')
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

	export let posts = []
</script>

<svelte:head>
	<title>OrangeBurrito</title>
</svelte:head>

<main>
	<PostList {posts}/>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 8fr 1fr;
		/* max-width: 100vh; */
	}
</style>