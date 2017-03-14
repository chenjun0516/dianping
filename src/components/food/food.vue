<template>
	<div class="food" v-show="showFlag" @click="hide">
		<div class="food-wrapper" @click.stop.prevent>
			<div class="picBox">
				<img :src="food.largeImg" alt="">
			</div>
			<div class="desc">
				<div class="title">{{food.name}}</div>
				<div class="price">￥{{food.discountPrice}}</div>
				<div class="cartControl-wrapper">
					<cartControl :food="food"></cartControl>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import cartControl from '../cartControl/cartControl'

	export default {
		props: {
			food: {
				type: Object
			}
		},
		data () {
			return {
				showFlag: false
			}
		},
		methods: {
			show () {
				this.showFlag = true
			},
			hide () {
				this.showFlag = false
			}
		},
		components: {
			cartControl
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.food
		&::after
			content: ""
			position: fixed
			top: 0
			left: 0
			right: 0
			bottom: 0
			background: rgba(0,0,0,0.5)
			z-index: 999
		.food-wrapper
			position: fixed
			top: 50%
			left: 15%
			transform: translateY(-50%)
			// transform: translateX(-50%)
			bottom: 60px
			width: 70%
			background: white
			border-radius: 10px
			z-index: 1000
			.picBox
				height: 210px
				width: 100%
				img
					height: 100%
					width: 100%
					border-radius: 10px 10px 0 0
			.desc
				position: relative
				padding: 10px 18px
				.price
					display: inline-block
					padding: 5px 0
					font-weight: 600
					color: #f63
					font-size: 20px
				.cartControl-wrapper
					position: absolute
					right: 12px
					bottom: 9px
					z-index: 9999999
</style>
