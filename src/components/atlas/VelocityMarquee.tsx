import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const VelocityMarquee = () => {
  return (
    <section className="py-12 overflow-hidden border-y border-border">
      <VelocityScroll baseVelocity={3}>
        <span className="font-serif text-4xl md:text-6xl font-bold text-foreground/10 mx-4">
          Montreal builds different &nbsp;&bull;&nbsp; It's time the rest of the world knows it &nbsp;&bull;&nbsp;
        </span>
      </VelocityScroll>
    </section>
  );
};

export default VelocityMarquee;
