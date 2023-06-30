const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const route=require('./routing/route')
app.use(route)
PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server is created");
})