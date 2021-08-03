import fs from 'fs'
import path from 'path'
import util from 'util'
import {parseDate} from './dateUtil'

const readDirAsync = util.promisify(fs.readdir)
const readFileAsync = util.promisify(fs.readFile)


export async function getPosts() {
	const filenames = await readDirAsync('src/posts')
	const posts = []

	for (let filename of filenames) {
		let post = await getPostBySlug(getSlug(filename))
		posts.push(post)
	}

	// TODO: if post has lastUpdated, sort by that instead
	return posts.slice().sort((a,b) => a.sortDate > b.sortDate ? -1 : 1)
}

export async function getPostBySlug(slug) {
	const markdown = await getPostContent(slug)
	const result = parseMarkdown(markdown)

	const post = {
		title: result.frontmatter.find(t => t.key === 'title').value,
		date: result.frontmatter.find(t => t.key === 'date').value,
		lastUpdated: result.frontmatter.find(t => t.key === 'lastUpdated')?.value,
		coverImage: result.frontmatter.find(t => t.key === 'coverImage')?.value,
		content: result.content,
		slug
	}

	post.sortDate = parseDate(post.date)

	post.sortLastUpdated = parseDate(post.lastUpdated)

	return post
}

async function getPostContent(slug) {
	const fullpath = path.join('src/posts', `${slug}.md`)
	const postContent = await readFileAsync(fullpath, 'utf-8')

	return postContent
}

function parseMarkdown(md) {
	const regex = /^\s*(-{3,}\s)(?<frontmatter>[\w\W]+)(-{3,})\s(?<content>[\w\W]+)/i
	const result = md.match(regex)
	if (!result) {
		return {
			frontmatter: [],
			content: ''
		}
	}

	return {
		frontmatter: parseKeyValues(result.groups.frontmatter),
		content: result.groups.content
	}
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

function getSlug(filename) {
	return filename.slice(0, filename.lastIndexOf('.'))
}