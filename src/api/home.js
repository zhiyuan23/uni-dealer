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
