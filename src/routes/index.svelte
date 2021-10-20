<script context="module">
  export async function load({ fetch }) {
    const resp = await fetch("/blog/posts.json");
    const posts = await resp.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import PostList from "$lib/components/PostList.svelte";
  import ThemeSelector from "$lib/components/ThemeSelector.svelte";
  import { themeStore, setTheme } from "$lib/stores";

  export let posts = [];
</script>

<svelte:head>
  <title>OrangeBlog</title>
</svelte:head>

<div class="wrap">
  <PostList {posts} />
  <ThemeSelector themes={$themeStore.themes} selectedTheme={$themeStore.selectedTheme} on:selected={(e) => setTheme(e.detail)} />
  <div class="card library">
    <!-- <h3>Latest project</h3> -->
  </div>
</div>

<style>
  .wrap {
    padding: var(--padding-medium);
  }

  @media screen and (min-width: 550px) {
    .wrap {
      overflow: hidden;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr 2fr;
      grid-template-areas:
        "posts posts"
        "themes library";
      flex-direction: column;
      gap: var(--padding-medium);
    }
  }

  @media screen and (min-width: 1280px) {
    .wrap {
      grid-template-columns: 1fr 2.5fr;
    }
  }
</style>
