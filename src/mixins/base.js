import wepy from 'wepy'

export default class Base extends wepy.mixin {
  data = {}
  method = {}
  onLoad() {}
  onShow() {}
  loaded() {
    this.isLoading = true
    this.$apply()
  }
}
