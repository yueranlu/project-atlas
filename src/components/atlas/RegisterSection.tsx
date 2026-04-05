import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import atlasLogo from "@/assets/atlas-logo.png";

const RegisterSection = () => {
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
    <section id="register" className="py-24 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Join Us</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.95] mb-4">
            Register
          </h2>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl p-[1px]"
          style={{ boxShadow: "0 0 60px -10px rgba(78, 133, 191, 0.2)" }}
        >
          {/* Border gradient layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(137, 170, 204, 0.3), hsl(0 0% 12%) 70%)`,
            }}
          />

          {/* Inner card */}
          <div className="relative flex rounded-[23px] overflow-hidden bg-surface">
            {/* LEFT - info panel */}
            <div
              className="hidden lg:flex lg:w-[38%] shrink-0 flex-col justify-between p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, hsl(210 20% 8%) 0%, hsl(210 15% 5%) 50%, hsl(210 20% 6%) 100%)",
                borderRight: "1px solid hsl(0 0% 12%)",
              }}
            >
              <div
                className="pointer-events-none absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(78,133,191,0.15) 0%, transparent 70%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-[-60px] right-[-60px] w-[260px] h-[260px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(137,170,204,0.1) 0%, transparent 70%)" }}
              />

              {/* Logo as background */}
              <img
                src={atlasLogo}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{
                  width: "75%",
                  bottom: "10%",
                  right: "-15%",
                  opacity: 0.15,
                  filter: "drop-shadow(0 0 40px rgba(78, 133, 191, 0.4))",
                }}
              />

              {/* Top */}
              <div className="relative z-10">
                <div className="w-14 h-14 mb-8 flex items-center justify-center">
                  <img src={atlasLogo} alt="Atlas" className="w-full h-full object-contain" />
                </div>
                <p className="text-[10px] tracking-widest text-white/60 uppercase mb-3">
                  McGill Ventures &middot; 2026
                </p>
              </div>

              {/* Centre */}
              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <h2
                  className="font-display text-white leading-[0.9]"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
                >
                  Project<br />Atlas
                </h2>
                <p
                  className="font-display mt-4"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "hsl(270 40% 70%)" }}
                >
                  Save your spot.
                </p>
              </div>

              {/* Bottom */}
              <div className="relative z-10 space-y-3 border-t pt-6" style={{ borderColor: "hsl(0 0% 15%)" }}>
                {[
                  { label: "Dates", value: "May 24-30, 2026" },
                  { label: "Route", value: "Montreal to Toronto" },
                  { label: "Spots", value: "20 students" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-white/90">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - form */}
            <div className="flex-1 relative" style={{ background: "hsl(0 0% 5%)" }}>
              <iframe
                src="https://wygo.world/29tcrxw/form-embed"
                className="w-full block"
                style={{
                  height: "100%",
                  minHeight: "680px",
                  filter: "invert(1) hue-rotate(180deg)",
                }}
                title="Atlas Registration Form"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
