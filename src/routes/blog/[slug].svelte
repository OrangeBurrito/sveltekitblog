<script context="module">
	export async function load({fetch, page: {params: {slug}}}) {

		const resp = await fetch(`/blog/post-${slug}`)
		const post = await resp.json()
		
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

<h1>{post.title}</h1>
<p>🐌 {post.content}</p>