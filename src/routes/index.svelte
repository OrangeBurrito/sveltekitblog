<script context="module">
	export async function load({fetch}){
		const resp = await fetch('/blog/posts')
		// const posts = await resp.json()
		const postNames = await resp.json()
		return {
			props: {
				posts: postNames
			}
		}
	}
</script>

<script>
	export let posts = []
</script>


<h1> home</h1>
{#each posts as post}
	<div>
		{post}
	</div>
{/each}
<!-- <h1>Something went wrong!</h1>
<img src="https://cdn.hackernoon.com/hn-images/1*v9BSJbg-nwkz4g2VySImBA.png" alt="aw snap"> -->

