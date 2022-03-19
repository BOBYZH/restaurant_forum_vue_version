import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp (data) {
    return apiHelper.post('/signup', {
      ...data // 使用展開運算子(Spread operator)，將 data 內的所有屬性都放進去，可以不用一一寫
    })
  }
}
