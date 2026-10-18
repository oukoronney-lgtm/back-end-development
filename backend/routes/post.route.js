import express from "express";
import { createPost, getPosts, updatePost, deletepost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/", getPosts);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletepost);

export default router;