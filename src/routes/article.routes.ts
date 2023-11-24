import { Router } from 'express'
import { createArticle, getAllArticles, getContent } from '../controllers/article.controller'

const articleRouter = Router()

articleRouter.post('/',createArticle)
articleRouter.get('/', getAllArticles)
articleRouter.get('/content/:id', getContent)

export  default articleRouter