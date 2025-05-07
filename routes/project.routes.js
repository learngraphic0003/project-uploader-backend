import express from "express"
import {createproject}  from "../controllers/project.controller.js"
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/upload",auth, createproject )

export default router 