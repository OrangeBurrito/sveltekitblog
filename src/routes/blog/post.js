import fs, { readFile } from 'fs'
import path from 'path'
import util from 'util'

const readDirAsync = util.promisify(fs.readdir)
const readFileAsync = util.promisify(fs.readFile)
const existsAsync = util.promisify(fs.exists)

export async function get() {

	const filename = path.join(process.cwd(), 'src/posts', 'first.md')
	console.log('filename: ', filename)

	const exists = await existsAsync(filename)
	console.log('does exist?', exists)

	const fileContent = await readFileAsync(filename, 'utf-8')

	console.log('content: ', fileContent)

	return {
		body: {
			content: fileContent
		}
	}
}