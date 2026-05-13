import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function AdminProjectForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    videoTitle: "",
    company: "",
    youtubeUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/projects",
        formData
      );

      console.log("Saved:", res.data);

      alert("Project Uploaded Successfully!");

      // reset form
      setFormData({
        category: "",
        videoTitle: "",
        company: "",
        youtubeUrl: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error uploading project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Upload Portfolio Project
        </h1>

        <p className="text-gray-400 mb-8">
          Add new portfolio project details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-2xl bg-dark-800 border border-white/10 px-4 py-3 text-white outline-none"
              required
            >
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="corporate">Corporate</option>
              <option value="events">Events</option>
              <option value="web-development">Web Development</option>
            </select>
          </div>

          {/* Video Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Video Title
            </label>

            <input
              type="text"
              name="videoTitle"
              value={formData.videoTitle}
              onChange={handleChange}
              placeholder="Luxury Restaurant Ad"
              className="w-full rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Studio Luxe"
              className="w-full rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
              required
            />
          </div>

          {/* YouTube URL */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              YouTube Embed URL
            </label>

            <input
              type="text"
              name="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
              className="w-full rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project description..."
              className="w-full rounded-2xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-medium hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Project"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}