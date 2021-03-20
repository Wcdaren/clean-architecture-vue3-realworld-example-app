<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li v-for="(nav, index) in navArr" :key="index" class="nav-item">
        <span
          :class="nav.isActive ? 'nav-link active' : 'nav-link'"
          @click="getArticlesByFeedType(nav.name)"
        >
          <i v-if="nav.icon" :class="nav.icon" />
          {{ nav.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useArticle } from '@/modules/article/useCases/getAritcles'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticlesListNavigation',
  setup() {
    const {
      models: { navArr },
      dispatch: { getArticlesByFeedType },
    } = useArticle()

    return {
      navArr,
      getArticlesByFeedType,
    }
  },
})
</script>
