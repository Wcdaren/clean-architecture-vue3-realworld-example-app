<template>
  <p>Popular Tags</p>

  <div class="tag-list">
    <a
      href="#"
      v-for="tag in tags"
      :key="tag"
      class="tag-pill tag-default"
      @click="getArticlesByTagName(tag)"
    >
      {{ tag }}
    </a>
  </div>
</template>

<script lang="ts">
import { useArticle } from '@/modules/article/useCases/getAritcles'
import { useTags } from '@/modules/tags/useCases/useTags'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PopularTags',
  async setup() {
    const {
      models: { tags },
      dispatch: { fetchTags },
    } = useTags()
    const {
      dispatch: { getArticlesByTagName },
    } = useArticle()

    await fetchTags()
    return {
      tags,
      getArticlesByTagName,
    }
  },
})
</script>
