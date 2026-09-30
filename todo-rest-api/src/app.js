import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "To-Do API is running" });
});

app.use("/api/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
