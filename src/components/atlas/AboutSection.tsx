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
                Canada, moving{" "}
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
                    src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(1).png"
                    alt="Students collaborating"
                    className="w-full h-32 md:h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(2).png"
                    alt="Toronto skyline at night"
                    className="w-full h-40 md:h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(3).png"
                    alt="Conference presentation"
                    className="w-full h-40 md:h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-glow">
                  <img
                    src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image.png"
                    alt="Toronto CN Tower"
                    className="w-full h-32 md:h-48 object-cover"
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
            Join Us
          </a>
          <p className="font-mono text-xs text-muted-foreground mt-4">
            Limited to 100 spots
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
