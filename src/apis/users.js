import { apiHelper } from './../utils/helpers'

export default {
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFavorite ({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite ({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike ({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  // 實作 POST 路由時，記得中間要補上一個資料參數 null
  addFollowing ({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
