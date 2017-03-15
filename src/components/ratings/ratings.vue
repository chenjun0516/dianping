<template>
  <div class="ratings">
  	<split></split>
  	<div class="score">
  		<div class="sLeft">
  			<h1 class="title">{{ratings.integratedScore}}</h1>
  			<p class="integrateScore">综合评分</p>
  			<p class="preRatings">{{ratings.praiseRatio}}</p>
  		</div>
  		<div class="sRight">
  			<div class="deliveryScore">
  				<span class="title">配送评分</span>
  				<star :score="ratings.deliveryScore"></star>
  			</div>
  			<div class="sellerScore">
  				<span class="title">商家评分</span>
  				<star :score="ratings.shopScore"></star>
  			</div>
  		</div>
  	</div>
  	<split></split>
  	<div class="ratingsType">
  		<span class="type-item" v-for="item in ratings.commentLabels">{{item.content}}</span>
  	</div>
  	<split></split>
  	<div class="ratings-list">
  		<ul>
  			<li class="list-item" v-for="item in ratings.list">
  				<div class="time">{{item.commentTime}}</div>
  				<div class="lLeft">
  					<div class="img-item">
  						<img :src="item.userPicUrl?item.userPicUrl:ratings.defaultPic" alt="">
  					</div>
  				</div>
  				<div class="rList">
  					<div class="title">{{item.userName}}</div>
  					<div class="deliveryScore">
  						<star :score="item.score"></star>
  						<span class="deliveryTime">{{item.deliveryTime}}</span>
  					</div>
  					<div class="ratings-content">
  						<p>{{item.content}}</p>
  					</div>
  					<div class="ratings-image" v-for="pic in item.pictures">
  						<img :src="pic.smallPicUrl" alt="">
  					</div>
  					<div class="add">
  						<p class="add-food">{{item.praiseDish}}</p>
  						<p class="add-delivery">{{item.label}}</p>
  					</div>
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>
<script type="text-ecmascript-6">
	import split from '../split/split'
	import star from '../star/star'

	const ERR_NO = 0
	export default {
		data () {
			return {
				ratings: []
			}
		},
		created () {
			this.$http.get('/api/ratings').then((res) => {
				res = res.body
				console.log(res)
				if (ERR_NO === res.errno) {
					this.ratings = res.data
					console.log(this.ratings)
				}
			})
		},
		components: {
			split,
			star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.ratings
		width: 100%
		.score
			display: flex
			padding: 15px
			// width: 100%
			text-align: center
			.sLeft
				flex: 0 0 136px
				border-right: 1px solid rgba(7,17,27,0.5)
				@media only screen and (max-width:360px)
					flex: 0 0 110px
				.title
					margin-bottom: 5px
					font-size: 28px
					color: orange
				.integrateScore
					font-size: 14px
					margin-bottom: 5px
				.preRatings
					font-size: 12px
					color: #666
			.sRight
				flex: 1
				font-size: 14px
				line-height: 32px
				.deliveryScore,.sellerScore
					.title
						display: inline-block
					.star
						display: inline-block
		.ratingsType
			padding: 15px
			font-size: 14px
			.type-item
				display: inline-block
				padding: 0 8px
				margin: 0 10px 10px 0
				line-height: 30px
				height: 30px
				border: 1px solid #ccc
				border-radius: 15px
				&.active
					background: #FFFAD8
					border-color: #E1C679
		.ratings-list
			ul
				.list-item
					position: relative
					display: flex
					box-sizing: border-box
					padding: 15px
					border-bottom: 14px solid #f3f5f7
					&:last-child
						border-bottom: none
					.time
						position: absolute
						right: 15px
						top: 20px
						font-size: 12px
						color: #999
					.lLeft
						flex: 0 0 70px
						width: 70px
						@media only screen and (max-width:360px)
							flex: 0 0 60px
							width: 60px
						.img-item
							width: 52px
							height: 52px
							border-radius: 50%
							@media only screen and (max-width:360px)
								width: 48px
								height: 48px
							img{
								width: 100%
								height: 100%
								border-radius: 50%
							}
					.rList
						flex: 1
						.title
							font-size: 16px
						.deliveryScore
							margin-top: 4px
							.star
								display: inline-block
								.star-item
									margin-right: 2px
									width: 10px
									height: 10px
									background-size: 10px 10px
							.deliveryTime
								display: inline-block
								font-size: 12px
						.ratings-content
							margin: 10px 0 6px 0
							line-height: 18px
							font-size: 14px
						.ratings-image
							display: inline-block
							margin-right: 10px
							width: 80px
							height: 80px
							img
								width: 100%
								height: 100%
						.add
							font-size: 12px
							color: #898989
							.add-food,.add-delivery
								margin: 4px 0
								line-height: 15px
</style>
