import Task from "../models/Task.js";

const ALLOWED_FIELDS = ["title", "description", "completed"];

const pickFields = (body) =>
  Object.fromEntries(Object.entries(body).filter(([key]) => ALLOWED_FIELDS.includes(key)));

// POST /api/tasks
export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(pickFields(req.body));
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks?completed=true|false
export const getTasks = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.completed === "true") filter.completed = true;
    if (req.query.completed === "false") filter.completed = false;

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks/:id
export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// PUT or PATCH /api/tasks/:id
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, pickFields(req.body), {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted", task });
  } catch (err) {
    next(err);
  }
};
