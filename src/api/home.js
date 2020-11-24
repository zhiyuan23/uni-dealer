import api from './index'
// axios
import request from '@/utils/request'


// 首页信息
export function homeInfo(data) {
    return request({
        url: api.homeInfo,
        method: 'get',
        data,
        hideloading: true
    })
}

// 登录
export function login(params) {
    return request({
        url: api.Login,
        method: 'post',
        params
    })
}
