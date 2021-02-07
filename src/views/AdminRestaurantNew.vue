<template>
  <div class="container py-5">
    <!-- 監聽來自子元件的 after-submit 事件，若收到事件，就觸發 handleAfterSubmit 函式 -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit (formData) {
      /*
      透過 API 將表單資料送到伺服器：
      要取得表單的內容，需要透過 entries() 方法來逐條列出表單的欄位和值
      */
      for (const [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
