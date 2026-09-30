import "dotenv/config";
import mongoose from "mongoose";
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todo_api";

try {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
} catch (err) {
  console.error("Could not connect to MongoDB:", err.message);
  process.exit(1);
}
