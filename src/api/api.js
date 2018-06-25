import wxRequest from '../utils/wxRequest'
const apiMall = 'https://api.it120.cc/wxmallMars'
const easyMockApi = 'https://www.easy-mock.com/mock/5b0e73447998a702039bcd8a/tissot'

// 轮播图
const getAdList = (params) => wxRequest.request(apiMall + '/banner/list', 'POST', params)
// 首页分类商品展示
const getHomeCategoryList = (params) => wxRequest.request(easyMockApi + '/home/category', 'POST', params)
// 商品分类
const getCategory = (params) => wxRequest.request(apiMall + '/shop/goods/category/all', 'POST', params)
// 指定分类商品
const getProList = (params) => wxRequest.request(apiMall + '/shop/goods/list', 'GET', params)
// 商品详情
const getProDetail = (params) => wxRequest.request(apiMall + '/shop/goods/detail', 'GET', params)
// 商品sku属性
const getProSkuSelect = (params) => wxRequest.request(easyMockApi + '/sku', 'POST', params)

module.exports = {
  getAdList,
  getHomeCategoryList,
  getCategory,
  getProList,
  getProDetail,
  getProSkuSelect
}
