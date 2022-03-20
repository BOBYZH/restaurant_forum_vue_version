<template>
  <div class="container py-4">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <p>[{{ restaurant.categoryName }}]</p>
    </div>
    <ul>
      <li>有<span>{{ restaurant.commentsLength }}</span>筆評論</li>
      <li>有<span>{{ restaurant.viewCounts }}</span>人收藏這家餐廳</li>
    </ul>
    <a href="javascript:history.back()">回上一頁</a>
  </div>
</template>>

<script>
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { id, name, Category, Comments, viewCounts } = data.restaurant
        console.log('data', data.restaurant)
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
        console.log('this', this.restaurant)
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
