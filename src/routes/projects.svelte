<main>
  <div class="wrap">
    <h1>Projects</h1>
    <div class="links">
      <a href="https://github.com/orangeburrito">Github Projects</a>
      <a href="https://replit.com/@orangeburrito">Repl.it</a>
      <a href="https://codepen.io/orangeburrito">Codepen</a>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
	
	h1 {
		background: var(--white);
		font-size: clamp(var(--large-fz), 4vw, var(--huge-fz));
		padding: var(--padding-large);
		margin-bottom: var(--padding-regular);
	}

	.links {
		display: flex;
		grid-gap: var(--padding-medium);
	}

	.links a {
		background: linear-gradient(to bottom, var(--accent) 0%, var(--accent) 100%);
    padding-bottom: 3px;
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 2px;
    color: inherit;
    text-decoration: none;
    transition: all 0.125s ease-in;
  }

  .links a:hover {
    color: var(--white);
    background-size: 4px 50px;
  }
</style>
