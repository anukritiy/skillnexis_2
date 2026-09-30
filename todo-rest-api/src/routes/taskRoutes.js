import { Router } from "express";
import mongoose from "mongoose";
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = Router();

// Reject bad ids before they reach the database
router.param("id", (req, res, next, id) => {
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid task id" });
  }
  next();
});

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask).put(updateTask).patch(updateTask).delete(deleteTask);

export default router;
