
import { Router } from 'express'
import { addComment, addReplyComment, getAllCommentsByArticleId } from '../controllers/comment.controller'

const commentRouter = Router()

commentRouter.post('/', addComment)
commentRouter.post('/reply_comment', addReplyComment)
commentRouter.get('/:articleId', getAllCommentsByArticleId)


export default commentRouter