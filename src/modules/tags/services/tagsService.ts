import { APIResponse } from '../../../shared/infra/services/APIResponse'
import { BaseAPI } from '../../../shared/infra/services/BaseAPI'
import { Result } from '../../../shared/core/Result'
import { right, left } from '../../../shared/core/Either'
import { IAuthService } from '@/modules/users/services/authService'

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

export interface ITagsService {
  getAllTags(options?: any): Promise<APIResponse<TagsResponse>>
}

export class TagsService extends BaseAPI implements ITagsService {
  constructor(authService: IAuthService) {
    super(authService)
  }

  async getAllTags(options?: any): Promise<APIResponse<TagsResponse>> {
    try {
      const res = await this.get('/tags', { options })
      return right(Result.ok<TagsResponse>(res.data))
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      )
    }
  }
}
