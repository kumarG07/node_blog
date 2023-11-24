import express, { Request, Response } from 'express';
import { getAllComments, postComment, replyComment } from '../models/comment.model';

export const addComment = async (req: Request, res: Response) => {
    try {
        const { nickname, content, articleId } = req.body

        const commentData = {
            nickname, content, articleId
        }
        const response = await postComment(commentData)
        res.send('Comment added')
    } catch (error) {
        console.log('error', error)
    }
}

export const getAllCommentsByArticleId = async (req: Request, res: Response) => {
    const { articleId } = req.params
    try {
        const response = await getAllComments(articleId)
        res.send(response)
    } catch (error) {
        console.log('error', error)
    }
}

export const addReplyComment = async (req: Request, res: Response) => {
    try {
        const { nickname, content, articleId, parentId } = req.body

        const commentData = {
            nickname, content, articleId, parentId
        }
        const response = await replyComment(commentData)
        res.send('Comment added')
    } catch (error) {
        console.log('error', error)
    }
}