import { writable} from 'svelte/store'
import {themes} from './themes.js'

export const isFadeout = writable(false)


const initial = {
	theme: themes.find(t => t.default).name
}

export const appConfig = writable(initial)


function setTheme(name) {
	appConfig.update(s => {
		s.theme = name
		return s
	})
}

export { setTheme }