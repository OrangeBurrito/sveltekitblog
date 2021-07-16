<script context="module">
	import Post from '$lib/components/Post.svelte'
	import marked from 'marked'

	export async function load({fetch, page: {params: {slug}}}) {

		const resp = await fetch(`/blog/${slug}.json`)
		const post = await resp.json()

		post.content = marked(post.content)

		return {
			props: {
				post
			}
		}
	}
</script>

<script>
	export let post
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Post {post}/>