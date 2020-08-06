<template>
  <transition name="el-fade-in">
    <div class="mask" v-if="show">
      <div class="message">
        <div class="message-box">
          <i class="message-icon" :class="'icon-'+type"></i>
          <span>{{message}}</span>
        </div>
        <a class="close" href="javascript:;" @click="close">
        </a>
      </div>
    </div>
  </transition>

</template>
<script>
export default {
  name: "Message",
  data () {
    return {
      message: "",
      duration: 2000,
      show: false,
      type: "success",
      timer: null
    };
  },
  methods: {
    close () {
      this.timer = null;
      this.show = false;
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.show = false;
    }, this.duration);
  },
  destroyed () {
    this.timer = null;
  }
}
</script>
<style lang="scss" scope>
$success: #51d163;
$wt: #fff;
$error: #ff4646;
.mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  .message {
    width: 396px;
    height: 160px;
    position: absolute;
    top: 15vh;
    left: 0;
    right: 0;
    margin: auto;
    box-sizing: border-box;
    padding: 60px 0;
    background: $wt;
    &-box {
      height: 40px;
      text-align: center;
      .message-icon {
        display: inline-block;
        width: 60px;
        height: 60px;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 50%;
      }
      .icon-success {
        border: 1px solid $success;
      }
      .icon-error {
        background: url("./error-icon.png") no-repeat center;
      }
      span {
        font: 700 16px/40px "";
        padding-left: 12px;
      }
    }
    .close {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 20px;
      right: 20px;
      background: url("./close-icon.png") no-repeat center;
    }
  }
}
</style>