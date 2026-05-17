import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/projects", projectRoutes);

// health check
app.get("/", (req, res) => {
  res.send("API Running...");
});

// start server
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://beion-marketing-web.vercel.app/"
}));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});