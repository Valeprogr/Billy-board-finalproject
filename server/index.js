import express,{json} from "express";
import {} from "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user-router.js";
import authRouter from "./routes/auth-router.js";
import projectRouter from "./routes/project-router.js";
import fs from "fs";
import {readFile} from "fs/promises";


import cors from "cors";
mongoose.set('strictQuery', true);

//Problem with manifest json Solution
//app.use(express.static(path.join(__dirname,'client','build'))) ;

const app= express();
const PORT = process.env.PORT;
const DB_URI= process.env.DB_URI;

app.use(express.json({ extended: true }));

//use cors
app.use(cors());
// app.use("", userRouter);
app.use("/", authRouter);
app.use("", userRouter);
app.use("", projectRouter);

async function StartApp(){
    try{
        await mongoose.connect(DB_URI.toString());
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }catch(error){
    console.log(error)
    }
}
StartApp()

