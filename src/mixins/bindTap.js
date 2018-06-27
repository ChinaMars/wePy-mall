import wepy from 'wepy'
import Event from '../utils/event'
export default class bindTap extends wepy.mixin {
  methods = {
    /* 跳转指定商品详情页 */
    routeToGoods(goodsId) {
      this.$parent.$navigate(`/pages/product/view?goodsId=${goodsId}`)
    },
    /* 打开购物面板 */
    openBuyPanel(goodsAttrs) {
      Event.emit('goodsPanelOpen', goodsAttrs)
    }
  }
}
