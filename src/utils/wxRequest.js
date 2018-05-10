import wepy from 'wepy'
export default class wxRequest {
  static async request (url, method, params) {
    let res = {
      url: url,
      method: method,
      data: params,
      header: { 'Content-Type': 'application/json' }
    }
    let json = await wepy.request(res)
    console.log(json)
    return json
  }
}
