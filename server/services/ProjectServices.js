import Project from "../models/Project.js";
import TodoList from "../models/TodoList.js";
import Todo from "../models/Todo.js";
import User from "../models/User.js";
import {format} from "date-fns";

class ProjectServices {

    async create(project) {
        const createProject = await Project.create(project);
        const todolist = await TodoList.create({ "projectID": createProject._id });
        const projectWithTodo = await Project.findByIdAndUpdate(createProject._id, { 'todo_list': todolist._id }, { new: true, useFindAndModify: false })
        return projectWithTodo
    }

    async createTodo(todo) {
        const newTodo = await Todo.create(todo);
        const updatedTodoList = await TodoList.findByIdAndUpdate(todo.todoList_id, { $push: { todos: newTodo._id } }, { new: true, useFindAndModify: false });
        return updatedTodoList;
    }

    async getAllTodos(todoListID) {
        const todos = await Todo.find(todoListID);
        return todos;
    }

    async getAll() {
        const projects = await Project.find();
        return projects
    }

    async getOne(id) {
        if (!id) {
            throw new Error("id Missing")
        }
        const project = await Project.findById(id);
        return project
    }

    async upDate(project) {
        if (!project._id) {
            throw new Error("id Mising")
        }
        const updateProject = await Project.findByIdAndUpdate(project._id, project, { new: true });
        return updateProject
    }

    async delete(id) {
        if (!id) {
            res.status(500).json({ message: "id Missing!" })
        }
        const deleteProject = await Project.findByIdAndDelete(id);
        return deleteProject
    }

    async getManyUsers(ids) {
        let users = [];
        for (let i= 0;i < ids.length; i++) {
            let user = await User.findOne({"_id":ids[i]});
            users.push(user);
        }
        return users;
    }

    async addMembers(updateObj) {
        const updatedProject = await Project.findByIdAndUpdate(updateObj.projectID, { $push: { "members": updateObj.members } }, { new: true, useFindAndModify: false });
        
        return updatedProject
    }

    async getCurrentProject() {
        const today = format(Date.now(), 'dd.MM.yyyy').toString();
        const project = await Project.findOne({"start_date": today});
        return project

    }

}
export default new ProjectServices();