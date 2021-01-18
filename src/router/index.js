import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active', // 導覽頁籤會根據瀏覽的網址自動套用不同的 class(將自動產生的當前class名稱換成bootstrap的點擊效果)
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/restaurants'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue') // 不先預載的動態載入寫法
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import('../views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import('../views/RestaurantsTop.vue')
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
