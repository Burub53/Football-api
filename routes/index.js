import { Router } from "express";
import footballsRoutes from "./football.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/football", footballsRoutes);

export default router;
