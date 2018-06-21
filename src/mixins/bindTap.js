import wepy from 'wepy'

export default class bindTap extends wepy.mixin {
  methods = {
    /* 跳转指定商品详情页 */
    routeToGoods(goodsId) {
      this.$parent.$navigate(`/pages/product/view?goodsId=${goodsId}`)
    },
    /* 打开购物面板 */
    openBuyPanel(goods) {
      let abc = goods
      console.log(abc)
    }
  }
}
