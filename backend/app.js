const express=require('express')
const cors=require('cors')
require('dotenv').config()
const users=require('./routes/user')
const connectDb=require('./configure/db')
const app=express()
app.use(cors())
app.use('/auth',users)
connectDb()
app.get('/',(req,res)=>{

})
