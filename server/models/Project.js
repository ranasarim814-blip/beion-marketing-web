import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    category: String,
    videoTitle: String,
    company: String,
    youtubeUrl: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);