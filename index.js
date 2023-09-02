const express=require("express")
const app=express()
const port =2000||process.env.PORT
const dotenv=require("dotenv")
dotenv.config()
app.get("/",(req,res)=>{
    res.send("from check aws")
})
app.listen(port,()=>{
    console.log("server has started "+ port)
})