import wepy from 'wepy'
export default class wxRequest {
  static async request (url, method, params) {
    let obj = {
      url: url,
      method: method,
      data: params,
      header: { 'Content-Type': 'application/json' }
    }
    let res = await wepy.request(obj)
    return res
  }
}
