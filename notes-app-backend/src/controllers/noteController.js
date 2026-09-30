import Note from "../models/Note.js";

const ALLOWED_FIELDS = ["title", "content", "pinned"];

const pickFields = (body) =>
  Object.fromEntries(Object.entries(body).filter(([key]) => ALLOWED_FIELDS.includes(key)));

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// POST /api/notes
export const createNote = async (req, res, next) => {
  try {
    const note = await Note.create({ ...pickFields(req.body), user: req.user._id });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

// GET /api/notes?search=word&pinned=true
export const getNotes = async (req, res, next) => {
  try {
    const filter = { user: req.user._id };

    if (req.query.pinned === "true") filter.pinned = true;
    if (req.query.pinned === "false") filter.pinned = false;

    if (typeof req.query.search === "string" && req.query.search.trim() !== "") {
      const pattern = new RegExp(escapeRegex(req.query.search.trim()), "i");
      filter.$or = [{ title: pattern }, { content: pattern }];
    }

    const notes = await Note.find(filter).sort({ pinned: -1, updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

// GET /api/notes/:id
export const getNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

// PUT or PATCH /api/notes/:id
export const updateNote = async (req, res, next) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      pickFields(req.body),
      { new: true, runValidators: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/notes/:id
export const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted", note });
  } catch (err) {
    next(err);
  }
};
