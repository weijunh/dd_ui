<template>
  <div class='wrapper' v-if="isshow">
    <div class='loading'>
      <img src="./loading.gif" alt="" width="40" height="40">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: String,
      default: "1s" //默认1s
    },
    isshow: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
