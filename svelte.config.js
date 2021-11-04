import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
      crawl: true,
      entries: [
        '*',
        '/blog/[slug]',
      ],
    },
		target: '#svelte'
	}
};

export default config;
