<template>
	<div class="food" v-show="showFlag">
		<div class="picBox"></div>
		<div class="desc">
			<div class="title">爱心简单</div>
			<div class="price">￥5</div>
		</div>
	</div>
</template>
<script type="text-ecmascript-6">
	export default {
		data () {
			return {
				showFlag: true
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		top: 50%
		left: 15%
		transform: translateY(-50%)
		// transform: translateX(-50%)
		bottom: 60px
		width: 70%
		background: black
		border-radius: 10px
		.picBox
			height: 210px
			width: 100%
		.desc
			position: relative
			padding: 10px 18px
			background: red
</style>
