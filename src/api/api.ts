import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.data.error == 'Invalid token') {
			localStorage.removeItem('token')
			window.location.href = '/register'
		}
		return Promise.reject(error)
	},
)
export const API_CONFIG = {
	serviceName: 'test',
	clientId: 'test-client',
	userId: '123',
	requestId: 'test-request',
}

export default api
