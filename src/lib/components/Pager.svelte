<script>
	import {createPageSelector} from '$lib/stores.js'
	import { createEventDispatcher, onMount } from "svelte";
	
		export let total = 0
		export let limit = 0
	
		const {pageSelector, nextPage, previousPage} = createPageSelector(total, limit)
	
		const dispatch = createEventDispatcher()
	
		function dispatchPageSelected() {
			dispatch('page-selected', {
				page: $pageSelector.page,
				startIndex:	($pageSelector.page - 1) * limit,
				endIndex: $pageSelector.startIndex + $pageSelector.limit
			})
		}
	
		function onPreviousPage() {
			previousPage()
			dispatchPageSelected()
		}
		
		function onNextPage() {
			nextPage()
			dispatchPageSelected()
		}
	
		onMount(() => dispatchPageSelected())
	</script>

	<div class="pager-wrap">	
		<button on:click={onPreviousPage}>Previous</button>
		<button on:click={onNextPage}>Next</button>
	</div>

	<style>
		.pager-wrap {
			position: absolute;
			display: flex;
			gap: var(--padding-regular);
			top: 0;
			right: -3rem;

			background: var(--light);
			padding: 0 0 var(--padding-regular) var(--padding-regular);
			border-radius: var(--bdrs);
			border-top-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		button {
			display: inline-block;
			background: var(--white);
		}

		button:hover {
			background: var(--light);
		}
	</style>