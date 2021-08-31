import { writable } from 'svelte/store'
import { browser } from '$app/env'
import { themes } from '$lib/themes.js'

export const isFadeout = writable(false)

const postsState = {
	posts: []
}

export const searchStore = writable(postsState)

export const postsStore = writable(postsState)

const themeState = {
	selectedTheme: themes.find(t => t.default).name,
	themes
}

if (browser) {
	themeState.selectedTheme = localStorage.getItem('theme')
	document.body.className = themeState.selectedTheme
}

export const themeStore = writable(themeState)

export function setTheme(theme) {
	localStorage.setItem('theme', theme)
	document.body.className = theme;

	themeStore.update(s => {
		s.selectedTheme = theme
		return s
	})
}

export function createSearchBar(query, result, posts) {
	const state = {
		query,
		result,
		posts
	}

	const store = writable(state)
	
	const originalPosts = store.posts

	function searchFor() {
		store.update(s => {
			s.query =
			// s.posts = originalPosts
			// searchResults = s.posts.filter(p => p.title.toLowerCase().includes(searchTerms.toLowerCase()))
			// s.posts = searchResults
			console.log(s.query, s.result)
			return s
		})
	}

	return {
		searchBar: store,
		searchFor
	}
}

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