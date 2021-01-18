<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!-- 取名 initial-restaurant，是因後面 isFavorited 與 isLiked 的值還會被修改，所以把 restaurant 資料傳給卡片之後，資料還會有變動，這只是初始值 -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
import RestaurantsPagination from '../components/RestaurantsPagination'

const dummyData = {
  restaurants: [
    {
      id: 3,
      name: 'Herminio Nicolas',
      tel: '063-480-5811 x2308',
      address: '52267 Marquardt Corners',
      opening_hours: '08:00',
      description: 'autem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=38.32006179376239',
      viewCounts: 30824,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-08T07:52:14.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 4,
      name: 'Adalberto Anderson',
      tel: '313.718.9513 x0422',
      address: '3047 Marge Key',
      opening_hours: '08:00',
      description: 'Quo asperiores qui omnis maxime qui voluptates sit',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547',
      viewCounts: 477,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-06T15:54:59.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: true,
      isLiked: false
    },
    {
      id: 5,
      name: 'Mitchel Beatty',
      tel: '171-324-8413',
      address: '85408 Francisca Square',
      opening_hours: '08:00',
      description: 'Aut cumque excepturi exercitationem libero volupta',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794',
      viewCounts: 58,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-03-05T17:45:05.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: true,
      isLiked: false
    },
    {
      id: 6,
      name: 'Vicenta Gutkowski',
      tel: '128-905-3953',
      address: '371 Reuben Vista',
      opening_hours: '08:00',
      description: 'labore',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 7,
      name: 'Miss Letitia Will',
      tel: '(770) 750-6811 x99988',
      address: '8145 Laisha Keys',
      opening_hours: '08:00',
      description: 'Aut earum molestiae et ducimus adipisci ut maxime.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 8,
      name: 'Mr. Johnny Abshire',
      tel: '333-243-4940 x9008',
      address: '075 Murray Stream',
      opening_hours: '08:00',
      description: 'Qui omnis optio neque sit rerum nisi. Repellat qui',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 9,
      name: 'Luz Schaden',
      tel: '1-712-742-4184',
      address: '4929 Wisozk Centers',
      opening_hours: '08:00',
      description: 'Culpa deserunt molestiae eligendi est ex incidunt.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 10,
      name: 'Corbin Gusikowski',
      tel: '(506) 198-3977',
      address: '4747 Lubowitz Brook',
      opening_hours: '08:00',
      description: 'Aut quia aut ea nostrum quae doloremque necessitat',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 11,
      name: 'Vergie Considine',
      tel: '351.951.8030 x0330',
      address: '8865 Conrad Mill',
      opening_hours: '08:00',
      description: 'Quia omnis natus est praesentium dolores aliquid d',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 12,
      name: 'Oliver Padberg',
      tel: '865-523-0270 x58016',
      address: '771 Oberbrunner Hollow',
      opening_hours: '08:00',
      description: 'Magni qui facilis asperiores. Voluptatem cumque co',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=22.348939427568215',
      viewCounts: 0,
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2020-02-28T14:38:32.000Z',
        updatedAt: '2020-02-28T14:38:32.000Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2020-02-28T14:38:32.000Z',
      updatedAt: '2020-02-28T14:38:32.000Z'
    },
    {
      id: 392,
      name: '甜點',
      createdAt: '2020-03-01T02:43:08.000Z',
      updatedAt: '2020-03-01T03:00:51.000Z'
    },
    {
      id: 552,
      name: 'test-1',
      createdAt: '2020-03-05T08:27:01.000Z',
      updatedAt: '2020-03-05T08:27:01.000Z'
    }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ''
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return { // 沒有DummyDate或API資料時的預設值
      categories: [],
      categoryId: -1, // -1 代表現在還沒拿到資料，預期之後一定用其他的值覆蓋掉，也可寫 undefined 或 0 來表達這種狀況
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>
