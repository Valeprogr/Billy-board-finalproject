import { Router } from "express";
import ProjectControllers from "../controllers/ProjectControllers";
import UserControllers from "../controllers/UserControllers";

const router = new Router();

router.post("/CreateProject", ProjectControllers.create);
router.get("/projects", ProjectControllers.getAll());