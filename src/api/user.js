import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(params) {
    return request({
        url: api.Login,
        method: 'post',
        params
    })
}

// 修改密码
export function changepwd(params) {
    return request({
        url: api.changepwd,
        method: 'post',
        params
    })
}

// 用户信息 post 方法
export function getUserInfo(data) {
    return request({
        url: api.UserInfo,
        method: 'post',
        data,
        hideloading: true
    })
}
