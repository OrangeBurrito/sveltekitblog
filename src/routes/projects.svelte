<script>
	import hljs from "highlight.js";
	import javascript from "highlight.js/lib/languages/javascript";
	import "highlight.js/styles/nord.css";
	import { onMount } from "svelte";

	hljs.registerLanguage("javascript", javascript);

	// let blocky = "";

	// const doThing = () => hljs.highlightElement(blocky);

	// onMount(() => {
	// 	blocky = document.getElementById("codeblock");
	// })
</script>

<main>
	<h1>Projects!</h1>

	<!-- <button on:click={doThing}>click me</button>
	<pre>
		<code id="codeblock">
			let blocky = document.getElementById("codeblock")
		</code>
	</pre>

	<pre>
		<code>
			onMount(() => {
				blocky = document.getElementById("codeblock")
			})
			
			const doThing = () => hljs.highlightElement(blocky)
		</code>
	</pre>

	<pre>
		<code>

		</code>
	</pre> -->
</main>
