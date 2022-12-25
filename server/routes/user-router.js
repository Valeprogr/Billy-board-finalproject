import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const router= new Router();

router.post("/user", UserControllers.create);
router.get("/user", UserControllers.getAll);
router.get("/user/:id", UserControllers.getOne);
router.put("user", UserControllers.upDate);
router.delete("user/:id", UserControllers.delete);

export default router;