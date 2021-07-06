<script context="module">
	export function load({page}) {
		return {
			props: {
				title: page?.params?.slug
			}
		}
	}
</script>

<script>
	export let title
</script>

<h1>🐌 {title}</h1>