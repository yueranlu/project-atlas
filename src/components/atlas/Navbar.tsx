import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import atlasLogo from "@/assets/atlas-logo.png";

const navItems = ["About", "Schedule", "Partners", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 100);
  });

  return (
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
            className="absolute inset-0 rounded-full p-[1.5px] group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]"
            style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
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
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-foreground group overflow-visible"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md">
            Register <span className="text-xs">&#8599;</span>
          </span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
