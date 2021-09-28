<script context="module">
	import Post from "$lib/components/Post.svelte";
	import marked from "marked";

	const renderer = new marked.Renderer();

	// for styling p tags after image tags (intended to be captions)
	renderer.paragraph = (text) => {
		if (text.startsWith("<img")) {
			return text + "\n";
		}
		return "<p>" + text + "</p>";
	};

	marked.setOptions({
		breaks: true,
	});

	export async function load({
		fetch,
		page: {
			params: { slug },
		},
	}) {
		const resp = await fetch(`/blog/${slug}.json`);
		const post = await resp.json();

		post.content = marked(post.content, { renderer: renderer });

		return {
			props: {
				post,
			},
		};
	}
</script>

<script>
	import { onMount } from "svelte";

	import hljs from "highlight.js/lib/core";
	import javascript from 'highlight.js/lib/languages/javascript';
	import shell from "highlight.js/lib/languages/shell";
	import "highlight.js/styles/tomorrow-night-blue.css";
	
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('shell', shell);
	
	export let post;

	onMount(() => {
		const codeBlocks = document.querySelectorAll("code");
		codeBlocks.forEach((codeBlock) => {
			if (typeof codeBlock === "object") {
				hljs.highlightElement(codeBlock);
			}
		});
	});
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Post {post} />