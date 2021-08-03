<script>
	function setTheme(className) {
		window.document.body.classList = className
	}
</script>

<div class="card themes">
	<h1>Themes</h1>
	<button on:click={() => setTheme('')}>Default</button>
	<button on:click={() => setTheme('seafloor')}>Seafloor</button>
</div>

<style>
	.themes {
		padding: var(--padding-regular);
	}

	:global(.seafloor) {
	--black: #0E172F;
	--dark: #1D3557;
	--medium: #345d8b;
	--medium-light:#457B9D;
	--light: #61a1be;
	--white: #F1FAEE;
	--accent: #C33C54;
	--bxs-black: 32, 30, 80;
}
</style>