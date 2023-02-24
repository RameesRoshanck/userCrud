require('dotenv').config()
const express = require('express')
const ConnectDb=require('./Config/connection')
const Router=require('./Router/Router')



const app = express()
ConnectDb()

app.use(express.json());
const PORT=process.env.PORT || 3000

app.use('/api',Router)

app.listen(PORT,()=>{
    console.log("localhost is connect");
})