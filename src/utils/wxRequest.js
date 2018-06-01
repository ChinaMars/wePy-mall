import wepy from 'wepy'
export default class wxRequest {
  static async request (url, method, params = {}) {
    let data = params.query || {}
    let obj = {
      url: url,
      method: method,
      data: data,
      header: { 'Content-Type': 'application/json' }
    }
    let res = await wepy.request(obj)
    return res.data
  }
}
