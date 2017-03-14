<template>
  <div class="shopcar">
  		<div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'selected':totalCount>0}">
            <i class="icon-shopping_cart" :class="{'highLight':totalCount>0}"></i>
          </div>
          <div class="count" v-show="totalCount>0">{{oTotalCount}}</div>
        </div>
        <div class="price" v-show="totalPrice>0">￥{{ totalPrice }}</div>  
        <div class="discorvery">{{isDelivery}}</div>
      </div>
  		<div class="content-right">
        <div class="pay" :class="payClass">{{desc}}</div>  
      </div>
  </div>
</template>
<script type="text-ecmascript-6">
  export default {
    props: {
      selectFoods: {
        type: Array,
        default () {
          return []
        }
      },
      minFee: {
        type: Number
      },
      minDelivery: {
        type: Number
      }
    },
    computed: {
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      oTotalCount () {
        if (this.totalCount > 99) {
          return `99+`
        } else {
          return this.totalCount
        }
      },
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.count * food.discountPrice
        })
        return total
      },
      desc () {
        if (this.totalPrice === 0) {
          return `￥${this.minFee}起送`
        } else if (this.totalPrice < this.minFee) {
          let diff = this.minFee - this.totalPrice;
          return `差￥${diff}元起送`
        } else {
          return `去结算`
        }
      },
      payClass () {
        if (this.totalPrice < this.minFee) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      },
      isDelivery () {
        if (this.totalPrice < 50) {
          return `另需配送费￥${this.minDelivery}`
        } else {
          return `免配送费`
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcar
    display: flex
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 50px
    .content-left
    	flex: 1
    	background: #ccc
     .logo-wrapper
       display: inline-block
       position: relative
       top: -6px
       padding: 6px
       margin: 0 10px
       box-sizing: border-box
       width: 50px
       height: 50px
       background: black
       border-radius: 50%
       .logo      
         width: 100%
         height: 100%
         text-align: center
         background: #eee
         border-radius: 50%
         &.selected
           background: orange
         .icon-shopping_cart
           line-height: 48px
           height: 54px
           font-size: 28px
           color: grey
           &.highLight
             color: black
       .count
         position: absolute
         top: 0 
         right: 0
         padding: 0 6px
         line-height: 18px
         min-width: 15px
         height: 18px
         text-align: center
         background: red
         border-radius: 12px
     .price
       display: inline-block
       vertical-align: top
       line-height: 20px
       margin: 15px 10px 0 0
       font-size: 14px
       font-weight: 600
     .discorvery
       display: inline-block
       vertical-align: top
       line-height: 50px
       font-size: 12px
    .content-right
    	flex: 0 0 100px
     width: 100px 
     .pay
        height: 50px
        line-height: 50px
        text-align: center 
        font-size: 14px
        font-weight: 600
        background: green
        &.not-enough
          background: green
        &.enough
          background: yellowgreen
</style>
