import express from 'express'
import { AppDataSource } from './database'
import { router } from './routes'

export const app = express()

app.use(express.json())

app.use(router)