import { getPostContent } from "$lib/util/postUtil"

export async function get({ params: { slug } }) {

	const postContent = await getPostContent(slug)

	return {
		body: {
			content: postContent
		}
	}
}