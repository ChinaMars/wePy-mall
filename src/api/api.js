import wxRequest from '../utils/wxRequest'
const apiMall = 'https://api.it120.cc/wxmallMars'

const getAdList = (params) => wxRequest.request(apiMall + '/banner/list', 'POST', params)
const getCategory = (params) => wxRequest.request(apiMall + '/shop/goods/category/all', 'POST', params)

module.exports = {
  getAdList,
  getCategory
}
