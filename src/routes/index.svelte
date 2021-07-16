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
import Date from "$lib/components/Date.svelte";

import PostList from "$lib/components/PostList.svelte";

	export let posts = []
</script>

<svelte:head>
	<title>OrangeBurrito</title>
</svelte:head>

<h1> home</h1>

<PostList {posts}/>