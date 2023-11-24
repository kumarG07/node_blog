import {Router} from 'express';
import articleRouter from './article.routes';
import commentRouter from './comment.routes';

const router = Router();

router.use('/article', articleRouter)
router.use('/comment', commentRouter)

export default router