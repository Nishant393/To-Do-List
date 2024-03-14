import express  from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user-router"
const app = express()

// middlewares
app.use(express.json())
app.use("/user",userRouter)

mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>{
    app.listen(5000,()=>{
        console.log(`server run at localhost ${5000}`)
    })
}).catch((e)=>console.log(e))

 