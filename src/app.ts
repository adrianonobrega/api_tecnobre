import express from 'express'
import { AppDataSource } from './database'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.listen(3000,() => console.log("rodando liso"))