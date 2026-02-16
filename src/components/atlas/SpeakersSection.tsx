import { motion } from "framer-motion";

const speakers = [
  {
    name: "Speaker One",
    role: "Creative Director",
    bio: "An accomplished creative director with years of experience pushing boundaries in visual design and brand storytelling across multiple industries.",
  },
  {
    name: "Speaker Two",
    role: "Digital Artist",
    bio: "A pioneering digital artist known for blending technology and creativity, creating immersive experiences that challenge conventional art forms.",
  },
  {
    name: "Speaker Three",
    role: "UX Strategist",
    bio: "A user experience strategist dedicated to crafting intuitive digital products that bridge the gap between human needs and technological capabilities.",
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-spaced-wide text-foreground mb-20"
        >
          Our Speakers
        </motion.h2>

        <div className="space-y-0">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-secondary/30 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <span className="font-mono text-xs text-spaced text-primary mt-1 block">
                  {speaker.role}
                </span>
              </div>

              <div className="md:col-span-5">
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="md:col-span-3 flex justify-end">
                <div className="w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="font-mono text-xs text-muted-foreground">TBA</span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Last border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
