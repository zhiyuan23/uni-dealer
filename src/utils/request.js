import axios from 'axios'
// 根据环境不同引入不同api地址
import {
    baseUrl
} from '@/config'
// create an axios instance
const service = axios.create({
    baseURL: baseUrl, // url = base api url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000, // request timeout
    async: true,
    crossDomain: true
})

// request拦截器 request interceptor
service.interceptors.request.use(
    config => {
        console.log('baseUrl')
        console.log(baseUrl)
    // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            // Toast.loading({
            //     forbidClick: true
            // })
        }
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config
    },
    error => {
    // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status && res.status !== 200) {
            // 登录超时,重新登录
            if (res.status === 401) {
                // router.push({
                //     path: '/login'
                // })
            }
            return Promise.reject(res || 'error')
        } else {
            if (res.code === 0) {
                return Promise.resolve(res)
            } else {
                return Promise.reject(res || 'error')
            }
        }
    },
    error => {
        console.log(error) // for debug
        // router.push({
        //     path: '/login'
        // })
        return Promise.reject(error)
    }
)

export default service
