import { writable} from 'svelte/store'
import {themes} from '$lib/themes.js'

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


export function createPageSelector(total, limit) {
	const state = {
		total,
		limit,
		page: 1,
		startIndex: 0,
	}

	const store = writable(state)

	function previousPage() {
		store.update(s => {
			s.page = s.page > 1 ? s.page - 1 : s.page
			s.startIndex = (s.page - 1) * s.limit
			return s
		})
	}

	function nextPage() {
		store.update(s => {
			s.page = s.page * limit < s.total ? s.page + 1 : s.page
			s.startIndex = (s.page - 1) * s.limit
			return s
		})
	}

	return {
		pageSelector: store,
		nextPage,
		previousPage
	}
}