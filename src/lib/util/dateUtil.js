/**
 * 
 * @param {exp} dateStr in yyyy-mm-dd format
 */

export function parseDate(dateStr) {
	try {
	const regex = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/
	const result = dateStr.match(regex)
	
	const year = parseInt(result.groups.year)
	const month = parseInt(result.groups.month) - 1
	const day = parseInt(result.groups.day)


	return new Date(year, month, day, 0,0,0)
	} catch (err) {
		return undefined
	}
}

export function formatPostDate(date) {
	let d = new Date(date)
	console.log(d, typeof d)
 	return new Intl.DateTimeFormat('en-UK').format(d)
}