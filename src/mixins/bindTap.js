import wepy from 'wepy'
import Event from '../utils/event'
export default class bindTap extends wepy.mixin {
  methods = {
    /* 跳转指定商品详情页 */
    routeToGoods(goodsId) {
      this.$root.$navigate(`/pages/product/view?goodsId=${goodsId}`)
    },
    /* 打开购物面板 */
    openBuyPanel(goodsAttrs) {
      Event.emit('goodsPanelOpen', goodsAttrs)
    },
    /* 跳转到地址列表页 */
    routeToShippAddr() {
      this.$root.$navigate(`/pages/address/list`)
    },
    /* 跳转到地址填写页 */
    routeToAddAddress() {
      this.$root.$navigate(`/pages/address/add`)
    }
  }
}
