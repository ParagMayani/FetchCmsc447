import express from "express";

import { getAllPosts, getFilteredPosts, createPosts, updatePosts, likePosts, unlikePosts, dislikePosts, undislikePosts, deletePosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/get", getAllPosts);
router.get("/get/filters", getFilteredPosts);
router.post("/create", createPosts);
router.patch("/update", updatePosts);
router.patch("/update/like", likePosts);
router.patch("/update/unlike", unlikePosts);
router.patch("/update/dislike", dislikePosts);
router.patch("/update/undislike", undislikePosts);
router.delete("/delete", deletePosts);

export default router;