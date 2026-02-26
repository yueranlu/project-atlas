import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import atlasLogo from "@/assets/atlas-logo.png";

const navItems = ["About", "Schedule", "Partners", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8, 4, 18, 0.85)" : "rgba(8, 4, 18, 0.3)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(168, 85, 247, 0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left — logo + name */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.img
            src={atlasLogo}
            alt="Atlas"
            className="w-8 h-8 object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))" }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.2 }}
          />
          <span className="font-serif text-sm font-bold text-white/85 tracking-wide group-hover:text-white transition-colors">
            Project Atlas
          </span>
        </a>

        {/* Centre — nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-widest text-white/40 hover:text-white/80 transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right — register CTA */}
        <a
          href="#register"
          className="font-mono text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-200 hover:bg-purple-500/10"
          style={{
            borderColor: "rgba(168, 85, 247, 0.45)",
            color: "rgba(168, 85, 247, 0.9)",
          }}
        >
          Register
        </a>

      </div>
    </motion.nav>
  );
};

export default Navbar;
