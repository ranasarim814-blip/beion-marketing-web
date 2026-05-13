import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Video,
  UtensilsCrossed,
  Briefcase,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";

const iconMap = { Video, UtensilsCrossed, Briefcase, Code2 };

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-purple-600 text-xs font-medium uppercase tracking-widest mb-4"
          >
            Our Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            A Portfolio That{" "}
            <span className="text-gradient">Speaks for Itself</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Explore our work across categories. Click any category to view the
            full project showcase.
          </motion.p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {portfolioData.map((cat, i) => {
            const Icon = iconMap[cat.icon];

            return (
              <motion.button
                key={cat.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/portfolio/${cat.slug}`)}
                className="relative group overflow-hidden rounded-3xl text-left border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.coverGradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-all duration-300" />

                {/* Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${cat.coverGradient} opacity-10 blur-3xl group-hover:opacity-20 transition duration-500`}
                />

                {/* Content */}
                <div className="relative p-8 sm:p-10">

                  {/* TOP ROW */}
                  <div className="flex items-start justify-between mb-6">

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {Icon && <Icon size={24} className="text-white" />}
                    </div>

                    {/* TOP RIGHT ICON (FIXED VISIBILITY) */}
                    <div
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent transition-all duration-200"
                    >
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>

                  </div>

                  {/* TEXT */}
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-purple-600 text-sm font-medium mb-3 italic">
                    "{cat.tagline}"
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* IMAGES */}
                  <div className="grid grid-cols-3 gap-3">

                    {cat.images?.slice(0, 3).map((img, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl h-24 bg-gray-100"
                      >
                        <img
                          src={`${img}?w=500&auto=format&fit=crop&q=80`}
                          alt={`${cat.title}-${index}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />
                      </div>
                    ))}

                  </div>

                  {/* FOOTER */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">

                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />

                    {cat.projects.length} projects

                    <span className="mx-2">·</span>

                    <span>Click to explore</span>

                  </div>

                </div>
              </motion.button>
            );
          })}

        </div>
      </div>
    </section>
  );
}