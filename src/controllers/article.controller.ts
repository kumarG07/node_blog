import express, { Request, Response } from 'express';
import { postArticle, getAll, getArticleContent } from '../models/article.model';

export const createArticle = async (req: Request, res: Response) => {
    try {
        const { nickname, title, content } = req.body

        const articleData = {
            nickname, title, content
        }
        const response = await postArticle(articleData)
        res.send('Created')
    } catch (error) {
        console.log('error', error)
    }
}

export const getAllArticles = async (req: Request, res: Response) => {
    try {
        const response = await getAll()
        res.send(response)
    } catch (error) {
        console.log('error', error)
    }
}

export const getContent = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const response = await getArticleContent(id)
        res.send(response)
    } catch (error) {
        console.log('error', error)
    }
}