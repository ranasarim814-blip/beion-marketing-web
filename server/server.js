import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "https://beion-marketing-web.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Routes
app.use("/api/projects", projectRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("API Running...");
});

// PORT
const PORT = process.env.PORT || 5000;

// Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });