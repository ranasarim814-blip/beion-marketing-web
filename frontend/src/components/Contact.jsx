import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Phone,
 Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const serviceOptions = [
  "Event Videography",
  "Food Photography & Videography",
  "Corporate Video Production",
  "Web Development",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Valid email is required";
    }

    if (!form.service) e.service = "Please select a service";

    if (!form.message.trim()) e.message = "Message is required";

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const text = encodeURIComponent(
      `*New Inquiry — Beion Marketing*\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        `*Email:* ${form.email}\n` +
        `*Service:* ${form.service}\n\n` +
        `*Message:*\n${form.message}`
    );

    window.open(`https://wa.me/923157217417?text=${text}`, "_blank");

    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-white border-2 ${
      errors[field]
        ? "border-red-400"
        : "border-purple-100 hover:border-purple-300"
    }
    rounded-2xl px-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm
    focus:outline-none focus:border-purple-500
    focus:ring-4 focus:ring-purple-100
    transition-all duration-300`;

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+923157217417",
      href: "https://wa.me/923157217417",
      border: "hover:border-purple-400",
      glow: "hover:shadow-purple-200/60",
      iconBg: "from-purple-500 to-indigo-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@beionmarketing.com",
      href: "mailto:hello@beionmarketing.com",
      border: "hover:border-blue-400",
      glow: "hover:shadow-blue-200/60",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
      border: "hover:border-pink-400",
      glow: "hover:shadow-pink-200/60",
      iconBg: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              inline-block px-5 py-2 rounded-full
              bg-gradient-to-r from-purple-100 to-blue-100
              border border-purple-200
              text-purple-700 text-xs font-semibold uppercase tracking-widest mb-5
              shadow-sm
            "
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto text-lg"
          >
            Ready to elevate your brand? Reach out and we'll respond instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >

            {contactInfo.map((info) => (
              <div
                key={info.label}
                className={`
                  relative overflow-hidden
                  rounded-3xl p-5
                  border-2 border-gray-100
                  bg-white
                  shadow-md
                  hover:-translate-y-2
                  hover:shadow-2xl
                  ${info.border}
                  ${info.glow}
                  transition-all duration-300
                  group
                `}
              >

                {/* Animated Top Border */}
                <div className={`
                  absolute top-0 left-0 h-1 w-0
                  bg-gradient-to-r ${info.iconBg}
                  group-hover:w-full
                  transition-all duration-500
                `} />

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      bg-gradient-to-br ${info.iconBg}
                      flex items-center justify-center
                      shadow-lg
                      group-hover:scale-110
                      group-hover:rotate-3
                      transition-all duration-300
                    `}
                  >
                    <info.icon size={20} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wide">
                      {info.label}
                    </p>

                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-gray-800 font-semibold text-sm
                          hover:text-purple-600
                          transition-colors
                        "
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923157217417"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative overflow-hidden
                flex items-center gap-4
                rounded-3xl p-5
                border-2 border-green-200
                bg-gradient-to-r from-green-50 to-emerald-50
                hover:from-green-100 hover:to-emerald-100
                hover:-translate-y-2
                hover:shadow-2xl hover:shadow-green-200/50
                transition-all duration-300
                group
              "
            >

              <div className="
                absolute top-0 left-0 h-1 w-0
                bg-gradient-to-r from-green-500 to-emerald-500
                group-hover:w-full
                transition-all duration-500
              " />

              <div className="
                w-14 h-14 rounded-2xl
                bg-gradient-to-br from-green-500 to-emerald-500
                flex items-center justify-center
                shadow-lg
                group-hover:scale-110
                group-hover:rotate-3
                transition-all duration-300
              ">
                <MessageCircle size={22} className="text-white" />
              </div>

              <div>
                <p className="text-gray-900 font-semibold text-sm">
                  Chat on WhatsApp
                </p>

                <p className="text-gray-500 text-xs">
                  Typically replies in minutes
                </p>
              </div>
            </a>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              lg:col-span-3
              relative overflow-hidden
              rounded-[32px]
              border-2 border-purple-100
              bg-white
              p-8 sm:p-10
              shadow-xl
              hover:shadow-purple-100/60
              transition-all duration-500
            "
          >

            {/* Gradient Border Glow */}
            <div className="
              absolute inset-0
              bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5
              pointer-events-none
            " />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">

                <CheckCircle
                  size={70}
                  className="text-green-500 mb-5"
                />

                <h3 className="font-display text-3xl font-bold text-gray-900 mb-3">
                  Message Sent!
                </h3>

                <p className="text-gray-500 mb-6">
                  You're being redirected to WhatsApp.
                </p>

                <button
  onClick={() => setSubmitted(false)}
  className="
    mt-3 px-6 py-3 rounded-2xl
    bg-gradient-to-r from-brand-600 via-purple-600 to-indigo-600
    text-white text-sm font-semibold

    shadow-lg shadow-purple-300/30

    hover:scale-105
    hover:-translate-y-1
    hover:brightness-110
    hover:shadow-2xl
    hover:shadow-purple-400/50

    active:scale-95

    transition-all duration-300
  "
>
  Send Another Message
</button>

              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass("name")}
                    />

                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 000 0000"
                      className={inputClass("phone")}
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>

                <div>
                  <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass("email")}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                    Service Type
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass("service")} cursor-pointer`}
                  >
                    <option value="">Select a service...</option>

                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-500 text-xs mb-2 uppercase tracking-wide">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`${inputClass("message")} resize-none`}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full py-4 rounded-2xl
                    bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500
                    text-white font-semibold
                    flex items-center justify-center gap-2
                    hover:-translate-y-1
                    hover:shadow-2xl hover:shadow-purple-300/50
                    transition-all duration-300
                  "
                >
                  <Send size={18} />
                  Send via WhatsApp
                </motion.button>

              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}