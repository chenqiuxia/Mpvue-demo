<template>
  <div class='container'>
    <h1 class="title">jobs list</h1>
    <input placeholder="dce"/>
    <ul>
      <li v-for="item in list" :key="index" :id="item.id">
        <p>{{item.title}}</p>
        <div class="image-container">
        <img src="item.image" alt="image">
        </div>
        <span>{{item.address}}</span>
      </li>
    </ul>
    <!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
    <!-- 需要使用 button 来授权登录 -->
    <!--<button @click='getUserInfo'>授权登录</button>-->
    <!--<button @click='goOpen'>跳转到授权状态</button>-->
    <login v-if="isLogin"></login>
  </div>
</template>

<script>
  import login from '@/components/login'
  import loginStore from './store'
  import {getList} from '@/api/jobs'

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        list: [],
        canIUse: wx.canIUse('button.open-type.getUserInfo')
      }
    },
    components: {
      login
    },
    computed: {
      isLogin () {
        return loginStore.state.isLogin
      }
    },

    methods: {
      getAuthAhead () {
        wx.authorize({
          scope: 'scope.location',
          success () {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            wx.getLocation({
              type: 'wgs84',
              success (res) {
                const latitude = res.latitude
                const longitude = res.longitude
                const speed = res.speed
                const accuracy = res.accuracy
                console.log(latitude)
                console.log(longitude)
                console.log(speed)
                console.log(accuracy)
              }
            })
          }
        })
      },
      bindGetUserInfo (e) {
        console.log(e.detail.userInfo)
      },
      getAuth () {
        wx.getSetting({
          success (res) {
            console.log(res.authSetting)
          }
        })
      },
      goOpen () {
        wx.openSetting({
          success (res) {
            console.log(res.authSetting)
          }
        })
      },
      getPhoneNumber (e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
      },
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({ url })
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            console.log('登陆成功')
          },
          fail: () => {
            console.log('登陆失败')
          }
        })
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    mounted () {
      // 调用应用实例的方法获取全局数据
      // this.getUserInfo()
      getList()
        .then(res => {
          this.list = res
        })
      wx.showShareMenu({
        withShareTicket: true
      })
      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
    }
  }
</script>

<style scoped>
.image-container{
  border: 1px solid #ccc;
  background-color: #aaaaaa;
}
  .title{
    font-size: 100rpx;
    text-align: center;
    margin: 50rpx auto;
  }
  ul{
    padding: 50rpx;
  }
</style>
