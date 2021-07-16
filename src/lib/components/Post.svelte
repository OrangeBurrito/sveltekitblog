<script>
	export let post = {}
</script>

<h1>{post.title}</h1>
<pre>{post.date}</pre>
{#if post.coverImage}
<img src={post.coverImage} alt="featuredimage"/>
{/if}
<div>{@html post.content}</div>
