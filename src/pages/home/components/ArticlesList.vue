<template>
  <!-- <ArticlesListNavigation v-bind="$attrs" :tag="tag" :username="username" /> -->
  <div v-if="articles.length === 0" class="article-preview">
    No articles are here... yet.
  </div>
  <template v-else>
    <ArticlesListArticlePreview
      v-for="(article, index) in articles"
      :key="article.slug"
      :article="article"
      @update="newArticle => updateArticle(index, newArticle)"
    />
    <div v-if="articlesDownloading" class="article-preview">
      Articles are downloading...
    </div>
    <AppPagination
      :count="articlesCount"
      :page="page"
      @page-change="changePage"
    />
  </template>
</template>

<script lang="ts">
// import { useArticles } from '@/modules/blog/usecases/useAritcles.ts'
import { useArticle } from '@/modules/article/useCases/getAritcles'
import { defineComponent, reactive, toRef, toRefs, watchEffect } from 'vue'
import AppPagination from './AppPagination.vue'
import ArticlesListArticlePreview from './ArticlesListArticlePreview.vue'
import ArticlesListNavigation from './ArticlesListNavigation.vue'

export default defineComponent({
  name: 'ArticlesList',
  components: {
    ArticlesListArticlePreview,
    AppPagination,
    // ArticlesListNavigation,
  },

  async setup() {
    const state = reactive({
      page: 1,
    })
    const {
      models: {
        articles,
        articlesCount,
        error,
        currentTag,
        isLoading: articlesDownloading,
      },
      dispatch,
    } = useArticle()
    const changePage = (page: number) => {
      state.page = page
    }
    // const {
    //   fetchArticles,
    //   articlesDownloading,
    //   articlesCount,
    //   articles,
    //   updateArticle,
    //   page,
    //   changePage,
    //   tag,
    //   username,
    // } = useArticles()
    // await dispatch.getArticles()
    // watchEffect(() => {
    //   dispatch.getArticles({
    //     offset: state.page - 1,
    //     tag: currentTag?.value,
    //   })
    // })
    return {
      ...toRefs(state),
      articlesDownloading,
      articles,
      articlesCount,
      changePage,
      currentTag,
      // updateArticle,
      // tag,
      // username,
    }
  },
})
</script>
