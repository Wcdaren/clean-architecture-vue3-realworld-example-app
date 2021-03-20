import { APIResponse } from '../../../shared/infra/services/APIResponse'
import { BaseAPI } from '../../../shared/infra/services/BaseAPI'
import { Result } from '../../../shared/core/Result'
import { right, left } from '../../../shared/core/Either'
import { IAuthService } from '@/modules/users/services/authService'
import {
  MultipleArticlesResponse,
  NewArticleRequest,
  SingleArticleResponse,
  UpdateArticleRequest,
} from '../dtos/articleDTO'

export type getArticlesType = {
  tag?: string
  author?: string
  favorited?: string
  limit?: number
  offset?: number
  options?: any
}
export interface IArticlesService {
  createArticle(
    article: NewArticleRequest,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>>
  deleteArticle(slug: string, options?: any): Promise<APIResponse<void>>
  getArticle(
    slug: string,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>>
  getArticles(
    params: getArticlesType
  ): Promise<APIResponse<MultipleArticlesResponse>>
  getArticlesFeed(
    limit?: number,
    offset?: number,
    options?: any
  ): Promise<APIResponse<MultipleArticlesResponse>>
  updateArticle(
    slug: string,
    article: UpdateArticleRequest,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>>
}

export class ArticlesService extends BaseAPI implements IArticlesService {
  constructor(authService: IAuthService) {
    super(authService)
  }
  async createArticle(
    article: NewArticleRequest,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>> {
    try {
      const accessToken = this.authService.getToken('access-token')
      const isAuthenticated = !!accessToken === true
      const auth = {
        authorization: accessToken,
      }

      const response = await this.post(
        '/articles',
        { article, options },
        isAuthenticated ? auth : null
      )

      return right(Result.ok<SingleArticleResponse>(response.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
  async deleteArticle(slug: string, options?: any): Promise<APIResponse<void>> {
    try {
      const accessToken = this.authService.getToken('access-token')
      const isAuthenticated = !!accessToken === true
      const auth = {
        authorization: accessToken,
      }

      await this.delete(
        `/articles/${slug}`,
        { options, slug },
        isAuthenticated ? auth : null
      )
      return right(Result.ok<void>())
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
  async getArticle(
    slug: string,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>> {
    try {
      const response = await this.get(`/articles/${slug}`, { slug, options })
      return right(Result.ok<SingleArticleResponse>(response.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
  async getArticles(
    params: getArticlesType
  ): Promise<APIResponse<MultipleArticlesResponse>> {
    const { author, favorited, limit, offset, tag, ...options } = params
    try {
      const response = await this.get('/articles', {
        tag,
        author,
        favorited,
        limit,
        offset,
        ...options,
      })

      return right(Result.ok<MultipleArticlesResponse>(response.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
  async getArticlesFeed(
    limit?: number,
    offset?: number,
    options?: any
  ): Promise<APIResponse<MultipleArticlesResponse>> {
    try {
      const accessToken = this.authService.getToken('access-token')
      const isAuthenticated = !!accessToken === true
      const auth = {
        authorization: accessToken,
      }

      const response = await this.get(
        '/article/feed',
        { limit, offset, options },
        isAuthenticated ? auth : null
      )

      return right(Result.ok<MultipleArticlesResponse>(response.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
  async updateArticle(
    slug: string,
    article: UpdateArticleRequest,
    options?: any
  ): Promise<APIResponse<SingleArticleResponse>> {
    try {
      const accessToken = this.authService.getToken('access-token')
      const isAuthenticated = !!accessToken === true
      const auth = {
        authorization: accessToken,
      }

      const response = await this.put(
        `/articles/${slug}`,
        { article, slug, options },
        isAuthenticated ? auth : null
      )

      return right(Result.ok<SingleArticleResponse>(response.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
}
