<template>
  <div class="container py-5">
    <!-- 監聽來自子元件的 after-submit 事件，若收到事件，就觸發 handleAfterSubmit 函式 -->
    <AdminRestaurantForm
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
        isProcessing: false // 定義是否正在處理中的狀態
      }
    }
  },
  methods: {
    async handleAfterSubmit (formData) {
      /*
      模擬透過 API 將表單資料送到伺服器：
      要取得表單的內容，需要透過 entries() 方法來逐條列出表單的欄位和值
      */
      // for (const [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
      try {
        this.isProcessing = true
        // 透過 restaurants.create向伺服器呼叫API來建立一筆餐廳資料
        const { data } = await adminAPI.restaurants.create({
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>
