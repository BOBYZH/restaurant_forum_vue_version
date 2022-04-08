<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: {id: restaurant.id}}"
          >
            {{ restaurant.name }}
          </router-link>
          &nbsp;
          <!-- 用三元運算子，避免未分類的資料顯示不出來 -->
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ fromNow(restaurant.createdAt) }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowMethod } from './../utils/mixins'

export default {
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowMethod],
  // 加上 props 屬性取得父層資料
  props: {
    restaurants: {
      type: Array,
      required: true // 一定要傳進來，才不會出錯
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>
