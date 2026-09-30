import "dotenv/config";
import mongoose from "mongoose";
import app from "./src/app.js";

const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/auth_api";

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is missing. Add it to your .env file.");
  process.exit(1);
}

try {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
} catch (err) {
  console.error("Could not connect to MongoDB:", err.message);
  process.exit(1);
}
