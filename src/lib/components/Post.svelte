<script>
  import { onMount, onDestroy } from "svelte";
  import { isFadeout } from "$lib/stores.js";
  export let post = {};

  onMount(() => {
    $isFadeout = true;
  });

  onDestroy(() => {
    $isFadeout = false;
  });
</script>

<article>
  <header>
    <div class="text-container header-item">
      <h1 class="title">{post.title}</h1>
      <div class="dates">
        <span class="date">
          <strong>Published: </strong>{post.date}<br />
        </span>
      </div>
    </div>
    <div class="cover-image header-item">
      <img class="placeholder" src={post.coverImage} alt="" />
    </div>
  </header>
  <div class="article-body">{@html post.content}</div>
  <footer>Copyright © OrangeBurrito 2021</footer>
</article>

<style>
  article {
    display: block;
    width: clamp(10ch, 100%, 700px);
    margin: 0 auto;
    background: var(--white);
  }

  header {
    height: 250px;
    padding: clamp(1rem, 2vw, 2rem);
  }

  header .dates {
    font-size: var(--medium-fz);
  }

  .cover-image img {
    display: none;
  }

  .article-body {
    padding: var(--padding-small) var(--padding-regdium);
  }

  .article-body :global(h1),
  .article-body :global(h2),
  .article-body :global(h3),
  .article-body :global(h4) {
    padding: var(--padding-large) 0 var(--padding-regular) 0;
  }

  .article-body :global(p) {
    padding-bottom: var(--padding-medium);
  }

  .article-body :global(li) {
		font-size:  clamp(16px, 2vw, 20px);
    padding-bottom: var(--padding-sm);
  }

  .article-body :global(a) {
    background: linear-gradient(to bottom, var(--accent) 0%, var(--accent) 100%);
    padding-bottom: 3px;
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 2px;
    color: inherit;
    text-decoration: none;
    transition: all 0.125s ease-in;
  }

  .article-body :global(a:hover) {
    color: var(--white);
    background-size: 4px 50px;
  }

  .article-body :global(blockquote) {
    background: var(--light);
    padding: var(--padding-regular);
    border-left: 6px solid var(--medium);
    margin-bottom: var(--padding-medium);
  }
  .article-body :global(blockquote p) {
    padding: 0;
  }

	.article-body :global(img + em) {
		display: block;
		width: 100%;
		text-align: center;
		font-size: calc(16px, 2vw, 20px);
		margin: var(--padding-small) 0 var(--padding-large) 0;
	}


	:global(a[href="sdl"] + p + img + em),
	:global(a[href="sdr"] + p + img + em) {
			display: block;
      text-align: center;
			margin-bottom: var(--padding-large);
  }

  footer {
    font-family: var(--flourish-font);
    background: var(--dark);
    color: var(--white);
    padding: var(--padding-regular);
  }

  @media (min-width: 500px) {
    :global(a[href="sdl"] + p),
    :global(a[href="sdl"] + p + img),
    :global(a[href="sdr"] + p),
    :global(a[href="sdr"] + p + img) {
      display: inline-block;
      vertical-align: top;
      width: 49%;
      margin-bottom: var(--padding-large);
    }

    :global(a[href="sdl"] + p) {
      transform: translateX(100%);
    }

    :global(a[href="sdl"] + p + img) {
			transform: translateX(-100%);
			padding-right: var(--padding-large);
    }

		:global(a[href="sdl"] + img) { padding-right: var(--padding-large);}

		:global(a[href="sdr"] + p) {
			width: 40%;
		}

    :global(a[href="sdr"] + p + img) {
			width: 60%;
      padding-left: var(--padding-large);
    }

    :global(a[href="sdr"] + p + img + em) {
      padding-right: var(--padding-large);
      margin-top: -1.5rem;
    }
  }

  @media (min-width: 700px) {
    header {
      display: flex;
    }

    .header-item {
      width: 50%;
    }

    .cover-image img {
      display: block;
      object-fit: contain;
      height: 100%;
      width: 100%;
    }

    .article-body {
      padding: var(--padding-regular) var(--padding-large);
    }
  }

  @media (min-width: 1204px) {
    article {
      position: absolute;
      width: 55%;
      left: 50%;
      transform: translate(-50%);
    }
  }
</style>
