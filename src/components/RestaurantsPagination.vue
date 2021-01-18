<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li
        v-show="previousPage"
        class="page-item"
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{name: 'restaurants', query: { categoryId, page: previousPage }}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <!-- 頁碼，依當前頁數傳資料 -->
      <li
        v-for="page in totalPage"
        :key="page"
        class="page-item"
        :class="['page-item', { active: currentPage === page }]"
      >
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { categoryId, page }}"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 前往下一頁 nextPage -->
      <li
        v-show="nextPage"
        class="page-item"
      >
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { categoryId, page: nextPage }}"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: Number,
      default: -1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: -1
    }
  },
  computed: { // 根據原有資料進一步變化，計算當前上下頁碼
    previousPage () {
      return this.currentPage === 1
        ? null
        : this.currentPage - 1
    },
    nextPage () {
      return this.currentPage + 1 > this.totalPage
        ? null
        : this.currentPage + 1
    }
  }
}
</script>
