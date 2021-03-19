import { reactive, readonly, toRefs } from '@vue/reactivity'
import { Article } from '../dtos/articleDTO'
import { articlesService } from '../services'

function useArticle() {
  const models = reactive<{
    article?: Article
    articles?: Article[]
    articlesCount?: number
    error?: string
  }>({
    article: void 0,
    error: '',
    articles: [],
    articlesCount: -1,
  })

  async function createArticle() {
    const ret = await articlesService.createArticle()
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { article } = ret.value.getValue()
      models.article = article
    }
  }
  async function deleteArticle(slug: string) {
    const ret = await articlesService.deleteArticle(slug)
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      //   const {  } = ret.value.getValue()
      //   models.article = article
    }
  }
  async function getArticle() {
    const ret = await articlesService.getArticle()
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { article } = ret.value.getValue()
      models.article = article
    }
  }
  async function getArticles() {
    const ret = await articlesService.getArticles()
    console.log(`==============>ret`)
    console.log(ret)

    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { articles, articlesCount } = ret.value.getValue()
      models.articles = articles
      models.articlesCount = articlesCount
    }
  }
  async function getArticlesFeed() {
    const ret = await articlesService.getArticlesFeed()
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { articles, articlesCount } = ret.value.getValue()
      //   models.article = article
    }
  }
  async function updateArticle() {
    const ret = await articlesService.updateArticle()
    if (ret.isLeft()) {
      const error = ret.value
      models.error = error
    } else {
      const { article } = ret.value.getValue()
      models.article = article
    }
  }

  return {
    models: { ...toRefs(readonly(models)) },
    dispatch: {
      createArticle,
      deleteArticle,
      getArticle,
      getArticles,
      getArticlesFeed,
      updateArticle,
    },
  }
}

export { useArticle }
