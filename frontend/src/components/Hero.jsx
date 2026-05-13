import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Background layers (light version) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-700 mb-8"
            >
              <Sparkles size={14} className="text-purple-500" />
              Creative Marketing Agency — Pakistan
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900"
            >
              We Craft{" "}
              <span className="text-gradient">Visual Stories</span>{" "}
              That Convert
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Beion Marketing blends cinematic videography, stunning photography,
              and modern web development to build brands that stand out in the
              digital landscape.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#portfolio")}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 glow-sm"
              >
                View Portfolio
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 font-medium shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white hover:border-transparent">
                <Play size={15} className="text-purple-500" />
                Contact Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { val: "150+", label: "Projects" },
                { val: "80+", label: "Clients" },
                { val: "5+", label: "Years" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-gray-900">
                    {s.val}
                  </div>
                  <div className="text-gray-500 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full border border-gray-200 animate-spin-slow" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-gray-100 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            </div>

            {/* Portrait */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative z-10"
            >
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden glow relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-display font-bold text-3xl text-white">B</span>
                    </div>
                    <p className="text-gray-600 text-sm">Your Photo Here</p>
                    <p className="text-gray-400 text-xs mt-1">Replace with portrait</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-12 glass rounded-2xl px-4 py-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                  🎥
                </div>
                <div>
                  <div className="text-gray-800 text-xs font-medium">Event Shoot</div>
                  <div className="text-gray-500 text-xs">Just completed</div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 glass rounded-2xl px-4 py-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <div className="text-gray-800 text-xs font-medium">5.0 Rating</div>
                  <div className="text-gray-500 text-xs">80+ clients</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}