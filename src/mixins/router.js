import wepy from 'wepy'

export default class router extends wepy.mixin {
  methods = {
    routeToGoods(goodsId) {
      this.$parent.$navigate(`/pages/product/view?goodsId=${goodsId}`)
    }
  }
}
