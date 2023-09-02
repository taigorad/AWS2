const express=require("express")
const app=express()
const port =2000

app.get("/",(req,res)=>{
    res.send("from check aws")
})
app.listen(port,()=>{
    console.log("server has started "+ port)
})