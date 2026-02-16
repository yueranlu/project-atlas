const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-serif text-xl font-bold text-foreground">
          ATLAS<span className="text-primary">.</span>EVENT
        </h2>

        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Atlas. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors text-spaced">
            Instagram
          </a>
          <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors text-spaced">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
