<template>
    <scroll-view class="area-container"  scroll-y="true" >
      <ul class="letter-con">
        <li v-for="(item,index) in citys" :key="index" @click="clickItem(index)" :class="{activeClass: activeIndex === index}">{{item.letter}}</li>
      </ul>
      <div v-for="(item,index) in citys" :key="index" class="city-item" @click="chooseCity(item)">
        <p>{{item.letter}}</p>
        <ul>
          <li v-for="(value, itemIndex) in item.list" :key="itemIndex">{{value}}</li>
        </ul>
      </div>
    </scroll-view>
</template>

<script>
  import cityList from '@/city'
  // import util from '@/utils/index'

  export default {
    data () {
      return {
        show: false,
        activeIndex: 0,
        scrollNow: '',
        citys: cityList,
        animation: {}
      }
    },
    methods: {
      clickItem (index) {
        const that = this
        // that.activeIndex = index
        wx.createSelectorQuery().selectAll('.city-item').fields({
          dataset: true,
          size: true,
          rect: true
        }, function (res) {
          res.forEach(function (item, itemIndex) {
            if (index === itemIndex) {
              wx.pageScrollTo({
                scrollTop: item.top + that.scrollNow,
                duration: 500
              })
            }
          })
        }).exec()
      },
      chooseCity (item) {
        console.log(item.letter)
      }
    },
    onPageScroll (e) { // 获取滚动条当前位置
      const that = this
      that.scrollNow = e.scrollTop
      wx.createSelectorQuery().selectAll('.city-item')
        .boundingClientRect((rects) => {
          let index = rects.findIndex((item) => {
            return item.top >= 0
          })
          if (index === -1) {
            index = rects.length - 1
          }
          that.activeIndex = (index)
        }).exec()
    },
    mounted () {
      let animation = wx.createAnimation({
        transformOrigin: '50% 50%',
        duration: 1000,
        timingFunction: 'ease-in',
        delay: 1
      })
      animation.opacity(1).translateY(100).step()
      this.animation = animation.export()
    }
  }
</script>

<style scoped>
  .area-container{
    position: relative;
  }
  .letter-con{
    position: fixed;
    right: 0;
    top: 0;
  }
  .activeClass{
    color: red;
  }
</style>
