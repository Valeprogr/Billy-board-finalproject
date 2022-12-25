import { get } from "mongoose";
import UserServices from "../services/UserServices.js";

class UserControllers {
    async getAll(req, res) {
        try {
            const users = await UserServices.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const user = await UserServices.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getOne(req,res){
        try{
            const user= await UserServices.getOne(req.params.id);
            return res.status(200).json(user) ;
        }catch(error){
            res.status(500).json(error);
        }
    }

    async upDate(req,res){
        try{
            const updatedUser= await UserServices.upDate(req.body);
            res.status(200).json(updatedUser);
        }catch(error){
            res.status(404).json(error);
        }
    }

    async delete(req,res){
        try{
            const user= await UserServices.delete(req.params.id);
            return res.status(200).json(user);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new UserControllers();