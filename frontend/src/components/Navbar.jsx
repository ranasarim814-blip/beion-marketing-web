import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import navLinks from "../data/navigation.json";
import logo from "../assets/logo_2.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // FIXED MOBILE SCROLL FUNCTION
  const handleNavClick = (href) => {

    // close mobile menu
    setMobileOpen(false);

    // if coming from another page
    if (!isHome && href.startsWith("#")) {
      window.location.href = "/" + href;
      return;
    }

    // smooth scroll
    if (href.startsWith("#")) {

      // wait for mobile menu animation
      setTimeout(() => {

        const el = document.querySelector(href);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

      }, 300);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-purple-100 shadow-lg shadow-purple-100/20"
            : "bg-white/70 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
           <img src={logo} className="w-48 h-48 object-contain" alt="logo" />

            
            
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">

            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    px-4 py-2 text-sm font-medium
                    text-gray-600
                    hover:text-purple-700
                    transition-all duration-200
                    rounded-xl
                    hover:bg-gradient-to-r
                    hover:from-purple-50
                    hover:to-blue-50
                    hover:shadow-md
                    hover:-translate-y-0.5
                  "
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={link.href}
                  className="
                    px-4 py-2 text-sm font-medium
                    text-gray-600
                    hover:text-purple-700
                    transition-all duration-200
                    rounded-xl
                    hover:bg-gradient-to-r
                    hover:from-purple-50
                    hover:to-blue-50
                    hover:shadow-md
                    hover:-translate-y-0.5
                  "
                >
                  {link.label}
                </Link>
              )
            )}

          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-3">

            {/* CTA BUTTON */}
            <button
              onClick={() => handleNavClick("#contact")}
              className="
                hidden md:flex items-center gap-2
                px-5 py-2.5 rounded-full
                bg-gradient-to-r from-brand-600 to-purple-600
                text-white text-sm font-medium
                shadow-lg shadow-purple-300/30

                hover:scale-105
                hover:-translate-y-0.5
                hover:shadow-2xl
                hover:shadow-purple-300/40
                hover:brightness-110

                active:scale-95

                transition-all duration-300
              "
            >
              Get Started
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="
                md:hidden p-2
                text-gray-600
                hover:text-purple-700
                hover:bg-purple-50
                rounded-xl
                transition-all duration-200
              "
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              bg-white/95
              backdrop-blur-xl
              border-t border-purple-100
              shadow-xl shadow-purple-100/20
            "
          >
            <div className="px-4 py-4 flex flex-col gap-2">

              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className="
                      text-left px-4 py-3 text-sm font-medium
                      text-gray-600
                      hover:text-purple-700
                      hover:bg-gradient-to-r
                      hover:from-purple-50
                      hover:to-blue-50
                      rounded-xl
                      transition-all duration-200
                    "
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.id}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      px-4 py-3 text-sm font-medium
                      text-gray-600
                      hover:text-purple-700
                      hover:bg-gradient-to-r
                      hover:from-purple-50
                      hover:to-blue-50
                      rounded-xl
                      transition-all duration-200
                    "
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* MOBILE CTA */}
              <button
                onClick={() => handleNavClick("#contact")}
                className="
                  mt-3 px-5 py-3 rounded-2xl
                  bg-gradient-to-r from-brand-600 to-purple-600
                  text-white text-sm font-medium

                  shadow-lg shadow-purple-300/30

                  hover:scale-[1.02]
                  hover:-translate-y-0.5
                  hover:shadow-2xl
                  hover:shadow-purple-300/40
                  hover:brightness-110

                  active:scale-95

                  transition-all duration-300
                "
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}