const WxNotificationCenter = require('./WxNotificationCenter.js')
export default class Event {
  // 注册通知
  static listen(name, selector, observer) {
    // 先移除监听
    this.remove(name, observer)
    WxNotificationCenter.addNotification(name, selector, observer)
  }
  // 发送通知
  static emit(name, param) {
    WxNotificationCenter.postNotificationName(name, param)
  }
  // 移除通知
  static remove(name, observer) {
    WxNotificationCenter.removeNotification(name, observer)
  }
}
