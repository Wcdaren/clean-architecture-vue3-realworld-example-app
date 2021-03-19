import { ArticlesService } from './articlesService'
import { authService } from '../../users/services'

const articlesService = new ArticlesService(authService)

export { articlesService }
