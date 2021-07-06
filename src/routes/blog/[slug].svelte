<script context="module">
	export async function load({fetch, page}) {

		const resp = await fetch('/blog/post')
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

<p>🐌 {post.content}</p>