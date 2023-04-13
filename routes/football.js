import { Router } from "express";
import * as controllers from "../controller/football.js";

const router = Router();

router.get("/", controllers.getFootballs);
router.get("/:id", controllers.getFootball);
router.post("/", controllers.createFootball);
router.put("/:id", controllers.updateFootball);
router.delete("/:id", controllers.deleteFootball);

export default router;
