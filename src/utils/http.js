var Fly = require('flyio/dist/npm/wx') // npm引入方式

const http = new Fly()

http.interceptors.request.use((http) => {
  wx.showLoading({ title: '主人，我来啦！' })
  // wx.showNavigationBarLoading() //显示导航条加载动画。
  return http
})
// 设置请求基地址
http.config.baseURL = 'https://easy-mock.com/mock/5c11cea34664d341fcc04fad/example/'

http.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    // wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none',
      duration: 1000
    })
    return promise.resolve()
  }
)
export default http
