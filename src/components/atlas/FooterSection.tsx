const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">
              PROJECT<span className="text-primary">.</span>ATLAS
            </h2>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              A McGill Ventures initiative connecting Montreal's most capable
              student talent to the Toronto tech ecosystem.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-spaced text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-mono text-xs text-foreground">Clara Caden</p>
                <p className="font-mono text-xs text-muted-foreground">Project Lead</p>
              </div>
              <div>
                <p className="font-mono text-xs text-foreground">Naureen Ahmed</p>
                <p className="font-mono text-xs text-muted-foreground">Project Lead</p>
              </div>
              <div>
                <p className="font-mono text-xs text-foreground">Donald Jackson McIntosh</p>
                <p className="font-mono text-xs text-muted-foreground">Project Lead</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-spaced text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn — McGill Ventures
              </a>
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
                X — @mcgillvc
              </a>
              <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
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
