export default class Search {
  /**
   * 构造函数
   */
  constructor (hotKeyWords) {
    this.hotKeyWords = hotKeyWords
  }
  init () {
  }
  export () {
    return {
      hotKeyWords: this.hotKeyWords
    }
  }
}
