
import express from "express";
import dotenv from "dotenv";
import connectdb from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userouter from "./routes/user.routes.js";
dotenv.config({});
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin:"http://localhost:5173",
     credentials:true,
}))

const PORT=process.env.PORT || 3000;
// connecting to databse
connectdb();
app.use("/api/v1/user",userouter);
app.listen(PORT,()=>console.log(`Server is Running on ${PORT}` ));
