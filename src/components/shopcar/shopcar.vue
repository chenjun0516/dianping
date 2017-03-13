<template>
  <div class="shopcar">
  		<div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="count" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>  
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
      shopInfo: {},
      selectFoods: {
        type: Array,
        default () {
          return [
          {
            price: 2,
            count: 5
          }
          ]
        }
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
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.count * food.price
        })
        return total
      },
      desc () {
        if (this.totalPrice === 0) {
          return `￥${this.shopInfo.minFee}起送`
        } else if (this.totalPrice < this.shopInfo.minFee) {
          let diff = this.shopInfo.minFee - this.totalPrice;
          return `还差￥${diff}元起送`
        } else {
          return `去结算`
        }
      },
      payClass () {
        if (this.totalPrice < this.shopInfo.minFee) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      },
      isDelivery () {
        if (this.totalPrice < 50) {
          return `另需配送费￥${this.shopInfo.deliveryFee}`
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
    height: 60px
    .content-left
    	flex: 1
    	background: #ccc
     .logo-wrapper
       display: inline-block
       position: relative
       top: -10px
       padding: 6px
       margin: 0 10px
       box-sizing: border-box
       width: 60px
       height: 60px
       background: black
       border-radius: 50%
       .logo      
         width: 100%
         height: 100%
         text-align: center
         background: red
         border-radius: 50%
       .count
         position: absolute
         top: 0 
         right: 0
         padding: 0 6px
         line-height: 18px
         min-width: 20px
         height: 18px
         text-align: center
         background: yellow
         border-radius: 12px
         .icon-shopping_cart
           line-height: 54px
           height: 54px
           font-size: 24px
     .price
       display: inline-block
       vertical-align: top
       line-height: 30px
       margin: 15px 0
       font-weight: 600
     .discorvery
       display: inline-block
       vertical-align: top
       line-height: 30px
       margin: 15px
    .content-right
    	flex: 0 0 100px
     width: 100px 
     .pay
        height: 60px
        line-height: 60px
        text-align: center 
        font-size: 14px
        font-weight: 600
        background: green
        &.not-enough
          background: green
        &.enough
          background: yellowgreen
</style>
