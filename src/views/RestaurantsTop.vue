<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span
              class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 5,
      name: 'Mitchel Beatty',
      tel: '171-324-8413',
      address: '85408 Francisca Square',
      opening_hours: '08:00',
      description: 'Aut cumque excepturi exercitationem libero volupta',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794',
      viewCounts: 93,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-29T02:05:28.000Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 5,
            createdAt: '2020-03-09T06:09:07.000Z',
            updatedAt: '2020-03-09T06:09:07.000Z'
          }
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2',
          isAdmin: false,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-05T12:30:53.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 5,
            createdAt: '2020-03-24T16:54:40.000Z',
            updatedAt: '2020-03-24T16:54:40.000Z'
          }
        },
        {
          id: 232,
          name: 'wbh',
          email: 'ReadingExchange@163.com',
          password: '$2a$10$1h2OE3ZFUTR6Lr9bojp4ee2fxUBya/NpkwveJNxpe7h2JeFe6eb0a',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-25T15:53:23.000Z',
          updatedAt: '2020-03-25T15:53:23.000Z',
          Favorite: {
            UserId: 232,
            RestaurantId: 5,
            createdAt: '2020-03-27T03:30:47.000Z',
            updatedAt: '2020-03-27T03:30:47.000Z'
          }
        },
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe',
          isAdmin: true,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-02T17:09:40.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: '2020-03-28T04:41:55.000Z',
            updatedAt: '2020-03-28T04:41:55.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 4
    },
    {
      id: 9,
      name: 'Luz Schaden',
      tel: '1-712-742-4184',
      address: '4929 Wisozk Centers',
      opening_hours: '08:00',
      description: 'Culpa deserunt molestiae eligendi est ex incidunt.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576',
      viewCounts: 4,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-27T10:36:37.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 9,
            createdAt: '2020-03-09T06:09:12.000Z',
            updatedAt: '2020-03-09T06:09:12.000Z'
          }
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2',
          isAdmin: false,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-05T12:30:53.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 9,
            createdAt: '2020-03-24T08:51:28.000Z',
            updatedAt: '2020-03-24T08:51:28.000Z'
          }
        },
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe',
          isAdmin: true,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-02T17:09:40.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 9,
            createdAt: '2020-03-28T04:45:08.000Z',
            updatedAt: '2020-03-28T04:45:08.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 3
    },
    {
      id: 8,
      name: 'Mr. Johnny Abshire',
      tel: '333-243-4940 x9008',
      address: '075 Murray Stream',
      opening_hours: '08:00',
      description: 'Qui omnis optio neque sit rerum nisi. Repellat qui',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651',
      viewCounts: 15,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-27T10:32:10.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 8,
            createdAt: '2020-03-09T06:09:09.000Z',
            updatedAt: '2020-03-09T06:09:09.000Z'
          }
        },
        {
          id: 102,
          name: 'asd@asd.asd',
          email: 'asd@asd.asd',
          password: '$2a$10$r9jgmPQGI2uN59XwkuTiX.qRORpqYDoMg8e36WJ.bw1JexPvpXVp.',
          isAdmin: false,
          image: 'https://i.imgur.com/yJTFCDh.jpg',
          createdAt: '2020-03-09T06:15:49.000Z',
          updatedAt: '2020-03-09T06:16:09.000Z',
          Favorite: {
            UserId: 102,
            RestaurantId: 8,
            createdAt: '2020-03-12T08:23:50.000Z',
            updatedAt: '2020-03-12T08:23:50.000Z'
          }
        },
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe',
          isAdmin: true,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-02T17:09:40.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 8,
            createdAt: '2020-03-28T04:43:47.000Z',
            updatedAt: '2020-03-28T04:43:47.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 3
    },
    {
      id: 7,
      name: 'Miss Letitia Will',
      tel: '(770) 750-6811 x99988',
      address: '8145 Laisha Keys',
      opening_hours: '08:00',
      description: 'Aut earum molestiae et ducimus adipisci ut maxime.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229',
      viewCounts: 10,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-27T06:59:44.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 7,
            createdAt: '2020-03-09T06:09:10.000Z',
            updatedAt: '2020-03-09T06:09:10.000Z'
          }
        },
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2',
          isAdmin: false,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-05T12:30:53.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 7,
            createdAt: '2020-03-25T10:34:42.000Z',
            updatedAt: '2020-03-25T10:34:42.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 2
    },
    {
      id: 6,
      name: 'Vicenta Gutkowski',
      tel: '128-905-3953',
      address: '371 Reuben Vista',
      opening_hours: '08:00',
      description: 'labore',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123',
      viewCounts: 8,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-27T10:29:17.000Z',
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 6,
            createdAt: '2020-03-09T06:09:10.000Z',
            updatedAt: '2020-03-09T06:09:10.000Z'
          }
        },
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe',
          isAdmin: true,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-02T17:09:40.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 6,
            createdAt: '2020-03-27T10:55:16.000Z',
            updatedAt: '2020-03-27T10:55:16.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 1362,
      name: '荷蘭小鬆餅',
      tel: '12312',
      address: '台北市',
      opening_hours: '11:00',
      description: '~~~!!!!!!',
      image: null,
      viewCounts: 0,
      createdAt: '2020-03-23T16:11:25.000Z',
      updatedAt: '2020-03-26T08:47:53.000Z',
      CategoryId: 992,
      FavoritedUsers: [
        {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2',
          isAdmin: false,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-05T12:30:53.000Z',
          Favorite: {
            UserId: 2,
            RestaurantId: 1362,
            createdAt: '2020-03-24T08:51:02.000Z',
            updatedAt: '2020-03-24T08:51:02.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 1202,
      name: '鰻魚郎',
      tel: '123',
      address: '仁愛公園',
      opening_hours: '01:00',
      description: '123',
      image: null,
      viewCounts: 1,
      createdAt: '2020-03-09T09:17:22.000Z',
      updatedAt: '2020-03-22T06:09:05.000Z',
      CategoryId: 2,
      FavoritedUsers: [
        {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe',
          isAdmin: true,
          image: null,
          createdAt: '2020-02-28T14:38:32.000Z',
          updatedAt: '2020-03-02T17:09:40.000Z',
          Favorite: {
            UserId: 1,
            RestaurantId: 1202,
            createdAt: '2020-03-25T08:45:24.000Z',
            updatedAt: '2020-03-25T08:45:24.000Z'
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 11,
      name: 'Vergie Considine',
      tel: '351.951.8030 x0330',
      address: '8865 Conrad Mill',
      opening_hours: '08:00',
      description: 'Quia omnis natus est praesentium dolores aliquid d',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614',
      viewCounts: 1,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-09T06:09:15.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 11,
            createdAt: '2020-03-09T06:09:13.000Z',
            updatedAt: '2020-03-09T06:09:13.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 10,
      name: 'Corbin Gusikowski',
      tel: '(506) 198-3977',
      address: '4747 Lubowitz Brook',
      opening_hours: '08:00',
      description: 'Aut quia aut ea nostrum quae doloremque necessitat',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025',
      viewCounts: 3,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-27T10:27:57.000Z',
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 10,
            createdAt: '2020-03-09T06:09:12.000Z',
            updatedAt: '2020-03-09T06:09:12.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 4,
      name: 'Adalberto Anderson',
      tel: '313.718.9513 x0422',
      address: '3047 Marge Key',
      opening_hours: '08:00',
      description: ' ufun\r\n \r\nQuaerat molestiae placeat fuga et vero n',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547',
      viewCounts: 603,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-29T02:05:24.000Z',
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 92,
          name: 'asdasd',
          email: 'asdasd@asdasd.asdasd',
          password: '$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO',
          isAdmin: false,
          image: null,
          createdAt: '2020-03-08T17:38:03.000Z',
          updatedAt: '2020-03-08T17:38:03.000Z',
          Favorite: {
            UserId: 92,
            RestaurantId: 4,
            createdAt: '2020-03-09T06:09:06.000Z',
            updatedAt: '2020-03-09T06:09:06.000Z'
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    }
  ]
}

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addFavorite (restaurantId) {
      this.restaurants = this.restaurants
        .map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    },
    deleteFavorite (restaurantId) {
      this.restaurants = this.restaurants
        .map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false
          }
        })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    }
  }

}
</script>
