<template>
  <div class="star" @click="abc">
  	<span v-for="item in itemClass" :class="item" class="star-item"></span>
  </div>
</template>
<script type="text-ecmascript-6">
	const LENGHT = 5;
	const ON = 'on'
	const HALF = 'half'
	const OFF = 'off'

  export default {
  	props: {
  		score: {
  			type: Number
  		}
  	},
  	computed: {
  		itemClass () {
  			let result = []
  			let score = Math.floor(this.score * 2) / 2
  			let hasDecimal = score % 1 !==0
  			let integer = Math.floor(score)
  			for (let i = 0; i < integer; i++) {
  				result.push(ON)
  			}
  			if (hasDecimal) {
  				result.push(HALF)
  			}
  			while (result.length < LENGHT) {
  				result.push(OFF)
  			}
  			return result
  		}
  	},
  	methods: {
  		abc () {
  			console.log(this.itemClass)
  		}
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .star
  	.star-item
  		display: inline-block
  		background-repeat: no-repeat
  		width: 15px
  		height: 15px
  		margin-right: 5px
  		background-size: 15px 15px
  		&.on
  			background-image: url(./star_on.png)
  		&.half
  			background-image: url(./star_half.png)
  		&.off
  			background-image: url(./star_off.png)

</style>
