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