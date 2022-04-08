<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
      <hr>
      <!-- 餐廳評論 RestaurantComments -->
      <!-- 監聽 after-delete-comment 事件，若事件發生了，
      就去執行 afterDeleteComment 動作(按下刪除建後請 API 伺服器把資料刪掉) -->
      <restaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail'
import RestaurantComments from '../components/RestaurantComments'
import CreateComment from '../components/CreateComment'
import Spinner from './../components/Spinner.vue'

import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

import { mapState } from 'vuex'

export default {
  name: 'RestaurantPage',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        // console.log('fetchRestaurant id: ', restaurantId)

        this.isLoading = true

        // 透過 restaurantsAPI 取得餐廳資訊
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { restaurant, isFavorited, isLiked } = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        }

        this.restaurantComments = Comments
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    // 避免直接輸入網址不觸發 created 發送請求
    beforeRouteUpdate (to, from, next) {
      const { id: restaurantId } = to.params
      this.fetchRestaurant(restaurantId)
      next()
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text, // text: text 的縮寫
        createdAt: new Date()
      })
    },
    afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId // 保留的是「沒被刪除的其他評論」，commentId是指哪一條評論被刪掉
      )
    }
  }
}
</script>
