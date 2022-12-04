import express from "express";

import { getThreads, createThreads, updateThreads, likeThreads, unlikeThreads, dislikeThreads, undislikeThreads, deleteThreads } from "../controllers/threads.js";

const router = express.Router();

router.get("/get", getThreads);
router.post("/create", createThreads);
router.patch("/update", updateThreads);
router.patch("/update/like", likeThreads);
router.patch("/update/unlike", unlikeThreads);
router.patch("/update/dislike", dislikeThreads);
router.patch("/update/undislike", undislikeThreads);
router.delete("/delete", deleteThreads);

export default router;