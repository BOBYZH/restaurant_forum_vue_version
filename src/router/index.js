import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /*
    把 import 寫在 component 屬性內，在有人到達 /about 這組路由時，才會執行 component 裡的 function，動態載入需要的檔案。這樣的寫法可以減少不必要的流量：如果使用者沒有到達這裡、那就不用預先載入這頁的組件內容
    */
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
