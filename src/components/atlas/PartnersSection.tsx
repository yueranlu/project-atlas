import { motion } from "framer-motion";

const partners = ["Partner One", "Partner Two", "Partner Three"];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-spaced text-muted-foreground mb-4"
        >
          Partners
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl md:text-3xl text-muted-foreground max-w-3xl mb-16 leading-relaxed"
        >
          Proudly supported by our creative partners from across the globe
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="h-32 rounded-2xl border-glow bg-card flex items-center justify-center"
            >
              <span className="font-mono text-sm text-muted-foreground text-spaced">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="font-mono text-xs px-6 py-3 rounded-full border-glow text-foreground hover:bg-secondary transition-colors text-spaced inline-block"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
