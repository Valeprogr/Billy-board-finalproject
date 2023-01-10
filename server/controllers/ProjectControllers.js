import {get} from "mongoose";
import ProjectServices from "../services/ProjectServices.js";


class projectControllers {

    async getAll(req,res) {
        try {
            const projects = await ProjectServices.getAll();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    async create(req,res) {
        try {
            const project = await ProjectServices.create(req.body);
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getOne(req,res){
        try{
            const project= await ProjectServices.getOne(req.params.id);
            return res.status(200).json(project)
        }catch(error){
            res.status(500).json(error)
        }
    }

    async upDate(req,res){
        try{
            const project= await ProjectServices.upDate(req.body);
            res.status(200).json(project)
        }catch(error){
            res.status(500).json(error);
        }
    }

    async delete(req,res){
        try{
            const project= await ProjectServices.delete(req.params.id);
            return res.status(200).json(project)
        }catch(error){
            res.status(500).json(error)
        }

    }
};

export default new projectControllers();