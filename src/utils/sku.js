export default class Sku {
  constructor(goodsAttrs) {
    this.goodsAttrs = goodsAttrs
    this.defaultImage = ''
    this.attrList = ''
  }
  init() {
    this.attrList = this.goodsAttrs.attrList
    console.log(this.attrList, '规格属性')
  }
  export() {
    return {
      defaultImage: this.defaultImage,
      attrList: this.attrList
    }
  }
}
