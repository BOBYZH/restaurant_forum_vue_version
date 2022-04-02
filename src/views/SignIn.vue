<template>
  <div class="container py-5">
    <!-- 預防表單自動提交 -->
    <form
      class="w-100"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <!-- 改用內部連結以免重新渲染或路由無法解析，並避免瀏覽器預設的連結行為，只渲染不同的 component -->
        <router-link to="/signup">
          Sign Up
        </router-link>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit (e) {
      // 如果 email 或 password 為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }
        // 前端沒收到伺服器的回應前，使用者將無法再次點擊送出按鈕
        this.isProcessing = true

        // 改成呼叫 authorizationAPI 裡的 signIn 方法
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        console.log('response', response)
        // 取得 API 請求後的資料
        const { data } = response

        // 錯誤訊息
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 將資料傳到Vuex 中(只在登入流程生效，重新整理後將會清空)
        this.$store.commit('setCurrentUser', data.user)

        // 成功登入後轉址到餐聽首頁
        this.$router.push('/restaurants')
      } catch (error) {
        // 將密碼欄位清空
        this.password = ''
        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing = false
        console.log('error', error)
      }
    }
  }
}
</script>
