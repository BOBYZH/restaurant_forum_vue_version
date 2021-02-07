import Vue from 'vue'
import Router from 'vue-router'

// 一定會經過的頁面直接在路由裡載入，除此之外的頁面皆用動態載入
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(Router)

export default new Router({ // 網站正式發佈以後，要使用 hash mode 才不會碰到無法取得伺服器回應的情況
/*
如果看不慣網址列多出 # ，還是想要在正式環境使用 history mode，需要搭配後端網頁伺服器 (apache、nginx、IIS) 來設定頁面導向(主動設置404頁面)，才可以避免出現 Error 404 頁面，詳細設定方法需要參考 HTML5 History 模式

Example:
export default new Router({ // 改回沒有#改網址會404的的 history mode
mode: 'history',
routes: [...]
})
*/

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
      path: '/restaurants/:id', // 在同類(/restaurants)最下面，避免前面匹配到:id
      name: 'restaurant',
      component: () => import('../views/Restaurant.vue')
    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import('../views/RestaurantDashboard.vue')
    },
    {
      path: '/users/top',
      /*
      由於 Vue Router 路由會由上往下進行匹配，所以當路由一條條解析下來，所有的路由都無法匹配，最後就會匹配到 path: '*'，星號 (*) 是萬用字元，這裡代表「所有的網址」，也就是說不管使用者輸入什麼，只要找不到對應網頁，最後就會返回 NotFound 這個頁面
      */
      name: 'users-top',
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue')
    },
    {
      path: '/admin/restaurants/new', // 有指定名稱的路由，都需要放在動態路由前
      name: 'admin-restaurant-new',
      component: () => import('../views/AdminRestaurantNew.vue')
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
