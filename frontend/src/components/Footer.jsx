import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TikTokIcon, LinkedInIcon } from "./SocialIcons";
import socials from "../data/socials.json";
import navLinks from "../data/navigation.json";

const iconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
};


const services = [
  "Event Videography",
  "Food Photography",
  "Corporate Production",
  "Web Development",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-800 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">B</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Beion<span className="text-gradient">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium creative marketing agency crafting cinematic visuals,
              compelling brand stories, and powerful digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map((s) => {
                const Icon = iconMap[s.platform];
                return (
                  <motion.a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={`w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 ${s.color} transition-colors duration-200`}
                  >
                    {Icon && <Icon size={16} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group cursor-default">
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@beionmarketing.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  hello@beionmarketing.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={14} />
                  </div>
                  +92 300 123 4567
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} Beion Marketing. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with passion & precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
