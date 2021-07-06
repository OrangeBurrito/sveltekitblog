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
