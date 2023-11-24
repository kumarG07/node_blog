export type Id = {
    id: number
    creationDate: Date
}

export type Article = {
    content: string
    title: string
    nickname: string
}


export type Comment = {
    content: string
    nickname: string
    articleId: number,
    parentId?:number
}
