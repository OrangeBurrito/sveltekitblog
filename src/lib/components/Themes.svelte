<script>
	import { browser } from "$app/env";
	import { onMount } from "svelte";
	import { themes } from "$lib/themes"
	import {appConfig, setTheme} from '$lib/stores'

$: {
		if (browser) {
			document.body.className = $appConfig.theme
		}
	}

	function onSelect(name) {
		localStorage.setItem('theme', name)
		setTheme(name)
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme')

		if (savedTheme) {
			setTheme(savedTheme)
		}
	})
</script>

<div class="card themes-wrap">
	<h2>Themes</h2>
	<div class="button-wrap">
		{#each themes as theme}
				<button on:click={() => onSelect(theme.id)} class:selected={theme.id === $appConfig.theme}>{theme.name}</button>
		{/each}
	</div>
</div>

<style>
	.themes-wrap {
		grid-area: themes;
	}

	h2 {
		padding: var(--padding-regular);
	}

	.button-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	button:nth-of-type(even) {
		background: var(--light);
	}

	button:nth-of-type(3n) {
		background: var(--medium);
	}

	button {
		display: block;
		flex-grow: 1;
		padding: var(--padding-regular);
	}

	.selected {
		text-decoration: underline;
		background: var(--accent);
		color: var(--white);
	}

	:global(body) {
		--theme-white: var(--white);
		--theme-dark: var(--dark);
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

	:global(.nord) {
	--black: #2e3440;
	--dark: #3b4252;
	--medium: #4c566a;
	--medium-light:#81a1c1;
	--light: #d8dee9;
	--white: #eceff4;
	--accent: #8fbcbb;
	--bxs-black: 46, 52, 64;
	}


	:global(.nightowl) {
		--black: #d6deeb;
		--dark: #122d42;
		--medium: #011627;
		--medium-light: #122d42;
		--light: #0b253a;
		--white: #011627;
		--accent: #8a63ce;

		--theme-white: var(--accent);
		--theme-dark: var(--medium-light);
	}

	:global(.electron) {
		--black: #f6f6f5;
		--dark: #252d3c;
		--medium: #1C212E;
		--medium-light: #3D4D67;
		--light: #252d3c;
		
		--white: #1C212E;
		--accent: #E26674;

		--theme-white: #E3C18A;
		--theme-dark: var(--medium-light);
	}
</style>