<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="path">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <!-- 綁定瀏覽器的原生事件，並串上 stop.prevent避免預設動作 -->
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
      path: `/restaurants/${this.initialRestaurant.id}`
    }
  },
  methods: {
    addFavorite () {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: true
      }
    },
    deleteFavorite () {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: false
      }
    },
    addLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      }
    },
    deleteLike () {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }
    }
  }
}
</script>
