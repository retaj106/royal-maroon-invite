import { motion } from "framer-motion";
import { useState } from "react";

const ENVELOPE_IMG = "https://i.ibb.co/R4bWXp9b/Whats-App-Image-2026-05-13-at-5-15-08-AM.jpg";
// Seal position within the original image (675x1200)
const SEAL_X = 0.5;   // 50% from left
const SEAL_Y = 0.523; // ~52% from top
const SEAL_W = 0.43;  // 43% of image width

interface Props {
  onOpen: () => void;
}

export function Envelope({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1700);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-burgundy-damask"
    >
      {/* ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.85 0.12 80 / 0.18), transparent 60%)",
        }}
      />

      {/* Envelope frame — preserves the image's portrait aspect ratio (675x1200) */}
      <motion.div
        className="relative h-[100vh] max-h-[100dvh]"
        style={{ aspectRatio: "675 / 1200", perspective: 1600 }}
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {/* LEFT half of envelope */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `url(${ENVELOPE_IMG})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            transformOrigin: "left center",
            filter: "drop-shadow(0 30px 60px oklch(0.1 0.05 18 / 0.6))",
          }}
          animate={
            opening
              ? { x: "-55%", rotateY: -28, opacity: 0.9 }
              : { x: 0, rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
        />
        {/* RIGHT half of envelope */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `url(${ENVELOPE_IMG})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
            transformOrigin: "right center",
            filter: "drop-shadow(0 30px 60px oklch(0.1 0.05 18 / 0.6))",
          }}
          animate={
            opening
              ? { x: "55%", rotateY: 28, opacity: 0.9 }
              : { x: 0, rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* Wax seal — covers the original rose seal exactly */}
        <motion.button
          onClick={handleOpen}
          disabled={opening}
          aria-label="افتح المظروف"
          className="absolute group focus:outline-none"
          style={{
            left: `${SEAL_X * 100}%`,
            top: `${SEAL_Y * 100}%`,
            width: `${SEAL_W * 100}%`,
            aspectRatio: "1 / 1",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            opening
              ? { scale: 0.4, opacity: 0, rotate: 25 }
              : { scale: 1, opacity: 1, rotate: 0 }
          }
          transition={{ duration: 0.7, ease: "easeInOut" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Wax body — scalloped via radial mask */}
          <div
            className="absolute inset-0 rounded-full animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, oklch(0.50 0.18 24) 0%, oklch(0.32 0.14 20) 55%, oklch(0.20 0.10 18) 100%)",
              boxShadow:
                "0 14px 30px oklch(0.1 0.05 18 / 0.55), inset 0 -8px 14px oklch(0.14 0.07 18 / 0.85), inset 0 4px 10px oklch(0.62 0.20 26 / 0.5)",
              clipPath:
                "polygon(50% 0%, 61% 8%, 71% 4%, 78% 14%, 90% 16%, 92% 28%, 100% 36%, 96% 47%, 100% 60%, 92% 70%, 90% 82%, 78% 84%, 71% 94%, 61% 90%, 50% 100%, 39% 90%, 29% 94%, 22% 84%, 10% 82%, 8% 70%, 0% 60%, 4% 47%, 0% 36%, 8% 28%, 10% 16%, 22% 14%, 29% 4%, 39% 8%)",
            }}
          />
          {/* Inner ornate rings */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "12%",
              border: "1px solid oklch(0.85 0.12 80 / 0.55)",
              boxShadow:
                "inset 0 0 8px oklch(0.85 0.12 80 / 0.25), inset 0 0 0 4px oklch(0.18 0.08 18 / 0.35)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: "20%",
              border: "1px dashed oklch(0.85 0.12 80 / 0.35)",
            }}
          />

          {/* Arabic calligraphy "ق & د" — gold embossed */}
          <div
            className="absolute inset-0 flex items-center justify-center font-arabic-display"
            style={{
              textShadow:
                "0 1px 0 oklch(0.95 0.10 88 / 0.6), 0 -1px 1px oklch(0.15 0.06 18 / 0.7), 0 2px 3px oklch(0.10 0.05 18 / 0.6)",
            }}
          >
            <span
              className="flex items-baseline gap-[0.08em] animate-shimmer"
              style={{
                fontSize: "min(13vh, 4.6rem)",
                lineHeight: 1,
                background:
                  "linear-gradient(135deg, oklch(0.96 0.10 88) 0%, oklch(0.78 0.14 78) 45%, oklch(0.96 0.10 88) 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                filter:
                  "drop-shadow(0 1px 0 oklch(0.18 0.08 18 / 0.55)) drop-shadow(0 0 6px oklch(0.85 0.12 80 / 0.35))",
              }}
            >
              <span>ق</span>
              <span style={{ fontSize: "0.55em", opacity: 0.85 }}>&amp;</span>
              <span>د</span>
            </span>
          </div>

          {/* hover hint */}
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-gold/85 text-[11px] tracking-[0.4em] font-arabic opacity-0 group-hover:opacity-100 transition-opacity">
            اضغط لفتح المظروف
          </span>
        </motion.button>

        {/* subtle hint at bottom */}
        <motion.div
          className="absolute inset-x-0 bottom-6 text-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 0.85 }}
          transition={{ delay: 1.6, duration: 1.2 }}
        >
          <p className="font-arabic text-[10px] tracking-[0.5em] text-burgundy-deep/70">
            ◆ اضغط على الختم ◆
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
