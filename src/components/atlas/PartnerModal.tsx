import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PartnerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border rounded-2xl p-8 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Join Atlas
              </h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-muted-foreground mb-8">
              Are you a corporate organization or a startup looking to partner with us?
            </p>

            <div className="space-y-4">
              {/* VC Firm Button */}
              <a
                href="https://drive.google.com/file/d/15Yl23olQ0cfyXy6yyalnA6oL-Q1gVqiN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full font-mono text-xs px-6 py-4 rounded-lg border-glow text-foreground hover:bg-primary/10 transition-colors text-center text-spaced"
              >
                Corporate Organization
              </a>

              {/* Startup Button */}
              <a
                href="https://drive.google.com/file/d/1Uq2EIbvz46hJZ6uMEf3B9EeIaLC4FxNa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full font-mono text-xs px-6 py-4 rounded-lg border-glow text-foreground hover:bg-primary/10 transition-colors text-center text-spaced"
              >
                Startup
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PartnerModal;