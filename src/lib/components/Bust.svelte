<!-- <div class="outside">
	<div class="inside"/>
</div> -->
<div class="wrap">
	<div class="img-wrap">
		<img src="/bust.svg" alt="">
	</div>
</div>

<style>
	.wrap {
		width: 80%;
		height: 70%;
		margin: 0 auto;
		text-align: center;
	}

	p {
		padding-top: 1rem;
		font-size: 1.5rem;
		color: var(--black);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.img-wrap {
		position: absolute;
		width: 10%;
		right: 0;
		top: 0;
	}
	
	@media (min-width: 1024px) {
		.img-wrap {
			position: relative;
			width: 100%;
		height: 90%;
		}
	}

	img {
		position: relative;
		bottom: 0.5rem;
	}
</style>