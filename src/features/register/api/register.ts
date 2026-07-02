import api from '../../../api/api'
import type IData from '../types/register'

export const loginFn = (data: IData) => {
	return api.post('/auth/login', data)
}
