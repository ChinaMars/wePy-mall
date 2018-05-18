import wxRequest from '../utils/wxRequest'
const apiMall = 'https://api.it120.cc/wxmallMars'

// 轮播图
const getAdList = (params) => wxRequest.request(apiMall + '/banner/list', 'POST', params)
// 商品分类
const getCategory = (params) => wxRequest.request(apiMall + '/shop/goods/category/all', 'POST', params)
// 分类下的商品
const getProList = (params) => wxRequest.request(apiMall + '/shop/goods/list', 'POST', params)

module.exports = {
  getAdList,
  getCategory,
  getProList
}
