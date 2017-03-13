<template>
	<div class="food" v-show="showFlag">我是详情页</div>
</template>
<script type="text-ecmascript-6">
	export default {
		data () {
			return {
				showFlag: false
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		top: 0
		left: 0
		bottom: 60px
		width: 100%
		background: white
</style>
