import { Router } from "express";
import ProjectControllers from "../controllers/ProjectControllers.js";


const router = new Router();

router.post("/createProject", ProjectControllers.create);
router.post("/todos", ProjectControllers.getAllTodos);
router.post("/createNewTask", ProjectControllers.createTodo);
router.get("/projects", ProjectControllers.getAll);

export default router;