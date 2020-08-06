<template>
  <div>
    <button class='ui-btn' @click="btnClick" :type="nativeType" :class="[
    type?'el-butotn--'+ type :'',
    {
      'ui-btn-small': small,
      'ui-btn-normal': normal,
      'ui-btn-large': large,
      'ui-btn-xlarge': xlarge,
      'ui-btn-tile': tile,
      'ui-btn-rounded': rounded,
      'ui-btn-circle': circle,
      'ui-btn-disable': disable
    }]">
      <slot>Button</slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'UiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    small: Boolean,
    normal: Boolean,
    large: Boolean,
    xlarge: Boolean,
    tile: Boolean,
    rounded: Boolean,
    circle: Boolean,
    disable: Boolean,
    color: String,
    nativeType: {
      type: String,
      default: 'button'
    },
  },
  data () {
    return {
    }
  },
  methods: {
    btnClick (MouseEvent) {
      if (!this.disable) {
        this.$emit('click', MouseEvent)
      }
    }
  },
  computed: {
    TintColor () {
      if (this.color) {
        return this.color
      } else {
        return '#2d8cf0'
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
resize(min-width, height, paddingR, fontSize)
  min-width min-width
  height height
  padding 0 paddingR
  font-size fontSize
  &.ui-btn-rounded, &.ui-btn-circle
    border-radius (@height / 2)
  &.ui-btn-circle
    min-width @height
    padding 0px 0px
.ui-btn
  resize(64px, 36px, 16px, 0.875rem)
  border 0 solid black
  border-radius 4px
  text-align center
  outline none
  font-weight 500
  letter-spacing 0.09em
  background-color #2d8cf0
  cursor pointer
  // 文本不能被选择
  user-select none
  color #fff
  &:hover
    filter brightness(120%)
  &:active
    filter brightness(80%)
  &.ui-btn-small
    resize(36px, 20px, 9px, 0.625rem)
  &.ui-btn-large
    resize(78px, 44px, 19px, 0.875rem)
  &.ui-btn-xlarge
    resize(92px, 52px, 23px, 1rem)
  &.ui-btn-tile
    border-radius 0
  &.ui-btn-disable
    cursor not-allowed
    background-color #f5f5f5
    color #c5c8ce
  &.el-butotn--success
    background-color #67C23A
  &.el-butotn--warning
    background-color #E6A23C
  &.el-butotn--error
    background-color #F78989
</style>