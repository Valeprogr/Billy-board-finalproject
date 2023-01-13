import { Router } from "express";
import ProjectControllers from "../controllers/ProjectControllers.js";


const router = new Router();

router.post("/CreateProject", ProjectControllers.create);
router.post("/todolist", ProjectControllers.createTodoList);
router.get("/todolist", ProjectControllers.getAllTodoList);
router.post("/todolist/todo", ProjectControllers.createTodo);
router.get("/projects", ProjectControllers.getAll);

export default router;