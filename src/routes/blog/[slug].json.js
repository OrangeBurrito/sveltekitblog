import { getPostContent, parseMarkdown } from "$lib/util/postUtil"

export async function get({ params: { slug } }) {

	const markdown = await getPostContent(slug)
	const result = parseMarkdown(markdown)

	const post = {
		title: result.frontmatter.find(t => t.key === 'title').value,
		date: result.frontmatter.find(t => t.key === 'date').value,
		content: result.content
	}

	return {
		body: post
	}
}