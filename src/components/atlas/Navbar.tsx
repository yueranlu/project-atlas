import { motion } from "framer-motion";

const navItems = ["About", "Speakers", "Gallery", "Partners"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-spaced text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <h1 className="font-serif text-xl font-bold tracking-wider text-foreground">
          ATLAS<span className="text-primary">.</span>EVENT
        </h1>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="font-mono text-xs text-spaced text-muted-foreground">COMING SOON</span>
            <span className="font-mono text-xs text-muted-foreground">LOCATION TBA</span>
          </div>
          <a
            href="#tickets"
            className="font-mono text-xs px-5 py-2.5 rounded-full border border-primary text-primary-foreground bg-primary hover:bg-primary/80 transition-colors text-spaced"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
