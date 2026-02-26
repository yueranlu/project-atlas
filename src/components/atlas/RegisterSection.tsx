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
    <section id="register" className="py-24 px-6">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-2xl p-[1px]"
          style={{ boxShadow: "0 0 60px -10px rgba(120, 40, 200, 0.4)" }}
        >
          {/* Border gradient layer — same pattern as MagicCard */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsl(270, 80%, 55%), hsl(270, 30%, 18%) 70%)`,
            }}
          />

          {/* Inner card that covers the gradient, leaving 1px border showing */}
          <div
            className="relative flex rounded-[15px] overflow-hidden"
            style={{ minHeight: "800px", background: "hsl(270, 20%, 5%)" }}
          >

          {/* LEFT — sticky info panel */}
          <div
            className="hidden lg:flex lg:w-[38%] shrink-0 flex-col justify-between p-10 relative overflow-hidden"
            style={{
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              background: "linear-gradient(160deg, hsl(270, 60%, 12%) 0%, hsl(280, 40%, 6%) 50%, hsl(250, 50%, 8%) 100%)",
              borderRight: "1px solid hsl(270, 40%, 18%)",
            }}
          >
            <div className="pointer-events-none absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(120,40,220,0.4) 0%, transparent 70%)" }} />
            <div className="pointer-events-none absolute bottom-[-60px] right-[-60px] w-[260px] h-[260px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(140,40,180,0.3) 0%, transparent 70%)" }} />

            {/* Logo as background element */}
            <img
              src={atlasLogo}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                width: "75%",
                bottom: "10%",
                right: "-15%",
                opacity: 0.38,
                filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))",
              }}
            />

            {/* Top */}
            <div className="relative z-10">
              <div className="w-14 h-14 mb-8 flex items-center justify-center">
                <img src={atlasLogo} alt="Atlas" className="w-full h-full object-contain" />
              </div>
              <p className="font-mono text-[10px] tracking-widest text-white/60 uppercase mb-3">
                McGill Ventures · 2026
              </p>
            </div>

            {/* Centre */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <h2
                className="font-serif font-bold text-white leading-[0.9]"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
              >
                Project<br />Atlas
              </h2>
              <p
                className="font-serif italic mt-4"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "hsl(270, 60%, 75%)" }}
              >
                Save your spot.
              </p>
            </div>

            {/* Bottom */}
            <div className="relative z-10 space-y-3 border-t pt-6" style={{ borderColor: "hsl(270, 30%, 22%)" }}>
              {[
                { label: "Dates", value: "May 24–30, 2026"   },
                { label: "Route", value: "Montreal → Toronto" },
                { label: "Spots", value: "100 students"       },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "hsl(270, 40%, 60%)" }}>
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] text-white/90">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form with invert filter so dark text becomes light on dark bg */}
          <div className="flex-1 relative" style={{ background: "hsl(270, 15%, 4%)" }}>
            <iframe
              src="https://wygo.world/projectatlas/form-embed"
              className="w-full block"
              style={{
                height: "100%",
                minHeight: "960px",
                filter: "invert(1) hue-rotate(180deg)",
              }}
              frameBorder="0"
              title="Atlas Registration Form"
            />
          </div>

          </div>{/* end inner card */}
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
