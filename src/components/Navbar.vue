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
            @click="logout"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavbarComponent',
  computed: {
    // 使用展開運算式，將store中的資料直接覆蓋過來，更新成目前的使用者資料
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
  .navbar-toggler {
    min-width: 70px;
    margin-right: 0;
  }

  nav.bg-dark {
    padding: 14px 16px;
    background-color: #bd2333 !important;
  }

  .navbar-brand {
    font-size: 19px;
    padding: 0;
}
</style>
