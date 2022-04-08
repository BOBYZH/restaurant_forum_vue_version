<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <!-- 取名 initial-restaurant，是因後面 isFavorited 與 isLiked 的值還會被修改，所以把 restaurant 資料傳給卡片之後，資料還會有變動，這只是初始值 -->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
      />

      <div v-if="restaurants.length < 1">
        此類別目前無餐廳資料
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
import RestaurantsPagination from '../components/RestaurantsPagination'
// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'RestaurantsPage',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  data () {
    return { // 沒有DummyDate或API資料時的預設值
      categories: [],
      categoryId: -1, // -1 代表現在還沒拿到資料，預期之後一定用其他的值覆蓋掉，也可寫 undefined 或 0 來表達這種狀況
      currentPage: 1,
      restaurants: [],
      totalPage: -1,
      isLoading: true
    }
  },
  created () {
    // STEP 3：在 created 的時候呼叫 fetchRestaurants 方法
    // 這裡會向伺服器依據餐廳類別與頁碼參數請求資料
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  methods: {
    // STEP 2：將 fetchRestaurants 改成 async...await 的語法
    // 並且可以帶入參數 page 與 categoryId
    // 呼叫 API 後取得 response
    async fetchRestaurants ({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })

        const { // 透過解構賦值，將所需要的資料從 response.data 取出
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data

        // 將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}

</script>
