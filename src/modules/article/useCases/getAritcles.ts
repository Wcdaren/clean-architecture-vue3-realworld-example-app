import { effect, reactive, readonly, toRefs } from '@vue/reactivity'
import { Article } from '../dtos/articleDTO'
import { articlesService } from '../services'
import { getArticlesType } from '../services/articlesService'

const defaultLimit = 10

type TNavArr = Array<{
  name: string
  icon?: string
  isActive: boolean
}>

function createNavArr() {
  return [
    { name: 'Your Feed', isActive: false },
    { name: 'Global Feed', isActive: true },
  ]
}

const localModels = reactive<{
  currentPage: number
  currentTag?: string
  articles?: Article[]
  articlesCount?: number
  error?: string
  isLoading?: boolean
  navArr: TNavArr
}>({
  currentPage: 1,
  currentTag: '',
  error: '',
  articles: [],
  articlesCount: -1,
  isLoading: false,
  navArr: createNavArr(),
})

function useArticle() {
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
  function changePageSize(size: number) {
    localModels.currentPage = size
  }

  function getArticlesByTagName(tag: string) {
    const navArr = localModels.navArr
    navArr.map(nav => {
      nav.isActive = false
    })
    const lastItem = navArr[navArr.length - 1]
    if (lastItem.icon) {
      lastItem.name = tag
      lastItem.isActive = true
    } else {
      navArr.push({
        name: tag,
        icon: 'ion-pound',
        isActive: true,
      })
    }

    localModels.currentTag = tag
    localModels.currentPage = 1
    getArticles({ tag })
  }

  function getArticlesByFeedType(
    feed: 'Global Feed' | 'Your Feed' = 'Global Feed'
  ) {
    localModels.navArr = createNavArr()
    const navArr = localModels.navArr
    for (const item of navArr) {
      item.isActive = false
      if (item.name === feed) {
        item.isActive = true
      }
    }

    if (feed === 'Your Feed') {
      getArticlesFeed()
    } else {
      getArticles()
    }
  }
  // effect(() => {
  //   const { articles, articlesCount, currentPage, currentTag } = localModels
  //   getArticles({
  //     limit: defaultLimit,
  //     offset: currentPage - 1,
  //     tag: currentTag,
  //   })
  // })
  return {
    models: { ...toRefs(readonly(localModels)) },
    dispatch: {
      getArticlesByTagName,
      changePageSize,
      // createArticle,
      getArticles,
      getArticlesFeed,
      getArticlesByFeedType,
    },
  }
}
export { useArticle, defaultLimit }
