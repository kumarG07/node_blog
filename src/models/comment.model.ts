import { connectDB } from "../config/db";
import { Comment, Id } from "../types";

export const postComment = async (data: Comment) => {
    const connect = await connectDB()
    try {
        const res = await connect.query(`INSERT INTO comment (nickname, content, articleId)VALUES ('${data.nickname}', '${data.content}', '${data.articleId}')`)
        return res
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}


export const getAllComments = async (articleId: string) => {
    const connect = await connectDB()
    try {

        const res = await connect.query<(Comment & Id)[]>(`SELECT * FROM comment WHERE articleId = ${articleId};`)

        return res
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}

export const replyComment = async (data: any) => {
    const connect = await connectDB()
    try {
        const res = await connect.query(`INSERT INTO comment (nickname, content, articleId, parentId)VALUES ('${data.nickname}', '${data.content}', '${data.articleId}','${data.parentId}')`)
        return res
    } catch (error) {
        console.log('error', error)
    } finally {
        connect.close()
    }
}