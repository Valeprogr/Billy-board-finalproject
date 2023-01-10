import Project from "../models/Project.js";

class ProjectServices{
    
async create(project){
    const createProject= await Project.create(project);
    return createProject
}

async getAll(){
    const projects= await Project.find();
    return projects
}

async getOne(id){
    if(!id){
        throw new Error("id Missing")
    }
    const project= await Project.findById(id);
    return project
}

async upDate(project){
if(!project._id){
    throw new Error("id Mising")
}
const updateProject= await Project.findByIdAndUpdate(project._id,project,{new: true});
return updateProject
}

async delete(id){
    if(!id){
        res.status(500).json({message: "id Missing!"})
    }
    const deleteProject= await Project.findByIdAndDelete(id);
    return deleteProject
}
}
export default new ProjectServices();