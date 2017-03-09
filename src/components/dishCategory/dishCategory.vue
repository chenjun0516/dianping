<template>
  <div class="dishCategory">
  	<div class="dLeft" ref="dLeft">
  		<ul class="list">
  			<li v-for="item in goods" class="list-item">{{item.category}}</li>
  		</ul>
  	</div>
  	<div class="dRight" ref="dRight">
  		<ul>
  			<li v-for="item in goods" class="list-item">
  				<h1>{{item.category}}</h1>
  				<ul>
  					<li v-for="item in item.dishList" class="good-list">
  						<div class="picbox">
  							<img :src="item.littleImg" alt="">
  						</div>
  						<div class="desc">
  							<p class="name">{{item.name}}</p>
  							<p class="sellnum">月售{{item.sold}}</p>
  							<p class="price">￥{{item.discountPrice}}</p>
  						</div>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
  </div>
</template>
<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
	const ERR_NO = 0

	export default {
		data () {
			return {
				goods: []
			}
		},
		created () {
			this.$http.get('/api/dishCategory').then((res) => {
				res = res.body
				console.log(res)
				if (res.errno === ERR_NO) {
					this.goods = res.data
					this.$nextTick(() => {
						this._initScroll()
					})
				}
			})
		},
		methods: {
			_initScroll () {
				this.menuScroll = new BScroll(this.$refs.dLeft, {})
				this.foodScroll = new BScroll(this.$refs.dRight, {})
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.dishCategory
		display: flex
		position: absolute
		top: 110px
		left: 0
		bottom: 60px
		overflow: hidden
		width: 100%
		font-size: 0
		.dLeft
			flex: 0 0 100px
			background: #eee
			.list-item
				display: block
				list-style: none
				text-align: center
				line-height: 50px
				height: 50px
				font-size: 12px
				background: red
		.dRight
			flex: 1
			.list-item
				h1
					padding-left: 14px
					height: 20px
					line-height: 20px
					font-size: 10px
					background: #ddd
				.good-list
					display: flex
					padding: 14px
					.picbox
						flex: 0 0 60px
						width: 60px
						img
							width: 100%
					.desc
						flex: 1
						margin-left: 10px
						p
							padding-bottom: 10px
							font-size: 12px
							&.sellnum
								color: #ccc
							&.price
								padding-bottom: 0
								font-size: 14px
								font-weight: 600
								color: red
							
					
</style>
