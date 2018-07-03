import include from 'lodash.includes'
import uniq from 'lodash.uniq'
export default class Sku {
  /**
   * 构造函数
   */
  constructor(goodsAttrs) {
    this.goodsAttrs = goodsAttrs // 商品规格和不同规格的组合商品属性
    this.productImage = this.goodsAttrs.defaultImage // 商品图片
    this.attrList = this.goodsAttrs.attrList // 商品规格
    this.skuBeanList = this.goodsAttrs.skuBeanList // 规格组合商品
    this.enabledIds = [] // 选择规格对应的sku id
    this.attrsOtherSelectArray = ''
    this.isReady = false
  }

  /**
   * sku初始化
   */
  init() {
    let checkSkuBean = this.checkSkuBean()
    this.checkEnable(this.attrList, checkSkuBean)
  }

  /**
   * 获取每种类型 ID
   */
  skuAttrId(val) {
    this.attributeId = []
    for (let i in val) {
      let attrId = val[i].id
      this.attributeId.push(attrId)
    }
    return this.attributeId
  }

  /**
   * 通过组合商品sku ID检测所有sku判断enable true or false
   */
  checkEnable(allsku, checksku) {
    for (let i in allsku) {
      let attrs = allsku[i].attr
      for (let i in attrs) {
        attrs[i].enable = include(checksku, attrs[i].id)
      }
    }
  }

  /**
   * 检测组合商品对应的sku ID
   */
  checkSkuBean() {
    let skuBeanList = this.skuBeanList
    this.enabledIds = []
    // 循环得到组合商品attributeId
    for (let i in skuBeanList) {
      let attributes = (skuBeanList[i]).attributes
      for (let j in attributes) {
        let skuAttrBeanId = attributes[j].attributeId
        let skuAttrId = this.skuAttrId(this.attrList)
        // 检测组合商品中使用了哪些sku
        if (include(skuAttrId, skuAttrBeanId)) {
          this.enabledIds.push(attributes[j].attributeValId)
        }
      }
    }
    // 合并数组中相同的值
    return uniq(this.enabledIds)
  }

  /**
   * 选择某个sku
   */
  select (event) {
    let attrList = this.attrList
    let skuBeanList = this.skuBeanList
    let items = attrList[event.currentTarget.dataset.idx]
    let item = items.attr[event.currentTarget.dataset.index]
    this.enabledIds = []

    // 阻止enable为false的规格点击
    if (!item.enable) return
    // 获取选中select属性值，并且改变
    let select = !item.select
    // 改变所有select为false
    for (let i in items.attr) {
      items.attr[i].select = false
    }
    // 获取当前改变后的select的值
    item.select = select

    for (let i in attrList) {
      let attrListBig = attrList[i]
      // 当前类别之外的选择列表
      let attrsOtherSelect = this.attrsOtherSelect(attrListBig)
      this.checkSelectedSku(skuBeanList, attrsOtherSelect, attrListBig)
    }

    // 合并数组中相同的值
    let enabledIds = uniq(this.enabledIds)
    this.checkEnable(this.attrList, enabledIds)

    // 获取规格全部选择后的组合商品信息
    this.groupedProSku(attrList)
  }

  /**
   * 根据选中的sku获取对应能选择的sku ID
   */
  checkSelectedSku(skuBeanList, attrsOtherSelect, attrListBig) {
    for (let i in skuBeanList) {
      let attributes = skuBeanList[i].attributes
      let go = true
      for (let i in attrsOtherSelect) {
        this.isReady = false
        let otherAttrId = attrsOtherSelect[i].attributeId
        let otherId = attrsOtherSelect[i].id
        for (let i in attributes) {
          if (attributes[i].attributeId === otherAttrId && attributes[i].attributeValId === otherId) {
            this.isReady = true
            break
          }
        }
        go = this.isReady && go
      }
      if (go) {
        for (let i in attributes) {
          if (attrListBig.id === attributes[i].attributeId) {
            this.enabledIds.push(attributes[i].attributeValId)
          }
        }
      }
    }
  }

  /**
   * 当前类别之外的选择列表
   */
  attrsOtherSelect(attrListBig) {
    this.attrsOtherSelectArray = []
    for (let i in this.attrList) {
      let attrListSmall = this.attrList[i]
      if (attrListBig.id !== attrListSmall.id) {
        for (let i in attrListSmall.attr) {
          let attrListSmallAttr = attrListSmall.attr[i]
          if (attrListSmallAttr.enable && attrListSmallAttr.select) {
            this.attrsOtherSelectArray.push(attrListSmallAttr)
          }
        }
      }
    }
    return this.attrsOtherSelectArray
  }

  /**
   * 获取选中后的组合商品属性
   */
  groupedProSku (attrList) {
    let groupedProArray = []
    for (let i in attrList) {
      let attrListArray = attrList[i].attr
      this.isReady = false
      for (let i in attrListArray) {
        if (attrListArray[i].select) {
          this.isReady = true
          groupedProArray.push(attrListArray[i].attributeValue)
        }
      }
    }
    if (this.isReady) {
      this.getGroupedInfo(groupedProArray)
    }
  }

  /**
   * 通过sku组合确定组合商品信息
    */
  getGroupedInfo (groupedProArray) {
    let groupedProText = ''
    let skuBeanList = this.skuBeanList
    for (let i in groupedProArray) {
      groupedProText += groupedProArray[i] + '_'
    }
    for (let i in skuBeanList) {
      let groupedProName = skuBeanList[i].name
      if (groupedProText === groupedProName) {
        console.log(skuBeanList[i].pic)
        this.productImage = skuBeanList[i].pic
      }
    }
  }

  /**
   * 导出数据
   */
  export() {
    return {
      attrList: this.attrList,
      productImage: this.productImage
    }
  }
}
