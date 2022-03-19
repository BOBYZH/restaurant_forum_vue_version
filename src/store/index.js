import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全域版本的data 屬性
    // 設定使用者資料與權限
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    // 全域版本的methods 屬性，設定函式修改 state 的資料
    // 使用者登入的動作
    setCurrentUser (state, currentUser) {
      /*
      state: 傳入上方的 state 物件
      currentUser: 接收從 Vue component 傳入的資料，以「想要更新的 state 屬性」來命名
      */
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    // 設定其他的非同步函式，例如發送 API 請求
  }
})
