import express from "express";
import { updateUserController } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", updateUserController)


export default router;