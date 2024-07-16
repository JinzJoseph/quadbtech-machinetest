import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import cookieParser from "cookie-parser"
const app=express();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser())
dotenv.config();
connectDB();
app.use("/hallo",(req,res)=>{
    res.send("hallo welome to new world")
})
app.use("/api/user",userRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)