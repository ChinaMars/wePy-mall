import include from 'lodash.includes'
import uniq from 'lodash.uniq'
export default class Sku {
  /**
   * 构造函数
   */
  constructor(goodsAttrs) {
    this.goodsAttrs = goodsAttrs // 商品规格和不同规格组合
    this.defaultImage = '' // 默认商品图片
    this.attrList = '' // 商品规格
    this.skuBeanList = '' // 规格组合商品
  }

  /**
   * sku初始化
   */
  init() {
    /* 商品规格类型数据 */
    this.attrList = this.goodsAttrs.attrList
    this.checkEnable()
  }

  /**
   * 获取每个sku ID
   */
  skuAttrId() {
    let attrList = this.attrList
    this.attributeId = []
    for (let i in attrList) {
      let attrId = attrList[i].id
      this.attributeId.push(attrId)
    }
    return this.attributeId
  }

  /**
   * 通过组合商品sku ID检测所有sku判断enable true or false
   */
  checkEnable() {
    let attrList = this.attrList
    for (let i in attrList) {
      let attrs = attrList[i].attr
      for (let i in attrs) {
        this.checkSkuBean()
        attrs[i].enable = include(this.checkSkuBean(), attrs[i].id)
      }
    }
  }

  /**
   * 检测所有组合商品对应的sku ID
   */
  checkSkuBean() {
    /* 组合商品数据 */
    this.skuBeanList = this.goodsAttrs.skuBeanList
    this.enabledIds = []
    let skuBeanList = this.skuBeanList
    /* 循环得到组合商品attributeId */
    for (let i in skuBeanList) {
      let attributes = (skuBeanList[i]).attributes
      for (let j in attributes) {
        let skuAttrBeanId = attributes[j].attributeId
        let skuAttrId = this.skuAttrId()
        /* 检测字符是否在数组中存在 */
        if (include(skuAttrId, skuAttrBeanId)) {
          this.enabledIds.push(attributes[j].attributeValId)
        }
      }
    }
    /* 合并数组中相同的值 */
    return uniq(this.enabledIds)
  }

  /**
   * 暴露变量
   */
  export() {
    return {
      defaultImage: this.defaultImage,
      attrList: this.attrList
    }
  }
}
