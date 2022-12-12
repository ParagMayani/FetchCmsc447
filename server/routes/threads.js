import express from "express";

import { getThreads, createThreads, updateThreads, likeThreads, dislikeThreads, deleteThreads } from "../controllers/threads.js";

const router = express.Router();

router.get("/get/:post_id", getThreads);
router.post("/create", createThreads);
router.patch("/update", updateThreads);
router.patch("/update/like", likeThreads);
router.patch("/update/dislike", dislikeThreads);
router.delete("/delete", deleteThreads);

export default router;