import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";

const ScheduleSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <DotPattern className="text-purple-400/8" width={20} height={20} cr={0.6} />
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold text-spaced-wide text-foreground mb-4">
            Calendar
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg">
            All events, firm visits, and socials — in one place.
          </p>
        </motion.div>

        {/* Calendar embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-border overflow-hidden bg-background/50"
        >
          <iframe
            src="https://lu.ma/embed/calendar/cal-fsnoYpbQu1679OM/events?lt=dark"
            width="100%"
            style={{ border: "none", display: "block", minHeight: "800px" }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Project Atlas Schedule"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ScheduleSection;
