<template>
  <!-- 在 isLoading 為 false 時才將表單顯示出來 -->
  <Spinner v-if="isLoading" />
  <form
    v-show="!isLoading"
    v-else
    @submit.stop.prevent="handleSubmit"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >

      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>

<script>
// STEP 1: 匯入 adminAPI 和錯誤提示用的 Toast
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default { // 用 default 設定一組預設值
  name: 'AdminRestaurantForm',
  components: {
    Spinner
  },
  props: {
    initialRestaurant: {
      type: Object,
      /*
        為物件或陣列類型的資料設定預設值時，大括弧裡面的文字會被解析為有序宣告，
        而不是物件的 key ，要記得把物件字面值包在圓括弧內
       */
      default: () => {
        return {
          name: '',
          CategoryId: '',
          tel: '',
          address: '',
          description: '',
          image: '',
          openingHours: ''
        }
      },
      isProcessing: {
        type: Boolean,
        default: false
      }
    }
  },
  emits: ['after-submit'],
  data () {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant
      },
      isLoading: true
    }
  },
  // 利用 watch 來監控 initialRestaurant，一旦 API 回傳，initialRestaurant就會變更以更新 restaurant資料
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  created () {
    // 畫面第一次渲染出來的時候，把各種資料呈現在樣板上
    this.fetchCategories()
    this.restaurant = {
      // 第一步先展開 data 裡的預設值，也就是空白表單
      ...this.restaurant,
      // 接著展開 props 裡的資料，也就是父層傳進來的資料；
      // 如果沒有資料，就調動 default 的回傳值，仍然是空白表單
      ...this.initialRestaurant
    }
  },
  methods: {
    // STEP 2: 改成 async...await 語法
    async fetchCategories () {
      try {
        // STEP 3: 向伺服器取得餐廳類別清單
        const { data } = await adminAPI.categories.get()

        if (data.status === 'error') { // 避免尚未收到資料時渲染空白結果
          throw new Error(data.message)
        }

        this.categories = data.categories
        this.isLoading = false
      } catch (error) {
        console.error(error.message)
        this.isLoading = false
        // STEP 4: 在 catch 中進行錯誤處理
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },

    handleFileChange (e) {
      const { files } = e.target

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit (e) { // 將表單資料轉成 FormData 物件
      // 避免使用者漏填
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      const form = e.target // 取得表單本身<form></form>
      const formData = new FormData(form) // 產生物件實例
      // 傳遞給父層頁面，直接透過 $emit 發送一個叫做 after-submit 的事件，同時攜帶表單資料
      this.$emit('after-submit', formData)
    }
  }
}
</script>
