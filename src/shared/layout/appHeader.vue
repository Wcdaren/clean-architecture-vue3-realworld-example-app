<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <!-- <router-link to="/" class="navbar-brand">conduit</router-link> -->
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <a class="nav-link active" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- <auth-navigation-bar
        v-if="isLogin"
        :user-name="user.username"
        :image="user.image"
      />
      <navigation-bar v-else /> -->
    </div>
  </nav>
</template>

<script lang="ts">
// import AuthNavigationBar from '@/components/common/AuthNavigationBar.vue'
// import NavigationBar from '@/components/common/NavigationBar.vue'
// import useUser from '@/compositions/useUser'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    // AuthNavigationBar,
    // NavigationBar,
  },
  setup() {
    // return useUser()
  },
})
</script>
