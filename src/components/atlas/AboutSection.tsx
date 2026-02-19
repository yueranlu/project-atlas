import { motion } from "framer-motion";
import BackgroundOrb from "./BackgroundOrb";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <BackgroundOrb className="w-[500px] h-[500px] bg-purple-600/8 -top-40 -right-40" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                The best{" "}
                <span className="text-gradient-purple">builders</span> in
                Montreal, moving{" "}
                <span className="text-gradient-purple">together</span>.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Together, with the right people and the right momentum, you move
                faster, go further, reach peaks that seemed out of range. Toronto
                this year. New York, SF, London next.
              </p>

              <a
                  href="#schedule"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mt-6 inline-block"
                >
                  ↓ View Schedule
                </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
                    alt="Students collaborating"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80"
                    alt="Toronto skyline at night"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80"
                    alt="Conference presentation"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80"
                    alt="Toronto CN Tower"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prominent Sign Up CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="https://wygo.world/29tcrxw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-full bg-primary text-primary-foreground font-mono text-sm text-spaced hover:bg-primary/80 transition-colors glow-purple"
          >
            Sign Up Now
          </a>
          <p className="font-mono text-xs text-muted-foreground mt-4">
            Free entry · Limited to 150 spots
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
