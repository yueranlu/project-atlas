import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Connect", "Build", "Launch"];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const duration = 2700;
    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setCount(progress);

      if (progress < 100) {
        requestAnimationFrame(step);
      } else if (!completedRef.current) {
        completedRef.current = true;
        setTimeout(() => onCompleteRef.current(), 400);
      }
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col justify-between"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xs text-muted-foreground uppercase tracking-[0.3em] p-8"
      >
        Project Atlas
      </motion.p>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="p-8">
        <div className="flex justify-end mb-4">
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground tabular-nums">
            {String(count).padStart(3, "0")}
          </span>
        </div>
        <div className="h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            className="h-full accent-gradient rounded-full transition-transform duration-100 origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
