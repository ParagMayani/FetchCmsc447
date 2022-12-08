import express from "express";

import { verifyEmail, createUsers, loginUsers , updateUsers, removeUsers  } from "../controllers/user.js";

const router = express.Router();

router.post("/verify", verifyEmail);
router.post("/create", createUsers);
router.patch("/signin", loginUsers);
router.patch("/update", updateUsers);
router.delete("/delete", removeUsers);

export default router;