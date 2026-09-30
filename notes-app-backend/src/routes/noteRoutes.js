import { Router } from "express";
import mongoose from "mongoose";
import {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// Every notes route needs a valid JWT
router.use(protect);

router.param("id", (req, res, next, id) => {
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid note id" });
  }
  next();
});

router.route("/").get(getNotes).post(createNote);

router.route("/:id").get(getNote).put(updateNote).patch(updateNote).delete(deleteNote);

export default router;
