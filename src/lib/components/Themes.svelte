<script>
	import { browser } from "$app/env";
	import { onMount } from "svelte";
	import { themes } from "$lib/themes"
	import {appConfig, setTheme} from '$lib/stores'
	import {clickOutside} from '$lib/clickOutside.js'

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

	let open = false

	const onClickOutside = () => open = false

	function onKeyDown(event) {
		if (event.key === 'Escape') {
			open = false
		}
	}
</script>

<div class="card theme-wrap" on:click={() => open = !open} class:open={open === true} >
	<h2 use:clickOutside on:click_outside={onClickOutside}>THEMES®</h2>
	<div class="themes-wrap">
		{#each themes as theme}
		<button on:click={() => onSelect(theme.id)} class:selected={theme.id === $appConfig.theme}>
			<div class="color-block" style="background:{theme.hexCode}"></div>
			<div class="text-wrap">
				<div class="name">{theme.name}</div>
				<div class="number">{theme.number}</div>
			</div>
		</button>
		{/each}
	</div>
</div>

<svelte:window on:keydown={onKeyDown}/>

<style>
	.theme-wrap {
		grid-area: themes;
		cursor: pointer;
		overflow: hidden;
		height: calc(100% + 400px);
		font-size: 0.9rem;
		font-family: Helvetica Neue;
		transition: 0.4s ease-out;
		border-radius: var(--bdrs) var(--bdrs) 0 0; 
		margin-bottom: -1.5rem;
	}
	
	.theme-wrap:hover {
		transform: translateY(-10px);
	}
	
	.open, .open:hover {
		box-shadow: rgba(var(--bxs-black), 0.8) 0px 20px 30px -10px; 
		transform: translateY(calc(-400px + 1.5rem));
	}

	h2 {padding: var(--padding-regular);}

	.themes-wrap {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 var(--padding-small);
		margin-top: var(--padding-small);
	}
	
	button {
		display: inline-block;
		background: var(--white);
		padding: 0;
		text-align: left;
	}

	.color-block {
		width: 100%;
		min-height: 90px;
	}

	.text-wrap {padding: var(--padding-small) 0 var(--padding-medium) var(--padding-regular);	}

	.number {color: rgba(var(--gray), 0.8);}

	.name {		
		text-transform: uppercase;
		font-weight: bold;
	}

	.selected {box-shadow: var(--card-shadow);}

	.selected .name {color: var(--accent)}
	
	@media (min-width: 1280px) {
		.theme-wrap {
			font-size: 1.1rem;
		}

		.color-block {
			min-height: 120px;
		}
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

	:global(.deviantart) {
		--black: #2c3635;
		--dark: #414d4c;
		--medium:#7e9180;
		--medium-light: #98aa96;;
		--light: #dbe4d7;
		--white: #fff;
		--accent: #337287;
		--bxs-black: 46, 52, 64;
		
		--bdrs: 0;
	}
</style>