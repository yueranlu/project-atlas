import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import atlasLogo from "@/assets/atlas-logo.png";

const navItems = ["About", "Schedule", "Partners", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 100);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div
          className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
            scrolled ? "shadow-md shadow-black/10" : ""
          }`}
        >
          {/* Logo circle */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 group"
          >
            {/* Gradient ring */}
            <div
              className="absolute inset-0 rounded-full p-[1.5px] group-hover:[background:linear-gradient(270deg,#A989CC_0%,#7E4EBF_100%)]"
              style={{ background: "linear-gradient(90deg, #A989CC 0%, #7E4EBF 100%)" }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img src={atlasLogo} alt="Atlas" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </motion.a>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Nav links */}
          <div className="hidden sm:flex items-center">
            {["Home", ...navItems].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                  active === item
                    ? "text-foreground bg-stroke/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-stroke/50"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Register CTA */}
          <a
            href="#register"
            className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-foreground group overflow-visible hidden sm:block"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md">
              Register <span className="text-xs">&#8599;</span>
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Donate CTA */}
          <a
            href="https://wygo.world/projectatlas?donation_form=open"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-foreground group overflow-visible hidden sm:block"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md">
              Donate <span className="text-xs">&#8599;</span>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden ml-1 w-9 h-9 flex items-center justify-center rounded-full text-foreground hover:bg-stroke/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2">
              {["Home", ...navItems].map((item, i) => (
                <motion.a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => { setActive(item); setMobileOpen(false); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`font-display text-4xl py-2 transition-colors ${
                    active === item ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-col items-center gap-3 mt-10"
            >
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="group relative rounded-full text-sm px-7 py-3.5 bg-foreground text-background transition-all"
              >
                <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                Register Now
              </a>
              <a
                href="https://wygo.world/projectatlas?donation_form=open"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Donate &#8599;
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
