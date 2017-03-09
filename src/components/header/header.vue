<template>
  <div class="header">
  	<div class="content">
	  	<div class="headerPic">
	  		<img :src="shopInfo.shopPic" alt="">
	  	</div>
	  	<div class="desc">
	  		<p>{{ shopInfo.deliveryTime }}分钟 | 起送￥{{shopInfo.minFee}} | 配送￥{{shopInfo.deliveryFee}}</p>
	  		<p>{{ shopInfo.deliveryMsg }}</p>
	  	</div>
  	</div>
  </div>
</template>

<script type="text-ecmascript-6">
  export default {
	props: {
		shopInfo: {
			type: Object
		}
	}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background: rebeccapurple
    .content
    	display: flex
    	padding: 15px 0
    	height: 40px
	    .headerPic
	    	flex: 0 0 80px
	    	text-align: center
	    	img{
	    		width: 40px
	    		height: 40px
	    		border-radius: 50%
	    		background: black
	    	}
	    .desc
	    	flex: 1
	    	line-height: 20px
	    	font-size: 12px
</style>
