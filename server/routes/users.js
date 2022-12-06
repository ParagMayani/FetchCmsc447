import express from "express";

import { createUsers, loginUsers , updateUsers, removeUsers  } from "../controllers/user.js";

const router = express.Router();

router.post("/create", createUsers);
router.patch("/signin", loginUsers);
router.patch("/update", updateUsers);
router.delete("/delete", removeUsers);

export default router;