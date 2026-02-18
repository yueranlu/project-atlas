import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";

const WhatIsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-card overflow-hidden">
      <DotPattern className="text-purple-400/8" width={20} height={20} cr={0.6} />
      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-2">
            About
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl font-bold text-gradient-purple mb-8">
            McGill Ventures
          </h3>

          <p className="font-mono text-sm leading-loose text-muted-foreground">
            A student-run initiative advancing access to Venture Capital through
            networking events, panel discussions, and an exclusive analyst program.
            75+ team members. Thousands of attendees.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: "McGill Ventures Fund", desc: "Investing in McGill startups" },
              { label: "Health Tech Lab", desc: "Innovation in healthcare" },
              { label: "Venture Advisory", desc: "Guidance for founders" },
              { label: "Analyst Program", desc: "VC mentorship from Canada's best" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 rounded-xl border-glow bg-background/50"
              >
                <p className="font-mono text-xs font-bold text-foreground">{item.label}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border-glow">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
              alt="Tech conference networking event"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono text-xs text-spaced text-primary">Events like</span>
              <p className="font-serif text-xl font-bold text-foreground">Startupfest · North Star · Scarlet Pitch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
