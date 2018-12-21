<template>
  <div>
    this is match page
    <!--<city></city>-->
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import city from '@/components/city'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    city
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  mounted () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
