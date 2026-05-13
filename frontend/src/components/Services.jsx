import { motion } from "framer-motion";
import {
  Video,
  UtensilsCrossed,
  Briefcase,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import services from "../data/services.json";

const iconMap = {
  Video,
  UtensilsCrossed,
  Briefcase,
  Code2,
};

const gradientMap = {
  event: "from-purple-500 via-pink-500 to-rose-500",
  food: "from-orange-500 via-amber-400 to-yellow-500",
  corporate: "from-blue-600 via-cyan-500 to-sky-400",
  web: "from-emerald-500 via-teal-400 to-cyan-400",
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-purple-600 text-xs font-medium uppercase tracking-widest mb-4"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Services Designed to{" "}
            <span className="text-gradient">Elevate Your Brand</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            From cinematic productions to cutting-edge web experiences,
            every service is crafted with precision and passion.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const gradient = gradientMap[service.theme];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm group hover:shadow-xl hover:border-gray-300 transition-all duration-500"
              >

                {/* Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${gradient} opacity-10 blur-3xl group-hover:opacity-20 transition duration-500`}
                />

                {/* Top Gradient Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

                {/* Content */}
                <div className="relative p-7 flex flex-col h-full">

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {Icon && <Icon size={28} className="text-white" />}
                  </div>

                  {/* Text */}
                  <div className="mt-6 flex-1">
                    <h3 className="font-display font-bold text-gray-900 text-xl mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradient}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                      Learn More
                    </span>

                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <ArrowUpRight
                        size={16}
                        className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}