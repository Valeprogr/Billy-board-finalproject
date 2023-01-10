import { Router } from "express";
import ProjectControllers from "../controllers/ProjectControllers.js";


const router = new Router();

router.post("/CreateProject", ProjectControllers.create);
router.get("/projects", ProjectControllers.getAll);

export default router;