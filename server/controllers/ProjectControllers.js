import { get } from "mongoose";
import ProjectServices from "../services/ProjectServices.js";


class projectControllers {

    async getAll(req, res) {
        try {
            const projects = await ProjectServices.getAll();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const project = await ProjectServices.create(req.body);
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getOne(req, res) {
        try {
            const project = await ProjectServices.getOne(req.body.project_id);
            return res.status(200).json(project)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async upDate(req, res) {
        try {
            const project = await ProjectServices.upDate(req.body);
            res.status(200).json(project)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const project = await ProjectServices.delete(req.params.id);
            return res.status(200).json(project)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    async createTodoList(req, res) {
        try {
            const TodoList = await ProjectServices.createTodoList(req.body);
            return res.status(201).json(TodoList)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createTodo(req, res) {
        try {
            const Todo = await ProjectServices.createTodo(req.body);
            return res.status(201).json(Todo)

        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAllTodos(req, res) {
        try {
            const todos = await ProjectServices.getAllTodos(req.body);
            return res.status(200).json(todos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getManyUsers(req, res) {
        try {
            const users = await ProjectServices.getManyUsers(req.body.members);
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async addMembers(req, res) {
        try {
            const resData = await ProjectServices.addMembers(req.body);
            return res.status(200).json(resData);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getCurrentProject(req, res) {
        try {
            const project = await ProjectServices.getCurrentProject();
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

export default new projectControllers();