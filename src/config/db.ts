import { createConnection, Db } from 'typeorm';

export const connectDB = async () => {
  return  createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'blog_db',
        synchronize: true,
        logging: true,
        entities: [__dirname + '/../tables/*.ts'],
    })

}

