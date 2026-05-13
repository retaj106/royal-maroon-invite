import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Soft instrumental ambient music as fallback (royalty free CDN)
// User can swap with their own audio file if desired
const AUDIO_SRC = "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31ab6f1cb1.mp3";

export function MusicPlayer({ autoplay }: { autoplay: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoplay || !audioRef.current) return;
    const a = audioRef.current;
    a.volume = 0;
    a.play()
      .then(() => {
        setPlaying(true);
        // fade in
        let v = 0;
        const interval = setInterval(() => {
          v += 0.03;
          if (v >= 0.45) { v = 0.45; clearInterval(interval); }
          if (audioRef.current) audioRef.current.volume = v;
        }, 120);
      })
      .catch(() => setPlaying(false));
  }, [autoplay]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed top-4 left-4 z-40 w-12 h-12 rounded-full backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold hover:scale-105 transition-transform"
        style={{
          background: "oklch(0.24 0.10 18 / 0.55)",
          boxShadow: "0 4px 20px oklch(0.1 0.05 18 / 0.4)",
        }}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
      </motion.button>
    </>
  );
}
