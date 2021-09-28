import { getPosts } from "$lib/util/postUtil";

export async function get() {
	const posts = await getPosts()
	return {
		body: posts
	}
}



async function load() {
	const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=######')

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`
		throw new Error(message)
	}

	const data = await response.json()
	return data
}