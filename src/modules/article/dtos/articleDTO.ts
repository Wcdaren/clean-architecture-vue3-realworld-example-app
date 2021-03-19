/**
 *
 * @export
 * @interface SingleArticleResponse
 */
export interface SingleArticleResponse {
  /**
   *
   * @type {Article}
   * @memberof SingleArticleResponse
   */
  article: Article
}
/**
 *
 * @export
 * @interface NewArticleRequest
 */
export interface NewArticleRequest {
  /**
   *
   * @type {NewArticle}
   * @memberof NewArticleRequest
   */
  article: NewArticle
}

/**
 *
 * @export
 * @interface NewArticle
 */
export interface NewArticle {
  /**
   *
   * @type {string}
   * @memberof NewArticle
   */
  title: string
  /**
   *
   * @type {string}
   * @memberof NewArticle
   */
  description: string
  /**
   *
   * @type {string}
   * @memberof NewArticle
   */
  body: string
  /**
   *
   * @type {Array<string>}
   * @memberof NewArticle
   */
  tagList?: Array<string>
}
/**
 *
 * @export
 * @interface Article
 */
export interface Article {
  /**
   *
   * @type {string}
   * @memberof Article
   */
  slug: string
  /**
   *
   * @type {string}
   * @memberof Article
   */
  title: string
  /**
   *
   * @type {string}
   * @memberof Article
   */
  description: string
  /**
   *
   * @type {string}
   * @memberof Article
   */
  body: string
  /**
   *
   * @type {Array<string>}
   * @memberof Article
   */
  tagList: Array<string>
  /**
   *
   * @type {Date}
   * @memberof Article
   */
  createdAt: Date
  /**
   *
   * @type {Date}
   * @memberof Article
   */
  updatedAt: Date
  /**
   *
   * @type {boolean}
   * @memberof Article
   */
  favorited: boolean
  /**
   *
   * @type {number}
   * @memberof Article
   */
  favoritesCount: number
  /**
   *
   * @type {Profile}
   * @memberof Article
   */
  author: Profile
}

/**
 *
 * @export
 * @interface Profile
 */
export interface Profile {
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  username: string
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  bio: string
  /**
   *
   * @type {string}
   * @memberof Profile
   */
  image: string
  /**
   *
   * @type {boolean}
   * @memberof Profile
   */
  following: boolean
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string
  options: any
}

/**
 *
 * @export
 * @interface MultipleArticlesResponse
 */
export interface MultipleArticlesResponse {
  /**
   *
   * @type {Array<Article>}
   * @memberof MultipleArticlesResponse
   */
  articles: Array<Article>
  /**
   *
   * @type {number}
   * @memberof MultipleArticlesResponse
   */
  articlesCount: number
}
/**
 *
 * @export
 * @interface UpdateArticleRequest
 */
export interface UpdateArticleRequest {
  /**
   *
   * @type {UpdateArticle}
   * @memberof UpdateArticleRequest
   */
  article: UpdateArticle
}
/**
 *
 * @export
 * @interface UpdateArticle
 */
export interface UpdateArticle {
  /**
   *
   * @type {string}
   * @memberof UpdateArticle
   */
  title?: string
  /**
   *
   * @type {string}
   * @memberof UpdateArticle
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof UpdateArticle
   */
  body?: string
}
