import express from "express";

import { getAllPosts, createPosts, updatePosts, likePosts, dislikePosts, deletePosts, getFilteredPostById, getFilteredPostByCategory } from "../controllers/posts.js";

const router = express.Router();

router.get("/get", getAllPosts);
router.get("/get/filters/id=:_id", getFilteredPostById);
router.get("/get/filters/category=:category", getFilteredPostByCategory);
router.post("/create", createPosts);
router.patch("/update", updatePosts);
router.patch("/update/like", likePosts);
router.patch("/update/dislike", dislikePosts);
router.delete("/delete", deletePosts);

export default router;