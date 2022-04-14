import { createRouter, createWebHashHistory } from 'vue-router'

// 一定會經過的頁面直接在路由裡載入，除此之外的頁面皆用動態載入
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

//  載入Vuex 的設定檔來呼叫 action
import store from './../store'

// 驗證使用者有無 isAdmin 權限的獨立方法
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}

// 程式碼調動的原因，是因為我們想把 beforeEach 的設定放進 Vue Router 本身，我們需要宣告一個 router 變數來存放 Vue Router 的實例
const router = createRouter({
  history: createWebHashHistory(),

  // 網站正式發佈以後，要使用 hash mode 才不會碰到無法取得伺服器回應的情況(因為Github Pages不支援路徑下完整的history mode)
  /*
如果看不慣網址列多出 # ，還是想要在正式環境使用 history mode，需要搭配後端網頁伺服器 (apache、nginx、IIS) 來設定頁面導向(主動設置404頁面)，才可以避免出現 Error 404 頁面，詳細設定方法需要參考 HTML5 History 模式
(得考慮改用其他平台部署)
*/

  // 導覽頁籤會根據瀏覽的網址自動套用不同的 class(將自動產生的當前class名稱換成bootstrap的點擊效果)
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/signin'
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
      path: '/users/:id/edit',
      name: 'user-edit',
      component: () => import('../views/UserEdit.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/new', // 有指定名稱的路由，都需要放在動態路由前
      name: 'admin-restaurant-new',
      component: () => import('../views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('../views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

// 監聽全域的「切換路由」事件
router.beforeEach(async (to, from, next) => { // 用非同步先檢查是否確實登入
  /*
  比起每次切換路由時都重新驗證一次 token 會增加伺服器負擔，
  先將一開始 isAuthenticated 的狀態，從原本固定的 false改至從 Vuex 的 state 去取得當前的 isAuthenticated 狀態，
  只要使用者之前有成功驗證、且 token 沒有變更，就不需要再重新向伺服器去請求驗證了
   */

  // 取得瀏覽器localStorage與Vuex store的token、登入狀態來比對
  const tokenInLocalStorage = localStorage.getItem(
    'token'
  )
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較 localStorage 和 store 中的 token 是否一樣
  if (
    tokenInLocalStorage && tokenInLocalStorage !== tokenInStore
  ) {
    // 使用 dispatch(指派) 呼叫 Vuex 內的 action
    isAuthenticated = await store.dispatch( // 有 token 的情況下，才向後端驗證
      'fetchCurrentUser'
    )
  }

  // 如果 token 無效，去需要權限的頁面時，則轉址到登入頁
  if (
    !isAuthenticated && to.name !== 'sign-in' && to.name !== 'sign-up'
  ) {
    next('/signin')
    return
  }

  // 如果 token 有效，去登入註冊頁時，則轉址到餐聽首頁
  if (
    isAuthenticated && to.name === 'sign-in'
  ) {
    next('/restaurants')
    return
  }

  next()
})

export default router
