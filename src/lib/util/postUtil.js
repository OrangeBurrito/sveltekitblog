import fs from 'fs'
import path from 'path'
import util from 'util'

const readDirAsync = util.promisify(fs.readdir)
const readFileAsync = util.promisify(fs.readFile)

export async function getPosts() {
	const filenames = await readDirAsync('src/posts')
	const posts = filenames.map(n => n.slice(0, n.lastIndexOf('.')))

	return posts
}

export async function getPostContent(slug) {
	const fullpath = path.join('src/posts', `${slug}.md`)
	const postContent = await readFileAsync(fullpath, 'utf-8')

	return postContent
}

function parseKeyValues(fm) {
	const regex = /^(?<key>[a-z]+):\s*(?<value>[\w\W]*)/i
	const trimQuoteRegex = /^('|")+|('|")$/g
	const keyValues = fm.split('\n')
		.filter(line => line.length > 0)
		.map(line => {
			const result = line.match(regex)
			return {
				key: result.groups.key,
				value: result.groups.value.replace(trimQuoteRegex, '')
			}
		})
		return keyValues
}

export function parseMarkdown(md) {
	const regex = /^\s*(-{3,}\s)(?<frontmatter>[\w\W]+)(-{3,})\s(?<content>[\w\W]+)/i
	const result = md.match(regex)
	if (!result) {
		return {
			frontmatter: [],
			content: ''
		}
	}
	console.log(result.groups.frontmatter)
	return {
		frontmatter: parseKeyValues(result.groups.frontmatter),
		content: result.groups.content
	}
}