import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onContinue: () => void;
}

export function CoverScreen({ onContinue }: Props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onContinue, 1200);
    }, 4500);
    return () => clearTimeout(t);
  }, [onContinue]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-burgundy-deep overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src="https://i.postimg.cc/3x9B6m5f/Whats-App-Image-2026-05-10-at-8-35-14-PM.jpg"
            alt="دعوة الزفاف"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeOut" }}
          />
          {/* vignette */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: "radial-gradient(ellipse at center, transparent 35%, oklch(0.12 0.06 18 / 0.7) 100%)" }} />
          {/* gold soft glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.25] }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle at 50% 60%, oklch(0.85 0.12 80 / 0.25), transparent 60%)" }}
          />

          <motion.div
            className="absolute inset-x-0 bottom-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1.5 }}
          >
            <button
              onClick={() => { setShow(false); setTimeout(onContinue, 900); }}
              className="font-arabic text-paper/90 text-sm tracking-[0.3em] hover:text-gold transition-colors"
            >
              ◆ اضغط للمتابعة ◆
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
