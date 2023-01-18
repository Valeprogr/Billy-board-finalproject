import { Router } from "express";
import ProjectControllers from "../controllers/ProjectControllers.js";


const router = new Router();

router.post("/createProject", ProjectControllers.create);
router.post("/todos", ProjectControllers.getAllTodos);
router.post("/createNewTask", ProjectControllers.createTodo);
router.get("/projects", ProjectControllers.getAll);
router.post("/project",ProjectControllers.getOne);
router.post("/project/members",ProjectControllers.getManyUsers);
router.post("/project/members/add",ProjectControllers.addMembers);
router.get("/project/current", ProjectControllers.getCurrentProject);
router.delete("/project/:id", ProjectControllers.delete);
export default router;