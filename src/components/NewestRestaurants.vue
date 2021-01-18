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
          <a href="#">{{ restaurant.name }}</a>
          &nbsp;
          <!-- 用三元運算子，避免未分類的資料顯示不出來 -->
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類'}}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 加上 props 屬性取得父層資料
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>
