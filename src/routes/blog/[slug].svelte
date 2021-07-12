<script context="module">
	export async function load({fetch, page: {params: {slug}}}) {

		const resp = await fetch(`/blog/${slug}.json`)
		const post = await resp.json()

		console.log(post)

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
<pre>{post.date}</pre>
<div>{post.content}</div>
