<template>
  <div class="mask" v-if="!modalShow">
    <div class="main">
      <button type="primary" @click="weChatLogin">微信登陆</button>
      <button>手机号登陆</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modalShow: false
      }
    },
    methods: {
      weChatLogin () {
        let that = this
        wx.getSetting({
          success (res) {
            that.modalShow = true
            if (!res.authSetting['scope.userLocation']) {
              wx.authorize({
                scope: 'scope.userLocation',
                success () {
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                  // wx.startRecord()
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .mask {
    width: 100vw;
    color: #fff;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgba(0,0,0,.4);
  }
  .main{
    width: 300rpx;
    height: 50rpx;
  }
</style>
