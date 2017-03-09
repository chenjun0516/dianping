<template>
  <div id="app">
    <div class="item-wrapper">
      <!-- 被注释的是动态获取路由写法，commonText为通用路由 -->
      <div class="item">
        <!-- <router-link to="/commonText/dishCategory">菜单</router-link> -->
        <router-link to="/dishCategory">菜单</router-link>
      </div>
      <div class="item">
        <!-- <router-link to="/commonText/ratings">评价</router-link> -->
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <!-- <router-link to="/commonText/shopInfo">商家</router-link> -->
        <router-link to="/shopInfo">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // const ERR_NO = 0
  export default {
    data () {
        return {
            shopInfo: {}
        }
    },
    created () {
       this.$http.get('/api/shopInfo').then((res) => {
         res = res.body
         console.log(res)
       })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .item-wrapper
    display: flex
    line-height: 40px
    height: 40px
    text-align: center
    background: red
    font-size: 12px
    .item
      flex: 1
      & > a
        display: block
        color: black
        &.active
          background: yellow
</style>
