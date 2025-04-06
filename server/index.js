import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = 27017

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{console.log('connected')})
    .catch(()=>{})