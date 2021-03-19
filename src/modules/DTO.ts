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
 * @interface Comment
 */
export interface Comment {
  /**
   *
   * @type {number}
   * @memberof Comment
   */
  id: number
  /**
   *
   * @type {Date}
   * @memberof Comment
   */
  createdAt: Date
  /**
   *
   * @type {Date}
   * @memberof Comment
   */
  updatedAt: Date
  /**
   *
   * @type {string}
   * @memberof Comment
   */
  body: string
  /**
   *
   * @type {Profile}
   * @memberof Comment
   */
  author: Profile
}

/**
 *
 * @export
 * @interface GenericErrorModel
 */
export interface GenericErrorModel {
  /**
   *
   * @type {any}
   * @memberof GenericErrorModel
   */
  errors: any
}

/**
 *
 * @export
 * @interface LoginUser
 */
export interface LoginUser {
  /**
   *
   * @type {string}
   * @memberof LoginUser
   */
  email: string
  /**
   *
   * @type {string}
   * @memberof LoginUser
   */
  password: string
}

/**
 *
 * @export
 * @interface LoginUserRequest
 */
export interface LoginUserRequest {
  /**
   *
   * @type {LoginUser}
   * @memberof LoginUserRequest
   */
  user: LoginUser
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
 * @interface MultipleCommentsResponse
 */
export interface MultipleCommentsResponse {
  /**
   *
   * @type {Array<Comment>}
   * @memberof MultipleCommentsResponse
   */
  comments: Array<Comment>
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
 * @interface NewComment
 */
export interface NewComment {
  /**
   *
   * @type {string}
   * @memberof NewComment
   */
  body: string
}

/**
 *
 * @export
 * @interface NewCommentRequest
 */
export interface NewCommentRequest {
  /**
   *
   * @type {NewComment}
   * @memberof NewCommentRequest
   */
  comment: NewComment
}

/**
 *
 * @export
 * @interface NewUser
 */
export interface NewUser {
  /**
   *
   * @type {string}
   * @memberof NewUser
   */
  username: string
  /**
   *
   * @type {string}
   * @memberof NewUser
   */
  email: string
  /**
   *
   * @type {string}
   * @memberof NewUser
   */
  password: string
}

/**
 *
 * @export
 * @interface NewUserRequest
 */
export interface NewUserRequest {
  /**
   *
   * @type {NewUser}
   * @memberof NewUserRequest
   */
  user: NewUser
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
 * @interface ProfileResponse
 */
export interface ProfileResponse {
  /**
   *
   * @type {Profile}
   * @memberof ProfileResponse
   */
  profile: Profile
}

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
 * @interface SingleCommentResponse
 */
export interface SingleCommentResponse {
  /**
   *
   * @type {Comment}
   * @memberof SingleCommentResponse
   */
  comment: Comment
}

/**
 *
 * @export
 * @interface TagsResponse
 */
export interface TagsResponse {
  /**
   *
   * @type {Array<string>}
   * @memberof TagsResponse
   */
  tags: Array<string>
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
 * @interface UpdateUser
 */
export interface UpdateUser {
  /**
   *
   * @type {string}
   * @memberof UpdateUser
   */
  email?: string
  /**
   *
   * @type {string}
   * @memberof UpdateUser
   */
  token?: string
  /**
   *
   * @type {string}
   * @memberof UpdateUser
   */
  username?: string
  /**
   *
   * @type {string}
   * @memberof UpdateUser
   */
  bio?: string
  /**
   *
   * @type {string}
   * @memberof UpdateUser
   */
  image?: string
}

/**
 *
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   *
   * @type {UpdateUser}
   * @memberof UpdateUserRequest
   */
  user: UpdateUser
}

/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  email: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  token: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  username: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  bio: string
  /**
   *
   * @type {string}
   * @memberof User
   */
  image: string
}

/**
 *
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
  /**
   *
   * @type {User}
   * @memberof UserResponse
   */
  user: User
}
