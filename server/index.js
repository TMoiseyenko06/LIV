import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import scrapbookRoutes from './routes/scrapbooks.js'
import postRoutes from './routes/posts.js'

dotenv.config()

const app = express()

app.use('/users', userRoutes)
app.use('/scrapbooks', scrapbookRoutes)
app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = 27017

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`server running: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)