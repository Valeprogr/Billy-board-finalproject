import { Router } from "express";
import User from "../models/User";
import { Jwt } from "jsonwebtoken";
const { sign } = Jwt;

const router= new Router();

router.post("/signin", async (req,res)=>{
    try{
        const {email, password, name, lastname, company_name} = req.body;
        const candidate = await User.findOne({email: email});
        console.log(candidate);
        if(candidate){
            return res.status(400).json({message: "user already exist...", status:"error"});
        }
        const user = new User({name, lastname , email, password, company_name});
        console.log(user);
        await user.save();
        res.status(201).json({message: "user created..."})
    }catch(error){
        res.status(500).json({message: "error", status:"internal error"});
    }
});

// router.post("/login", async (req,res)=>{
//     try{
//         const {email, password}= req.body;
//         const user = await User.findOne({email: email});
//         if(!user){
//             return res.status(400).json({message})
//         }
//     }catch(error){

//     }
// })