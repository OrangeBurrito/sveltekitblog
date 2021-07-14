import { getPostBySlug } from "$lib/util/postUtil"

export async function get({ params: { slug } }) {

	const post = await getPostBySlug(slug)
	
	return {
		body: post
	}
}