import express from "express";

import { createUsers, updateUsers, removeUsers  } from "../controllers/user.js";

const router = express.Router();

router.post("/create", createUsers);
router.patch("/update/:userID", updateUsers);
router.delete("/delete/:userID", removeUsers);

export default router;