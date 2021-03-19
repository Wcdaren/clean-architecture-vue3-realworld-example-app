import { TagsService } from './tagsService'
import { authService } from '../../users/services'

const tagsService = new TagsService(authService)

export { tagsService }
