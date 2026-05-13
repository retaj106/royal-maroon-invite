import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "3fhn-y_TWFA";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function MusicPlayer({ autoplay }: { autoplay: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Load YT IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setReady(true);
      return;
    }
    const existing = document.getElementById("yt-iframe-api");
    if (!existing) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      setReady(true);
    };
  }, []);

  // Create player when ready & autoplay flips on
  useEffect(() => {
    if (!ready || !autoplay || playerRef.current || !containerRef.current) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: { autoplay: 1, controls: 0, loop: 1, playlist: VIDEO_ID, playsinline: 1, modestbranding: 1 },
      events: {
        onReady: (e: any) => {
          try {
            e.target.setVolume(0);
            e.target.playVideo();
            setPlaying(true);
            let v = 0;
            const id = setInterval(() => {
              v += 3;
              if (v >= 35) { v = 35; clearInterval(id); }
              try { e.target.setVolume(v); } catch {}
            }, 180);
          } catch {}
        },
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.ENDED) {
            try { e.target.playVideo(); } catch {}
          }
          if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
          if (e.data === window.YT.PlayerState.PAUSED) setPlaying(false);
        },
      },
    });
  }, [ready, autoplay]);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      if (playing) { p.pauseVideo(); setPlaying(false); }
      else { p.playVideo(); setPlaying(true); }
    } catch {}
  };

  return (
    <>
      {/* hidden YT player */}
      <div
        style={{ position: "fixed", width: 1, height: 1, opacity: 0, pointerEvents: "none", left: -9999, top: -9999 }}
        aria-hidden
      >
        <div ref={containerRef} />
      </div>

      {autoplay && (
        <motion.button
          onClick={toggle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
      )}
    </>
  );
}
