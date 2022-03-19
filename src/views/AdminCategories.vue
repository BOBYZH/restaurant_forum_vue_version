<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div
              v-show="!category.isEditing"
              class="category-name"
            >
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            >
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import uuid from 'uuid/v4'

//  2. 定義API取得的資料與提示訊息
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data () {
    return {
      newCategoryName: '',
      categories: [],
      isProcessing: false
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created () {
    this.fetchCategories()
  },
  methods: {
    toggleIsEditing (categoryId) {
      // 用 map 掃瞄一次 categories 資料，用 id 來對照；如果不是我們要編輯的類別，就照樣回傳類別內容
      this.categories = this.categories.map(category => {
        // 挑出需要編輯的類別物件，並且把 isEditing: !category.isEditing 加進去
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }

        return category
      })
    },
    handleCancel (categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,

            // 把原本的餐廳類別名稱還回去
            name: category.nameCached
          }
        }

        return category
      })

      this.toggleIsEditing(categoryId)
    },
    async updateCategory ({ categoryId, name }) {
      try {
        // 透過 API 去向伺服器更新餐廳類別名稱
        const { data } = await adminAPI.categories.update({
          categoryId,
          name
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.toggleIsEditing(categoryId) // 把 isEditing 的狀態切換回去，就可以把類別內容轉回純文字的狀態
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳類別，請稍後再試'
        })
      }
    },
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 在每一個 category 中都添加一個 isEditing 屬性，以辨別是否正在編輯
        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false,
          nameCached: ''
        }))
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory () {
      try {
        // 透過 API 告知伺服器欲新增的餐廳類別...
        this.isProcessing = true

        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 將新的類別添加到陣列中
        this.categories.push({
          id: uuid(),
          name: this.newCategoryName,
          isEditing: false // 新增後，就不再是編輯狀態
        })

        this.isProcessing = false
        this.newCategoryName = '' // 清空原本欄位中的內容
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategory (categoryId) {
      try {
        // 透過 API 告知伺服器欲刪除的餐廳類別
        const { data } = await adminAPI.categories.delete({ categoryId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        )

        Toast.fire({
          icon: 'success',
          title: '成功刪除該餐廳類別'
        })
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法刪除該餐廳類別，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
/* 用scoped 屬性確保這組 CSS 只會作用到當下的這一個 component */
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
