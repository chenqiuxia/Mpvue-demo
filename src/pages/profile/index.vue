<template>
  <div class="container">
    <open-data type='userAvatarUrl'></open-data>
    <open-data type='userNickName'></open-data>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'

export default {
  data () {
    return {
      a: ' this is list page'
    }
  },
  methods: {
    goLog () {
      console.log('go Log page')
      wx.switchTab({
        url: '/pages/logs/main'
      })
    },
    toTable () {
      wx.navigateTo({
        url: '/pages/table/main'
      })
    }
  },
  create () {
    console.log('this is list page')
  }
}
</script>
