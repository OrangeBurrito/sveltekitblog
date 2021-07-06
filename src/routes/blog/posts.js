import fs from 'fs'
import path from 'path'
import util from 'util'



const readDirAsync = util.promisify(fs.readdir)

export async function get() {
	const dirname = path.join(process.cwd(), 'src/posts')
	const files = await readDirAsync(dirname)
	const names = files.map(n => n.slice(0, n.lastIndexOf('.')))

	return {
		body: names
	}
}
