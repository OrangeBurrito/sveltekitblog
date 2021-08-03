<div class="polaroid">
	<div class="tape" />
	<div class="content">
		<img src="/profile.png" alt="a headshot of orangeburrito circa 2021" />
		<div class="caption">orange<span>burrito<br />circa 2021</span></div>
	</div>
</div>

<style>
	@font-face {
		font-family: "Redacted Script Bold";
		src: local("Redacted Script Bold"),
			url("/redacted-script-bold.woff") format("woff");
	}

	.polaroid {
		position: absolute;
		padding: 5px;
		width: 8%;
		top: 1rem;
		right: 1rem;
		background: #fff;
		font-size: 1rem;
		font-family: "Redacted Script Bold";
		transform: rotate(-2deg);
		align-self: flex-start;
	}

	.polaroid .tape {
		position: absolute;
		z-index: 1;
		width: 18%;
		height: 24%;
		top: -10%;
		left: 40%;
		transform: translate(-50%, 0);
		transform: rotate(4deg);
		background: #beb98b;
		box-shadow: 1.67379px 4.18446px 8.36893px 0.836893px rgba(var(--bxs-black), 0.4);
	}

	.polaroid .caption {
		text-align: center;
		padding: 0.1rem 0;
		color: #333;
	}

	.polaroid .caption span {
		display: none;
	}

	.polaroid img {
		width: 100%;
	}

	@media (max-width: 750px) {
		.polaroid {
			font-size: 0.5rem;
		}
	}

	@media (min-width: 1024px) {
		.polaroid {
			position: relative;
			width: 80%;
			margin: 0 auto;
			top: 0;
			right: 0;
			font-size: 1.3rem;
			font-family: var(--regular-font);
			padding: 0.8rem;
			transition: 0.1s ease-out;
		}

		.polaroid .caption {
			padding: 0.5rem 0;
		}

		.polaroid .caption span {
			display: inline;
		}

		.polaroid:hover {
			transform: rotate(0deg);
			box-shadow: -4.18446px 3.34757px 8.36893px rgba(var(--bxs-black), 0.1);
		}

		.polaroid:hover > .tape {
			transform: rotate(6deg);
		}
	}
</style>
