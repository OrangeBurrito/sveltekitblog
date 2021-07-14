import { getPosts } from "$lib/util/postUtil";

export async function get() {
	const posts = await getPosts()
	return {
		body: posts
	}
}