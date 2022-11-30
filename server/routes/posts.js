import express from "express";

import { getPosts, createPosts, updatePosts, likePosts, unlikePosts, dislikePosts, undislikePosts, deletePosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/get", getPosts);
router.post("/create", createPosts);
router.patch("/update/:userID/:postID", updatePosts);
router.patch("/update/like/:postID", likePosts);
router.patch("/update/unlike/:postID", unlikePosts);
router.patch("/update/dislike/:postID", dislikePosts);
router.patch("/update/undislike/:postID", undislikePosts);
router.delete("/delete/:userID/:postID", deletePosts);

export default router;