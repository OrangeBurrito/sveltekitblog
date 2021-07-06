<script context="module">
	export async function load({fetch}){
		const resp = await fetch('/blog/postNames')
		// const posts = await resp.json()
		const posts = await resp.json()
		console.log('idnex ', posts)
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

<h1> home</h1>

<PostList {posts}/>

<!-- {#each posts as post}
	<div>
		{post}
	</div>
{/each} -->
<!-- <h1>Something went wrong!</h1>
<img src="https://cdn.hackernoon.com/hn-images/1*v9BSJbg-nwkz4g2VySImBA.png" alt="aw snap"> -->

