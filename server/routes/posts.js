import express from "express";

import { getAllPosts, createPosts, updatePosts, likePosts, unlikePosts, dislikePosts, undislikePosts, deletePosts, getFilteredPostById, getFilteredPostByCategory } from "../controllers/posts.js";

const router = express.Router();

router.get("/get", getAllPosts);
router.get("/get/filters/:_id", getFilteredPostById);
router.get("/get/filters/:category", getFilteredPostByCategory);
router.post("/create", createPosts);
router.patch("/update", updatePosts);
router.patch("/update/like", likePosts);
router.patch("/update/unlike", unlikePosts);
router.patch("/update/dislike", dislikePosts);
router.patch("/update/undislike", undislikePosts);
router.delete("/delete", deletePosts);

export default router;