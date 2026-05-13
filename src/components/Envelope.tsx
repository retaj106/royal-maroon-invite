import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onOpen: () => void;
}

export function Envelope({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden"
         style={{ background: "radial-gradient(ellipse at center, oklch(0.28 0.10 18) 0%, oklch(0.16 0.06 18) 100%)" }}>
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.85 0.12 80 / 0.15), transparent 55%)" }} />

      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${(i * 53) % 100}%`,
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: "oklch(0.85 0.12 80 / 0.55)",
            boxShadow: "0 0 8px oklch(0.85 0.12 80 / 0.8)",
            animation: `float-particle ${10 + (i % 6)}s linear ${i * 0.6}s infinite`,
          }}
        />
      ))}

      <motion.div
        className="relative"
        initial={{ scale: 0.7, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ perspective: 1400 }}
      >
        {/* ornate frame caption */}
        <motion.div
          className="text-center mb-8 font-arabic-display"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="text-gold/80 text-xs tracking-[0.5em] mb-2">دعوة زفاف</p>
          <div className="flex items-center justify-center gap-3 text-gold/70">
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-gold to-transparent" />
            <span className="text-lg">✦</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>

        {/* envelope wrapper */}
        <div className="relative w-[340px] h-[230px] sm:w-[440px] sm:h-[300px]"
             style={{ transformStyle: "preserve-3d" }}>

          {/* envelope back */}
          <div className="absolute inset-0 rounded-md shadow-luxury"
               style={{
                 background: "linear-gradient(135deg, oklch(0.34 0.12 20) 0%, oklch(0.26 0.10 18) 100%)",
                 boxShadow: "inset 0 0 40px oklch(0.18 0.08 18), 0 30px 80px -20px oklch(0.1 0.05 18 / 0.7)",
               }}>
            {/* subtle texture */}
            <div className="absolute inset-0 opacity-30 rounded-md"
                 style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.45 0.13 22 / 0.4), transparent 60%)" }} />
          </div>

          {/* paper sliding out */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-[78%] h-[88%] bg-paper rounded-sm shadow-paper"
            style={{
              x: "-50%", y: "-50%",
              backgroundImage: "var(--texture-paper)",
            }}
            animate={opening ? { y: "-130%", scale: 1.02 } : { y: "-50%" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="h-full flex flex-col items-center justify-center font-arabic-display text-burgundy-deep px-4">
              <p className="text-[10px] tracking-[0.4em] text-burgundy/60 mb-3">يسرّنا دعوتكم</p>
              <div className="flex items-center gap-3 text-2xl">
                <span>قاسم</span>
                <span className="text-gold">&</span>
                <span>دانة</span>
              </div>
              <div className="mt-3 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          {/* envelope flap (top triangle) */}
          <motion.div
            className="absolute inset-x-0 top-0 origin-top"
            style={{
              height: "55%",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(180deg, oklch(0.38 0.13 20) 0%, oklch(0.30 0.11 18) 100%)",
              boxShadow: "inset 0 -10px 20px oklch(0.18 0.08 18 / 0.6)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            animate={opening ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* envelope front body (covers paper bottom half) */}
          <div
            className="absolute inset-x-0 bottom-0 rounded-b-md"
            style={{
              height: "62%",
              background: "linear-gradient(180deg, oklch(0.30 0.11 18) 0%, oklch(0.36 0.13 20) 100%)",
              clipPath: "polygon(0 25%, 50% 0%, 100% 25%, 100% 100%, 0 100%)",
              boxShadow: "inset 0 10px 20px oklch(0.18 0.08 18 / 0.5)",
            }}
          />

          {/* wax seal */}
          <motion.button
            onClick={handleOpen}
            disabled={opening}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group"
            initial={{ scale: 0, rotate: -45 }}
            animate={opening ? { scale: 0, opacity: 0, rotate: 90 } : { scale: 1, rotate: 0 }}
            transition={{ delay: opening ? 0 : 1.2, duration: 0.6, type: "spring", stiffness: 180 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <div
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center animate-glow-pulse"
              style={{
                background: "radial-gradient(circle at 35% 30%, oklch(0.48 0.16 22) 0%, oklch(0.28 0.12 18) 70%, oklch(0.20 0.09 18) 100%)",
                boxShadow: "0 8px 20px oklch(0.1 0.05 18 / 0.6), inset 0 -4px 8px oklch(0.15 0.07 18 / 0.7), inset 0 3px 6px oklch(0.55 0.18 24 / 0.4)",
              }}
            >
              {/* seal scallop ring */}
              <div className="absolute inset-1 rounded-full border border-gold/30" />
              {/* initials */}
              <div className="font-arabic-display flex items-baseline gap-1 text-gold-shimmer animate-shimmer text-2xl sm:text-3xl"
                   style={{
                     background: "linear-gradient(135deg, oklch(0.92 0.10 88) 0%, oklch(0.70 0.13 75) 50%, oklch(0.92 0.10 88) 100%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     textShadow: "0 1px 1px oklch(0.2 0.08 18 / 0.4)",
                     filter: "drop-shadow(0 1px 0 oklch(0.15 0.06 18 / 0.5))",
                   }}>
                <span>ق</span>
                <span className="text-xl opacity-70">&</span>
                <span>د</span>
              </div>
            </div>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-gold/80 text-xs tracking-[0.3em] font-arabic opacity-0 group-hover:opacity-100 transition-opacity">
              اضغط لفتح المظروف
            </span>
          </motion.button>
        </div>

        {/* hint */}
        <motion.p
          className="text-center mt-12 text-gold/60 font-arabic text-xs tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ delay: 2, duration: 1.2 }}
        >
          ◆ اضغط على الختم ◆
        </motion.p>
      </motion.div>
    </div>
  );
}
