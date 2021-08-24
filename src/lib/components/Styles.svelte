<style>
	@font-face {
  	font-family: 'Trebuchet';
		src: url('/fonts/trebuchet.ttf') format('truetype');
	}

	@font-face {
  	font-family: 'Trebuchet';
		src: url('/fonts/trebuchet-italic.ttf') format('truetype');
		font-style: italic;
	}
	
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
		--black: #233231;
		--dark: #40534A;

		--medium:#556C5F;
		--medium-light: #98aa96;;
		--light: #C1CEC1;
		--white: #dbe4d7;
		--accent: #337287;
		--bxs-black: 46, 52, 64;

		--theme-white: #FFFFFF;
		
		--bdrs: 0;

		--regular-fz: 16px;
		--middling-fz: 20px;

		--regular-font: Verdana, sans-serif;
		--header-font: Trebuchet, sans-serif;
	}
</style>