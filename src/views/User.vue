<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard
        :user="user"
        :is-current-user="currentUser.id === user.id"
        :initial-is-followed="isFollowed"
        @after-alter-follow="afterAlterFollow"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <br>
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard'
import UserFollowingsCard from '../components/UserFollowingsCard'
import UserFollowersCard from '../components/UserFollowersCard'
import UserCommentsCard from '../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'

import { mapState } from 'vuex'

import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        FollowingsLength: 0,
        FollowersLength: 0,
        CommentsLength: 0,
        FavoritedRestaurants: 0
      },
      isFollowed: false,
      Followings: [],
      Followers: [],
      Comments: [],
      FavoritedRestaurants: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { profile, isFollowed } = data
        console.log('Profile', profile)

        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile

        // 移動到前面，讓後面的變數可以使用
        const commentSet = new Set()
        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
          !commentSet.has(comment.Restaurant.id) &&
          commentSet.add(comment.Restaurant.id)
        )

        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length, // 避免重複採計在同一餐廳的評論
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }

        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants

        console.log('Follower', this.followers)
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    afterAlterFollow (userId) {
      this.fetchUser(userId)
    }
  }
}
</script>
