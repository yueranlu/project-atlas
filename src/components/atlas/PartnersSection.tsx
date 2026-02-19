import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud";

// Using Simple Icons CDN (verified working with CORS)
const partnerLogos = [
  "https://cdn.simpleicons.org/anthropic/a78bfa",
  "https://cdn.simpleicons.org/google/a78bfa",
  "https://cdn.simpleicons.org/perplexity/a78bfa",
  "https://cdn.simpleicons.org/github/a78bfa",
  "https://cdn.simpleicons.org/framework/a78bfa",
  "https://cdn.simpleicons.org/stripe/a78bfa",
  "https://cdn.simpleicons.org/shopify/a78bfa",
  "https://cdn.simpleicons.org/figma/a78bfa",
  "https://cdn.simpleicons.org/discord/a78bfa",
  "https://cdn.simpleicons.org/meta/a78bfa",
  "https://cdn.simpleicons.org/apple/a78bfa",
  "https://cdn.simpleicons.org/nvidia/a78bfa",
  "https://cdn.simpleicons.org/youtube/a78bfa",
  "https://cdn.simpleicons.org/spotify/a78bfa",
  "https://cdn.simpleicons.org/uber/a78bfa",
  "https://cdn.simpleicons.org/notion/a78bfa",
  "https://cdn.simpleicons.org/vercel/a78bfa",
  "https://cdn.simpleicons.org/googlecloud/a78bfa",
  "https://cdn.simpleicons.org/airbnb/a78bfa",
  "https://cdn.simpleicons.org/python/a78bfa",
];

const partnerNames = [
  "Anthropic",
  "Google",
  "Amazon",
  "Perplexity",
  "Inovia Capital",
  "National Bank",
  "DormRoomFund",
  "White Star Capital",
  "Antler",
  "Lightspeed",
  "Investissement Qu\u00e9bec",
  "Amplitude",
  "Boreal Ventures",
  "Luge Capital",
  "Brightspark",
  "Intact",
  "RBC",
  "Framework",
  "McKinsey & Company",
  "NationGraph",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-spaced text-muted-foreground mb-4"
            >
              Our Partners
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl md:text-3xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Previously partnered with leading firms and organizations across
              Canada's innovation ecosystem
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {partnerNames.map((name) => (
                <span
                  key={name}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border-glow text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="font-mono text-xs px-6 py-3 rounded-full border-glow text-foreground hover:bg-secondary transition-colors text-spaced inline-block"
              >
                Become a Partner
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <IconCloud images={partnerLogos} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
