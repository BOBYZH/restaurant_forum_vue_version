<template>
  <div class="container py-5">
    <!-- 由於這組資料會被使用者編輯，因此命名為 initial-restaurant -->
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  created () { // 掛載方法
  //  取得網址上的 id，才會知道現在編輯的是哪一筆餐廳資料
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  // 避免使用者直接修改網址上的 id，使網址改變不觸發 created階段造成資料不同步
  beforeRouteUpdate (to, from, next) {
    // 監聽路由變化：路由改變時重新抓取資料
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async handleAfterSubmit (formData) {
      // 透過 API 將表單資料送到伺服器
      // for (const [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
    // 設定掛載資料的時機與動作
    async fetchRestaurant (restaurantId) {
      // console.log('fetchRestaurant id:', restaurantId)
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })

        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
