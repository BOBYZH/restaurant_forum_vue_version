<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin"
          class="text-white mr-3"
        >
          <!-- 另一種寫法： -->
          <!-- <router-link
          v-if="currentUser.isAdmin"
          :to="{ name: 'admin-restaurants' }"
          class="text-white mr-3"
        > -->
          管理員後台
        </router-link>

        <!-- is user is login -->
        <!-- 用<template> 包住使用者登入後才會看到的內容，不用 <div>是為了不影響樣式、保持結構單純、不會生成 HTML -->
        <template v-if="isAuthenticated">
          <router-link
            :to="{ name: 'user', params: { id: currentUser.id } }"
            class="text-white mr-3"
          >
            {{ currentUser.name || '使用者' }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// ./src/components/Navbar.vue
// seed data
const dummyUser = { // 先模擬一組登入使用者的假資料
  currentUser: {
    id: 1,
    name: '管理員',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'Navbar',
  // Vue 會在沒有資料時使用此預設值
  data () {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created () { // 在Vue 生命週期裡的 created 階段自動執行
    this.fetchUser() // 模擬「把 dummyUser 蓋過 currentUser」的動作
  },
  methods: {
    fetchUser () {
      this.currentUser = {
        // 用了 spread 運算子把兩組資料打開，在 key 值相同時，後者會覆蓋之前的資料
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>
