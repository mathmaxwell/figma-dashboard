export function getStartOfDayIso(dateStr: string): string {
	const date = new Date(dateStr)
	date.setUTCHours(0, 0, 0, 0)
	return date.toISOString()
}
export function getEndOfDayIso(dateStr: string): string {
	const date = new Date(dateStr)
	date.setUTCHours(23, 59, 59, 999)
	return date.toISOString()
}
export function toLocalISOString(date: Date) {
	const offsetMs = date.getTimezoneOffset() * 60000
	const localDate = new Date(date.getTime() - offsetMs)
	return localDate.toISOString().slice(0, 23) + 'Z'
}
