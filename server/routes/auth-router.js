import { Router } from "express";
import User from "../models/User.js";
import  jwt  from "jsonwebtoken";
const { sign } = jwt;

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

router.post("/login", async (req,res)=>{
    try{
        const {email, password}= req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: "user not found", status: "error"});
        }
        if (user.password != password){
            return res.status(400).json({message: "invalid password", status:"error"});
        }

        const token = sign(
            {userId: user._id.toString()},
            process.env.JWT_SECRET,
            {expiresIn: '1h'});
            console.log(token)
            res.json({ token, userId: user._id.toString()})
    }catch(error){
        res.status(500).json({
            message: "error", status: "error"
        })
    }
})
export default router;