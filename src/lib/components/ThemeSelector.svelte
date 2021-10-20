<script>
	import { themeStore, setTheme} from '$lib/stores'
	import {clickOutside} from '$lib/clickOutside.js'
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let themes = [];
	export let selectedTheme = "";

	$: {
		dispatch("selected", selectedTheme);
	}

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
		<button on:click={() => setTheme(theme.id)} class:selected={theme.id === themes.selectedTheme}>
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
		display: none;
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

	@media (min-width: 550px) {
		.theme-wrap {
			display: block;
		}
	}
	
	@media (min-width: 1280px) {
		.theme-wrap {
			font-size: 1.1rem;
		}

		.color-block {
			min-height: 120px;
		}
	}
</style>