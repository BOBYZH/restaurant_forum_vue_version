<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div
      v-for="comment in comments"
      :key="comment.id"
    >
      <h4>
        <router-link
          :to="{ name: 'restaurant', params: {id: comment.Restaurant.id}}"
        >
          {{ comment.Restaurant.name }}
        </router-link>
      </h4>
      <p>{{ comment.text }}</p>by
      <a href="#">
        {{ comment.User.name }}
      </a>
      {{ comment.createdAt | fromNow }}
      <hr>
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from './../utils/mixins'

export default {
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
