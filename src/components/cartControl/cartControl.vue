<template>
	<div class="cartControl">
		<span class="icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decCount"></span>
		<span class="count" v-show="food.count>0">{{food.count}}</span>
		<span class="icon-add_circle" @click.stop.prevent="addCount"></span>
	</div>
</template>
<script type="text/ecmascript-6">
	import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCount () {
				console.log(1)
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1)
				} else {
					this.food.count++
				}
			},
			decCount () {
				console.log(0)
				if (this.food.count > 0) {
					this.food.count--
				}
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.cartControl
		font-size: 0
		.icon-remove_circle_outline,.icon-add_circle
			display: inline-block
			font-size: 24px
			padding: 6px
		.icon-remove_circle_outline
			color: grey
		.icon-add_circle
			color: orange
		.count
			display: inline-block
			padding-top: 6px
			vertical-align: top
			line-height: 24px
			font-size: 14px
			
</style>
