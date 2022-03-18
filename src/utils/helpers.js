import axios from 'axios'
import Swal from 'sweetalert2'

// const baseURL = 'https://forum-express-api.herokuapp.com/api' // AC教案版
// const baseURL = 'http://localhost:3000/api' // 本地開發版
const baseURL = 'https://restaurant-forum-sql-practice.herokuapp.com/api' // 個人練習版

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
