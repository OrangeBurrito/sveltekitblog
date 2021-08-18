<script>
	import { browser } from "$app/env";
	import { onMount } from "svelte";
import { themes } from "../../themes"
import {appConfig, setTheme} from '../../stores'

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
	<h1>Themes</h1>
	<div class="button-wrap">
		{#each themes as theme}
				<button on:click={() => onSelect(theme.name)} class:selected={theme.name === $appConfig.theme}>{theme.name}</button>
		{/each}
	</div>
</div>

<style>
	.themes-wrap {
		padding: var(--padding-regular);
		grid-area: themes;
	}

	.button-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	button {
		text-transform: capitalize;
		background: rgba(0,0,0,0.0);
		padding: var(--padding-regular);
	}

	button:nth-of-type(1) {
		background: var(--black);
		color: var(--white);
	}

	button:nth-of-type(2) {
		background: var(--dark);
		color: var(--white);
	}

	button:nth-of-type(3) {
		background: var(--medium);
		color: var(--white);
	}

	button:nth-of-type(4) {background: var(--medium-light);}

	button:nth-of-type(5) {background: var(--light);}

	button:nth-of-type(6) {background: var(--white);}

	.selected {
		text-decoration: underline;
		background: var(--accent);
		padding: var(--padding-regular);
	}

	button {
		display: block;
		padding: 0;
	}

	:global(body) {
		--theme-white: var(--white);
		--theme-dark: var(--dark);
		--polaroid-white: var(--white);
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

		--polaroid-white: #234d70;
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

		--polaroid-white: var(--medium-light);
	}
</style>