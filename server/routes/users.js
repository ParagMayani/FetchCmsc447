import express from "express";

import { createUsers, updateUsers, deleteUsers } from "../controllers/users.js";

const router = express.Router();

router.post("/create", createUsers);
router.patch("/update/:userID", updateUsers);
router.delete("/delete/:userID", deleteUsers);

export default router;