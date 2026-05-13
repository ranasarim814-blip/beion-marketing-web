import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Zap, Eye, Target } from "lucide-react";
import stats from "../data/stats.json";

function Counter({ value, suffix, colorClass }) {
  return (
    <span className={`font-display text-4xl font-bold ${colorClass}`}>
      {value}
      {suffix}
    </span>
  );
}

const statColors = [
  {
    bg: "bg-[#EEEDFE] border-[#AFA9EC]",
    value: "text-[#3C3489]",
    label: "text-[#534AB7]",
  },
  {
    bg: "bg-[#E6F1FB] border-[#85B7EB]",
    value: "text-[#0C447C]",
    label: "text-[#185FA5]",
  },
  {
    bg: "bg-[#E1F5EE] border-[#5DCAA5]",
    value: "text-[#085041]",
    label: "text-[#0F6E56]",
  },
  {
    bg: "bg-[#FBEAF0] border-[#ED93B1]",
    value: "text-[#72243E]",
    label: "text-[#993556]",
  },
];

const features = [
  {
    icon: Zap,
    title: "Creative Storytelling",
    desc: "Every project is a narrative — we engineer visual stories that resonate deeply with your audience.",
    bg: "bg-[#EEEDFE] border-[#AFA9EC]",
    iconBg: "bg-[#CECBF6]",
    iconColor: "text-[#3C3489]",
    titleColor: "text-[#3C3489]",
    descColor: "text-[#534AB7]",
  },
  {
    icon: Eye,
    title: "Premium Aesthetics",
    desc: "We obsess over detail, color, composition, and motion to deliver work that looks extraordinary.",
    bg: "bg-[#E6F1FB] border-[#85B7EB]",
    iconBg: "bg-[#B5D4F4]",
    iconColor: "text-[#0C447C]",
    titleColor: "text-[#0C447C]",
    descColor: "text-[#185FA5]",
  },
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Beautiful content that also drives engagement, brand recall, and measurable business growth.",
    bg: "bg-[#E1F5EE] border-[#5DCAA5]",
    iconBg: "bg-[#9FE1CB]",
    iconColor: "text-[#085041]",
    titleColor: "text-[#085041]",
    descColor: "text-[#0F6E56]",
  },
];

const expertise = [
  "Cinematic Video Production",
  "Brand Identity & Strategy",
  "Food & Product Photography",
  "Motion Graphics & VFX",
  "Web Design & Development",
  "Social Media Content",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-purple-600 text-xs font-medium uppercase tracking-widest mb-4"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Where Creativity Meets{" "}
            <span className="text-gradient">Strategy</span>
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Beion Marketing is a premium creative agency dedicated to helping
            brands communicate with clarity, beauty, and purpose.
          </p>

        </div>

        {/* STATS */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => {
            const color = statColors[i % statColors.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`
                  rounded-2xl p-6 text-center border
                  ${color.bg}
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:scale-[1.03]
                `}
              >
                {inView && (
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    colorClass={color.value}
                  />
                )}
                <p className={`text-sm mt-2 ${color.label}`}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* TWO COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Feature Cards */}
          <div className="space-y-5">

            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`
                  rounded-2xl p-6 flex gap-4 border
                  ${f.bg}
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                `}
              >
                <div
                  className={`
                    w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                    ${f.iconBg}
                  `}
                >
                  <f.icon size={20} className={f.iconColor} />
                </div>

                <div>
                  <h3 className={`font-display font-semibold mb-1 ${f.titleColor}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${f.descColor}`}>
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT — Mission */}
          <div>

            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              We believe every brand has a compelling story waiting to be told.
              Our mission is to uncover that story and bring it to life through
              world-class visuals, strategic thinking, and creative execution.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From cinematic video production to pixel-perfect web experiences,
              we build digital presences that are impossible to ignore.
            </p>

            <h4 className="font-display font-semibold text-gray-900 mb-4 text-sm uppercase tracking-widest">
              Areas of Expertise
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <CheckCircle2 size={15} className="text-purple-500" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}