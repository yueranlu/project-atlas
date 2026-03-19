import { motion } from "framer-motion";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative py-32 px-6 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px" style={{ background: "rgba(168,85,247,0.5)" }} />
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary/50 uppercase">
              What's happening
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-[0.95] mb-4"
          >
            Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-mono text-sm text-muted-foreground max-w-xl leading-loose"
          >
            All events, firm visits, and socials — in one place.
          </motion.p>
        </div>

        {/* Calendar embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border-glow"
          style={{
            background: "rgba(12,6,28,0.6)",
            boxShadow: "0 0 60px rgba(124,58,237,0.08)",
          }}
        >
          <iframe
            src="https://lu.ma/embed/calendar/cal-fsnoYpbQu1679OM/events"
            width="100%"
            height="600"
            style={{
              border: "none",
              borderRadius: "16px",
              display: "block",
            }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ScheduleSection;
