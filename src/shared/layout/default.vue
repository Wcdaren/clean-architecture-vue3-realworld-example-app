<template>
  <div id="main">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script lang="ts">
// import useUser from '@/compositions/useUser'
import { defineComponent } from 'vue'
import appFooter from './appFooter.vue'
import appHeader from './appHeader.vue'

export default defineComponent({
  name: 'Default',
  components: {
    appHeader,
    appFooter,
  },
  setup() {
    // const { retryLogin } = useUser()
    // useAsync(() => {
    //   if (process.server) {
    //     return false
    //   }
    //   const token = window.localStorage.getItem('token')
    //   if (token) {
    //     retryLogin(token)
    //   }
    // })
  },
})
</script>
