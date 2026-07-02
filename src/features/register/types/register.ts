export default interface IData {
	serviceName: string
	clientId: string
	userId: string
	requestId: string
	data: {
		username: string
		password: string
		credentials?: string
	}
}
export interface IUser {
	id: number
	name: string
	username: string
	role: number
	face: string | null
	classes: number[]
}
 