import wepy from 'wepy'

export default class base extends wepy.mixin {
  data = {}
  methods = {}
  onLoad() {}
  onShow() {}
  loaded() {
    this.isLoading = true
    this.$apply()
  }
}
