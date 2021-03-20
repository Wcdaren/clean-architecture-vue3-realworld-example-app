import { reactive, readonly, toRefs } from '@vue/reactivity'
import { Article } from '../dtos/articleDTO'
import { articlesService } from '../services'
import { getArticlesType } from '../services/articlesService'

const defaultLimit = 10

const localModels = reactive<{
  currentTag?: string
  article?: Article
  articles?: Article[]
  articlesCount?: number
  error?: string
  isLoading?: boolean
}>({
  currentTag: '',
  article: void 0,
  error: '',
  articles: [],
  articlesCount: -1,
  isLoading: false,
})

function useArticle() {
  // async function createArticle() {
  //   const ret = await articlesService.createArticle()
  //   if (ret.isLeft()) {
  //     const error = ret.value
  //     models.error = error
  //   } else {
  //     const { article } = ret.value.getValue()
  //     models.article = article
  //   }
  // }
  async function deleteArticle(slug: string) {
    const ret = await articlesService.deleteArticle(slug)
    if (ret.isLeft()) {
      const error = ret.value
      localModels.error = error
    } else {
      //   const {  } = ret.value.getValue()
      //   models.article = article
    }
  }
  async function getArticle() {
    // const ret = await articlesService.getArticle()
    // if (ret.isLeft()) {
    //   const error = ret.value
    //   localModels.error = error
    // } else {
    //   const { article } = ret.value.getValue()
    //   localModels.article = article
    // }
  }
  async function getArticles(params: getArticlesType = {}) {
    const {
      author,
      favorited,
      limit = defaultLimit,
      offset = 0,
      options,
      tag,
    } = params
    localModels.isLoading = true
    const ret = await articlesService.getArticles({
      author,
      favorited,
      limit,
      offset,
      options,
      tag,
    })
    localModels.isLoading = false

    if (ret.isLeft()) {
      const error = ret.value
      localModels.error = error
    } else {
      const { articles, articlesCount } = ret.value.getValue()
      localModels.articles = articles
      localModels.articlesCount = articlesCount
    }
  }
  async function getArticlesFeed() {
    const ret = await articlesService.getArticlesFeed()
    if (ret.isLeft()) {
      const error = ret.value
      localModels.error = error
    } else {
      const { articles, articlesCount } = ret.value.getValue()
      //   models.article = article
    }
  }
  async function updateArticle() {
    // const ret = await articlesService.updateArticle()
    // if (ret.isLeft()) {
    //   const error = ret.value
    //   localModels.error = error
    // } else {
    //   const { article } = ret.value.getValue()
    //   localModels.article = article
    // }
  }

  function setCurrentTag(tag: string) {
    localModels.currentTag = tag
  }

  return {
    models: { ...toRefs(readonly(localModels)) },
    dispatch: {
      // createArticle,
      deleteArticle,
      getArticle,
      getArticles,
      getArticlesFeed,
      updateArticle,
      setCurrentTag,
    },
  }
}
export { useArticle, defaultLimit }
