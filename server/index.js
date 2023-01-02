import express,{json} from "express";
import {} from "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user-router.js";

import cors from "cors";

const app= express();
const PORT = process.env.PORT;
const DB_URI= process.env.DB_URI;

app.use(json({ extended : true }));

//use cors
app.use(cors());
app.use("", userRouter);

async function StartApp(){
    try{
        await mongoose.connect(DB_URI);
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }catch(error){
    console.log(error)
    }
}
StartApp()