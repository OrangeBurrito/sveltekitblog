<script>
	export let href
</script>

<a class="card-wrap" href={href}>
	{#if $$slots.image}
	<div class="image-wrap">
		<slot name="image"></slot>
	</div>
	{/if}

	<div class="text-wrap">
		<h2 class="title"><slot name="title"/></h2>
		<p class="description"><slot name="description"/></p>
	</div>
	
	<div class="info-wrap">
		<div class="date"><slot name="date"/></div>
		<div class="icon"><slot name="icon"/></div>
	</div>
</a>

<style>
	.card-wrap {
		overflow: hidden;
		display: inline-block;
		max-width: 300px;
		top: 0;
		transition: 0.1s ease-out;
		background: var(--white);
		border-radius: var(--bdrs);
	}
	
	.card-wrap:hover {
		top: -5px;
		box-shadow: rgba(var(--bxs-black), 0.25) 0px 25px 50px -12px;
	}


	.card-wrap:hover > .text-wrap {
		color: var(--accent);
	}
	
	.image-wrap :global(img) {
		width: 100%;
		height: 100%;
	}

	.title {padding: 0 0 var(--padding-small) 0;}

	.text-wrap {
		padding: var(--padding-small) var(--padding-regular);
	}

	.info-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 var(--padding-regular) var(--padding-small) var(--padding-regular);
	}

	.date {
		font-size: var(--regular-fz)
	}

	@media screen and (max-width: 1200px) {
		.title {font-size: var(-middling-fz);}
	
		.description {font-size: 16px;line-height: 130%;}
	}
</style>