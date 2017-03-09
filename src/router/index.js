import Vue from 'vue'
import Router from 'vue-router'
import dishCategory from '@/components/dishCategory/dishCategory'
import ratings from '@/components/ratings/ratings'
import shopInfo from '@/components/shopInfo/shopInfo'
// import commonText from '@/components/commonText/commonText'

// 动态获取路由，commonText是通用路由
// export default new Router({
//   linkActiveClass: 'active',
//   routes: [{
//     path: '/',
//     component: commonText
//   }, {
// 	path: '/commonText/:id',
// 	component: commonText
// 	}]
// })
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
	path: '/',
	component: dishCategory
	}, {
		path: '/dishCategory',
		component: dishCategory
	}, {
		path: '/ratings',
		component: ratings
	}, {
		path: '/shopInfo',
		component: shopInfo
	}]
})
