import { DataSource } from "typeorm";
import dotenv from 'dotenv/config'

require('dotenv').config()

export const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    }
    : {
    
    type: "postgres",

    host: "localhost",
    
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
})

