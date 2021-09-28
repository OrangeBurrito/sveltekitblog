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
		<button on:click={onPreviousPage}>❮ Previous</button>
		<button on:click={onNextPage}>Next ❯</button>
	</div>

	<style>
		.pager-wrap {
			display: flex;
			justify-content: flex-end;
			gap: var(--padding-regular);
			background: var(--light);
			margin-top: var(--padding-regular);
		}
 
		button {
			display: inline-block;
			font-weight: bold;
			background: var(--white);
			border-bottom: 5px solid transparent;
			border-radius: var(--bdrs-small);
		}

		button:hover {
			border-bottom: 5px solid var(--medium);
		}
	</style>