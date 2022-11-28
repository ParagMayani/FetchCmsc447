import express from "express";

import { getThreads, createThreads, updateThreads, likeThreads, unlikeThreads, dislikeThreads, undislikeThreads, deleteThreads } from "../controllers/threads.js";

const router = express.Router();

router.get("/get", getThreads);
router.post("/create", createThreads);
router.patch("/update/:userID/:threadID", updateThreads);
router.patch("/update/like/:threadID", likeThreads);
router.patch("/update/unlike/:threadID", unlikeThreads);
router.patch("/update/dislike/:threadID", dislikeThreads);
router.patch("/update/undislike/:threadID", undislikeThreads);
router.delete("/delete/:userID/:threadID", deleteThreads);

export default router;