import { Router } from "express";
import { signinUserPost } from "../controller/controller.js";

const router = Router();

router.post("/account/signin", signinUserPost);

export default router;
