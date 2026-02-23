import { useState } from "react";
import { motion } from "framer-motion";
import PartnerModal from "./PartnerModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="partners" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-16">
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-mono text-xs px-6 py-3 rounded-full border-glow text-foreground hover:bg-secondary transition-colors text-spaced inline-block"
            >
                Become a Partner
              </button>
            </motion.div>
          </div>

        </div>
      </div>
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PartnersSection;
