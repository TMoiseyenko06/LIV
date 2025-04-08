import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import {auth} from 'express-openid-connect'
import User from './models/user.js'

import userRoutes from './routes/users.js'
import scrapbookRoutes from './routes/scrapbooks.js'
import postRoutes from './routes/posts.js'

dotenv.config()

const app = express()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: '7VFGNePS6Pn9GUhSZnjTe83mgeHbv9bh',
    issuerBaseURL: 'https://dev-168nyedcxesesxxi.us.auth0.com'
  };
  

app.use(auth(config));

app.use('/users', userRoutes)
app.use('/scrapbooks', scrapbookRoutes)
app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))
app.use(cors());




const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = 3000



mongoose.connect("mongodb://root:password@localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(3000, () => console.log(`server running: ${PORT}`)))
    .catch((error) => console.log(error.message))


