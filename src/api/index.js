const api = {
    // 微信jssdk
    getScanInfo: '/api/proj/appcustom/getScanInfo',

    // 小程序信息登录
    passport: '/openapi/thirdparty/passport',

    // 权限
    Login: '/api/ebp/syspassport/login',
    getModuleList: '/api/ebp/sysmodule/getModuleList',
    changepwd: '/api/ebp/sysuserregister4pda/changepwd',

    // 信息查询
    homeInfo: '/api/ebt/app/query/homeInfo',
    codeInfo: '/api/ebt/app/query/codeInfo',
    materialInfo: '/api/ebt/app/query/materialInfo',
    orgInfo: '/api/ebt/app/query/orgInfo',
    findHeaderList: '/api/ebt/app/query/findHeaderList',
    findStHeaderList: '/api/ebt/app/query/findStHeaderList',

    // 单据业务
    checkSeniorPwd: '/api/ebt/billbiz/checkSeniorPwd',
    confirmReceived: '/api/ebt/billpromptlybiz/confirmReceived',
    getBillReasonList: '/api/ebt/billpromptlybiz/getBillReasonList',
    getInOutList: '/api/ebt/billpromptlybiz/getInOutList',
    beginScan: '/api/ebt/billpromptlybiz/beginScan',
    bulkDeleteData: '/api/ebt/billpromptlybiz/bulkDeleteData',
    checkScanCode: '/api/ebt/billpromptlybiz/checkScanCode',
    createBill: '/api/ebt/billpromptlybiz/createBill',
    deleteBill: '/api/ebt/billpromptlybiz/delete',
    getDataList: '/api/ebt/billpromptlybiz/getDataList',
    getDetails: '/api/ebt/billpromptlybiz/getDetails',
    getScanableHeaders: '/api/ebt/billpromptlybiz/getScanableHeaders',
    submit: '/api/ebt/billpromptlybiz/submit',

    // 盘点单据业务
    beginScanInventory: '/api/ebt/stbillpromptlybiz/beginScan',
    bulkDeleteDataInventory: '/api/ebt/stbillpromptlybiz/bulkDeleteData',
    checkScanCodeInventory: '/api/ebt/stbillpromptlybiz/checkScanCode',
    getDataListInventory: '/api/ebt/stbillpromptlybiz/getDataList',
    getDetailsInventory: '/api/ebt/stbillpromptlybiz/getDetails',
    getScanableHeadersInventory: '/api/ebt/stbillpromptlybiz/getScanableHeaders',
    submitInventory: '/api/ebt/stbillpromptlybiz/submit',

    /* 查询相关*/
    // 获取企业信息
    getOrgInfo: '/api/ebt/app/query/orgInfo',
    // 产品查询
    getMaterialInfo: '/api/ebt/app/query/materialInfo',
    // 编码查询
    getCodeInfo: '/api/ebt/app/query/codeInfo',
    // 获取省市区
    getchildlist: '/api/ebp/sysgeocity/getchildlist',
    // 添加门店
    addStore: '/api/proj/appcustom/addStore'

}

export default api
