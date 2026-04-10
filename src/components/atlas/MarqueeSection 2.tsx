const MarqueeSection = () => {
  const text = "Montreal builds different \u00A0\u00A0\u2022\u00A0\u00A0 It's time the rest of the world knows it \u00A0\u00A0\u2022\u00A0\u00A0";
  const repeated = text.repeat(6);

  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-serif text-4xl md:text-6xl font-bold text-foreground/10">
          {repeated}
        </span>
        <span className="font-serif text-4xl md:text-6xl font-bold text-foreground/10">
          {repeated}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
