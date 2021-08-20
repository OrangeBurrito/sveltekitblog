<div class="wrap">
		<img id="large" src="/bust_background.svg" alt="">
		<img id="small" src="/head.svg" alt="">
</div>

<style>
	.wrap {
		width: 80%;
		height: 80%;
		margin: 0 auto;
	}
	
	#small {
		height: 60%;
		position: absolute;
		top: var(--padding-regular);
		left: var(--padding-regular);
		filter: drop-shadow(1.5px 1.5px 0 var(--theme-dark))
        drop-shadow(-1.5px 1.5px 0 var(--theme-dark))
        drop-shadow(1.5px -1.5px 0 var(--theme-dark))
        drop-shadow(-1.5px -1.5px 0 var(--theme-dark));		
	}

	#large {
		display: none;
	}

	@media screen and (min-width: 400px) {
		#small {
			height: 80%;
			left: var(--padding-medium);
		}
	}

	@media screen and (min-width: 1024px) {
		#large {
			position: static;
			display: block;
			width: 100%;
			filter: drop-shadow(2px 2px 0 var(--theme-dark))
        drop-shadow(-2px 2px 0 var(--theme-dark))
        drop-shadow(2px -2px 0 var(--theme-dark))
        drop-shadow(-2px -2px 0 var(--theme-dark));
			padding: 0 var(--padding-small);
			transition: 0.1s ease-out;
			cursor: pointer;
		}

		#large:hover {
			transform: rotate(-2deg);
			filter: drop-shadow(7px 2px 0 var(--medium))
			drop-shadow(-7px 2px 0 var(--medium))
			drop-shadow(6px 2px 0 var(--theme-dark))
			drop-shadow(-6px -2px 0 var(--theme-dark));
		}

		#small {display: none;}
	}
</style>