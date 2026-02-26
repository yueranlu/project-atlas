import atlasLogo from "@/assets/atlas-logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={atlasLogo}
                alt="Atlas"
                className="w-8 h-8 object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(168, 85, 247, 0.6))" }}
              />
              <h2 className="font-serif text-xl font-bold text-foreground">
                PROJECT<span className="text-primary">.</span>ATLAS
              </h2>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              A McGill Ventures initiative connecting Canada's most capable young talent to major tech events.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-spaced text-foreground mb-4">
              Contact
            </h3>
            <a href="mailto:projectatlas.mvc@gmail.com" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors block mb-4">
              projectatlas.mvc@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs text-spaced text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/mcgillvc" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn — McGill Ventures
              </a>
              <a href="https://x.com/mcgillvc" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                X — @mcgillvc
              </a>
              <a href="https://www.instagram.com/mcgillvc/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                Instagram — @mcgillvc
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; 2026 McGill Ventures. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Project Atlas — May 24–30, 2026 — Toronto, ON
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
