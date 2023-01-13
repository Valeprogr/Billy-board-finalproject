import Project from "../models/Project.js";
import TodoList from "../models/TodoList.js";
import Todo from "../models/Todo.js"


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

async createTodoList(todoList) {
    const createdTodoList = await TodoList.create(todoList);
    const updatedProject = await Project.findByIdAndUpdate(todoList.projectID, {'todo_list': createdTodoList._id}, { new: true, useFindAndModify: false });
    return updatedProject;
}
async createTodo(todo) {
    const newTodo = await Todo.create(todo);
    const updatedTodoList = await TodoList.findByIdAndUpdate(todo.todoList_id, {$push: {todos: newTodo._id}}, {new: true, useFindAndModify: false});
    return updatedTodoList;
}

async getAllTodoList() {
    const todoLists = await TodoList.find();
    return todoLists;
}
}
export default new ProjectServices();