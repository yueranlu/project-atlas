import { motion } from "framer-motion";

const ScheduleSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Upcoming</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.95] mb-3">
            Calendar
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            Upcoming firm visits, socials, and key dates — don't miss a thing.
          </p>
        </motion.div>

        {/* Calendar embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl border border-stroke overflow-hidden bg-surface/50"
        >
          <iframe
            src="https://lu.ma/embed/calendar/cal-fsnoYpbQu1679OM/events?lt=dark"
            width="100%"
            style={{ border: "none", display: "block", minHeight: "500px" }}
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
