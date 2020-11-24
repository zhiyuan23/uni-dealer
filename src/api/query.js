import api from './index'
// axios
import request from '@/utils/request'
import nativeRequest from '../utils/nativeRequest'

// 获取企业信息
export function getOrgInfo(params) {
    return request({
        url: api.getOrgInfo,
        method: 'get',
        params,
        hideloading: true
    })
}

//
// 产品查询
export function getMaterialInfo(params) {
    return request({
        url: api.getMaterialInfo,
        method: 'get',
        params,
        hideloading: true
    })
}

// 编码查询
export function getCodeInfo(params) {
    return request({
        url: api.getCodeInfo,
        method: 'get',
        params,
        hideloading: true
    })
}

// 获取省市区
export function getchildlist(params) {
    return nativeRequest({
        url: api.getchildlist,
        method: 'get',
        params
    })
}

// 获取省市区
export function addStore(params) {
    return request({
        url: api.addStore,
        method: 'post',
        params
    })
}

