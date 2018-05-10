import wxRequest from '../utils/wxRequest'
const apiMall = 'https://api.it120.cc/wxmallMars'

const getAdList = (params) => wxRequest.request(apiMall + '/banner/list', 'POST', params)

module.exports = {
  getAdList
}
