import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const ScheduleSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseX.set(x);
        mouseY.set(y);
      } else {
        mouseX.set(-400);
        mouseY.set(-400);
      }
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

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

        {/* Calendar embed with glowing border */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl p-[1px]"
          style={{ boxShadow: "0 0 60px -10px rgba(120, 40, 200, 0.4)" }}
        >
          {/* Mouse-tracking gradient border */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsl(270, 80%, 55%), hsl(270, 30%, 18%) 70%)`,
            }}
          />

          {/* Inner container */}
          <div
            className="relative rounded-[15px] overflow-hidden"
            style={{ background: "hsl(270, 20%, 5%)" }}
          >
            <iframe
              src="https://lu.ma/embed/calendar/cal-fsnoYpbQu1679OM/events"
              width="100%"
              height="650"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Project Atlas Schedule"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ScheduleSection;
