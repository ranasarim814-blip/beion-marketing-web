import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Video,
  UtensilsCrossed,
  Briefcase,
  Code2,
  ExternalLink,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";

const iconMap = {
  video: Video,
  food: UtensilsCrossed,
  corporate: Briefcase,
  "web-development": Code2,
  events: Video,
};

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // smooth scroll on route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // fetch ALL projects
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://beion-marketing-web.onrender.com/api/projects");

        setProjects(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // filter only current category
  const filteredProjects = projects.filter(
    (p) => p.category === slug
  );

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      </MainLayout>
    );
  }

  if (!filteredProjects.length) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-white">
          No projects found
        </div>
      </MainLayout>
    );
  }

  const Icon = iconMap[slug] || Video;

  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 mb-10"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Icon size={34} className="text-white" />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white capitalize">
                {slug.replace("-", " ")}
              </h1>
              <p className="text-gray-400 mt-2">
                {filteredProjects.length} Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden"
            >
              {/* VIDEO */}
              <div className="aspect-video bg-black">
                <iframe
                  src={project.youtubeUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg">
                  {project.videoTitle}
                </h3>

                <span className="text-sm text-purple-400">
                  {project.company}
                </span>

                <p className="text-gray-400 text-sm mt-3">
                  {project.description}
                </p>

                <a
                  href={project.youtubeUrl.replace("/embed/", "/watch?v=")}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-400 mt-4 hover:text-white"
                >
                  Watch
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}