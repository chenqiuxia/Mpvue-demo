<template>
    <scroll-view class="area-container"  scroll-y>
      <ul class="letter-con" :animation="animation">
        <li v-for="(item,index) in citys" :key="index" @click="clickItem(index)">{{item.letter}}</li>
      </ul>
      <div v-for="(item,index) in citys" :key="index" :class="`item${index}`">
        <p>{{item.letter}}</p>
        <ul>
          <li v-for="(value, itemIndex) in item.list" :key="itemIndex">{{value}}</li>
        </ul>
      </div>
    </scroll-view>
</template>

<script>
  import cityList from '@/city'

  export default {
    data () {
      return {
        show: false,
        citys: cityList,
        animation: {}
      }
    },
    methods: {
      clickItem (index) {
        // let offset = this.citys[index].scrollOffset()
        // console.log(offset)
        console.log(index)
      }
    },
    mounted () {
      console.log('sds')
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
  .hidden{
    opacity: 0;

  }
</style>
