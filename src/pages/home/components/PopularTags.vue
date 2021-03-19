<template>
  <p>Popular Tags</p>

  <div class="tag-list">
    <AppLink
      v-for="tag in tags"
      :key="tag"
      name="tag"
      :params="{ tag }"
      class="tag-pill tag-default"
    >
      {{ tag }}
    </AppLink>
  </div>
</template>

<script lang="ts">
import { useTags } from '@/modules/tags/useCases/useTags'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'PopularTags',
  async setup() {
    const {
      models: { tags },
      dispatch: { fetchTags },
    } = useTags()
    onMounted(() => {
      fetchTags()
    })

    return {
      tags,
    }
  },
})
</script>
