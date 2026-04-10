import { motion } from "framer-motion";

interface BackgroundOrbProps {
  className?: string;
}

const BackgroundOrb = ({ className = "" }: BackgroundOrbProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
    />
  );
};

export default BackgroundOrb;
