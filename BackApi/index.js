const express = require("express")
const cors = require("cors")
const app = express()
const port = 3001
app.use(cors())

const apiData = require("./data.json")

app.get("/",( req,res)=>{
    res.send("hello it is My App")
})

app.get("/servies",(req,res)=>{
    res.send(apiData)
})

app.listen(port,()=>{
    console.log("my first express file")
})