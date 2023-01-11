import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const router = new Router();

router.post("/user", UserControllers.create);
router.post("/createNewEmployee", UserControllers.create)
router.get("/user", UserControllers.getAll);
router.get("/user/settings", UserControllers.getCacheId);
router.put("/user/settings", UserControllers.upDate);
router.delete("user/:id", UserControllers.delete);


export default router;