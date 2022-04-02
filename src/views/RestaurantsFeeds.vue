<template>
  <div class="container py-5">
    <!-- 使用 isLoading 搭配 v-if 和 v-else 來決定要不要顯示 Spinner -->
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">
        最新動態
      </h1>
      <hr>
      <div class="row">
        <!-- 「最新餐廳」和「最新評論」這兩個區塊雖然不會和其他頁面共用，但是為了避免在同一個頁面放入太多的樣板和資料造成後續難以維護，因此我們還是會把他額外拆成兩個不同的元件。 -->
        <div class="col-md-6">
          <!-- 用v-bind把資料綁定 -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'
import Spinner from '../components/Spinner'

import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds () {
      try {
        const { data, statusText } = await restaurantsAPI.getFeeds()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { restaurants, comments } = data
        this.restaurants = restaurants
        this.comments = comments.filter(comment => comment.Restaurant && comment.text)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得最新動態，請稍後再試'
        })
      }
    }
  }
}
</script>
