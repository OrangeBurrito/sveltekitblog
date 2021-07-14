import { getPosts } from '$lib/util/postUtil'
import fs from 'fs'
import path from 'path'
import util from 'util'

const readDirAsync = util.promisify(fs.readdir)

export async function get() {
	const posts = await getPosts()

	return {
		body: posts
	}
}
