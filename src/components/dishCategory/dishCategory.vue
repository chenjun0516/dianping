<template>
  <div>
	  <div class="dishCategory">
	  	<div class="dLeft" ref="dLeft">
	  		<ul class="list">
	  			<li v-for="(item, index) in goods" class="list-item" :class="{'current':currentIndex===index}" @click="selectList(index, $event)">{{item.category}}</li>
	  		</ul>
	  	</div>
	  	<div class="dRight" ref="dRight">
	  		<ul>
	  			<li v-for="item in goods" class="list-item list-item-hook">
	  				<h1>{{item.category}}</h1>
	  				<ul>
	  					<li @click="selectFood(food,$event)"  v-for="food in item.dishList" class="good-list">
	  						<div class="picbox">
	  							<img :src="food.littleImg" alt="" />
	  						</div>
	  						<div class="desc">
	  							<p class="name">{{food.name}}</p>
	  							<p class="sellnum">月售{{food.sold}}</p>
	  							<p class="price">￥{{food.discountPrice}}</p>
	  						</div>
	  						<div class="cartControl-wrapper">
								<cartControl :food="food"></cartControl>	
	  						</div>
	  					</li>
	  				</ul>
	  			</li>
	  		</ul>
	  	</div>
	  </div>
	  <food :food="selectedFood" ref="food"></food>
	  <shopcar :select-foods="selectFoods" :min-delivery="shopInfo.deliveryFee" :min-fee="shopInfo.minFee"></shopcar>

  </div>

</template>
<script type="text-ecmascript-6">
	import BScroll from 'better-scroll'
	import food from '../food/food'
	import cartControl from '../cartControl/cartControl'
	import shopcar from '../shopcar/shopcar'
	const ERR_NO = 0

	export default {
		props: {
			shopInfo: {
				type: Object
			}
		},
		data () {
			return {
				goods: [],
				listHeight: [],
				scrollY: 0,
				selectedFood: {}
			}
		},
		created () {
			this.$http.get('/api/dishCategory').then((res) => {
				res = res.body
				console.log(res)
				if (res.errno === ERR_NO) {
					this.goods = res.data
					// vue异步加载dom，数据取到高度没有渲染，需要这个属性去渲染
					this.$nextTick(() => {
						this._initScroll()
						this._calHeight()
					})
				}
			})
		},
		computed: {
			currentIndex () {
				for (var i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i]
					let height2 = this.listHeight[i+1]
					if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
						return i
					}
				}
				return 0
			},
			selectFoods () {
				let foods = []
				this.goods.forEach((good) => {
					good.dishList.forEach((food) => {
						if (food.count) {
							foods.push(food)
						}
					})
				})
				return foods
			}
		},
		methods: {
			selectList (index, event) {
				if (!event._constructed) {
					return
				}
				let itemList = this.$refs.dRight.getElementsByClassName('list-item-hook')
				console.log(itemList)
				let el = itemList[index];
				console.log(el)
				this.foodScroll.scrollToElement(el, 1000)
				console.log(index)
			},
			selectFood (food, event) {
				if (!event._constructed) {
					return
				}
				this.selectedFood = food
				this.$refs.food.show()
			},
			_initScroll () {
				this.menuScroll = new BScroll(this.$refs.dLeft, {
					click: true
				})
				this.foodScroll = new BScroll(this.$refs.dRight, {
					click: true,
					probeType: 3
				})
				this.foodScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y))
				})
			},
			_calHeight () {
				let listItem = this.$refs.dRight.getElementsByClassName('list-item-hook')
				let height = 0
				this.listHeight.push(height)
				for (var i = 0; i < listItem.length; i++) {
					let item = listItem[i]
					height += item.clientHeight
					this.listHeight.push(height)
				}
			}
		},
		components: {
			food,
			cartControl,
			shopcar
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
				line-height: 50px
				text-align: center
				margin-bottom: 5px
				height: 50px
				font-size: 12px
				background: red
				&.current
					background: white
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
					position: relative
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
					.cartControl-wrapper
						position: absolute
						bottom: 8px
						right: 14px
							
					
</style>
