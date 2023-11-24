import { connectDB } from "../config/db";
import { Article, Id } from "../types";

export const postArticle = async (data: Article) => {
    const connect = await connectDB()
    try {
        const res = await connect.query<(Article & Id)[]>(`INSERT INTO article (nickname, title, content)VALUES ('${data.nickname}', '${data.title}', '${data.content}')`)
        return res
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}

export const getAll = async () => {
    const connect = await connectDB()
    const page = 1;
    const pageSize = 20;
    const offset = (page - 1) * pageSize;

    try {

        const res = await connect.query<(Article & Id)[]>(`SELECT * FROM article LIMIT ${pageSize} OFFSET ${offset};`)

        return res
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}

export const getArticleContent = async (id: string) => {
    const connect = await connectDB()
    try {

        const res = await connect.query<Article[]>(`SELECT * FROM article WHERE id = ${id};`)

        return res[0].content
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}