import axios from 'axios'
import history from './history'

const statusCodes = [
	200,
	201,
	202,
	203,
	204,
	205,
	206,
	207,
	208,
	226,
	403
]

let axiosClient = axios.create({
	timeout: 5000,
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	},
	validateStatus: (status) => {
		if(statusCodes.some(s => s === status)) {
			return true
		}
		else return false
	}
})

axiosClient.interceptors.response.use((res) => {
	if(res.status === 403) {
		history.replace('/login')
		return res
	}
	else return res

}, (err) => {
	console.log('error intercepting', err)
})

export default axiosClient