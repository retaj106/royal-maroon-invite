import { motion } from "framer-motion";
import { useState } from "react";

// Decorative white tulip bouquet corner — luxury wedding watercolor style
function TulipCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  const uid = Math.random().toString(36).slice(2, 7);
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Beige / ivory / champagne tulip petals */}
        <radialGradient id={`petal-${uid}`} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="oklch(0.97 0.012 80)" />
          <stop offset="50%" stopColor="oklch(0.91 0.025 78)" />
          <stop offset="100%" stopColor="oklch(0.80 0.045 75)" />
        </radialGradient>
        <radialGradient id={`petalShade-${uid}`} cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="oklch(0.86 0.035 75)" />
          <stop offset="100%" stopColor="oklch(0.70 0.055 70)" />
        </radialGradient>
        {/* Muted olive / sage leaves */}
        <linearGradient id={`leaf-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.045 125 / 0.85)" />
          <stop offset="100%" stopColor="oklch(0.42 0.05 130 / 0.9)" />
        </linearGradient>
        <linearGradient id={`stem-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.045 125)" />
          <stop offset="100%" stopColor="oklch(0.40 0.05 130)" />
        </linearGradient>
      </defs>

      {/* soft champagne watercolor wash backdrop */}
      <ellipse cx="80" cy="100" rx="95" ry="80" fill="oklch(0.92 0.03 78 / 0.35)" />

      {/* long curved leaves */}
      <path d="M25 215 Q35 140 95 80 Q70 150 40 215 Z" fill={`url(#leaf-${uid})`} opacity="0.8"/>
      <path d="M5 195 Q45 110 130 75 Q75 145 18 210 Z" fill={`url(#leaf-${uid})`} opacity="0.55"/>
      <path d="M55 220 Q75 160 140 130 Q100 180 60 220 Z" fill={`url(#leaf-${uid})`} opacity="0.6"/>

      {/* stems */}
      <path d="M70 180 Q72 130 65 85" stroke={`url(#stem-${uid})`} strokeWidth="2" fill="none"/>
      <path d="M125 175 Q130 120 135 70" stroke={`url(#stem-${uid})`} strokeWidth="2" fill="none"/>
      <path d="M95 200 Q98 150 100 110" stroke={`url(#stem-${uid})`} strokeWidth="1.8" fill="none"/>

      {/* MAIN white tulip — large */}
      <g transform="translate(70 70)">
        {/* outer petal back */}
        <path d="M-22 35 Q-30 -5 -8 -32 Q0 -10 -22 35 Z" fill={`url(#petalShade-${uid})`} />
        <path d="M22 35 Q30 -5 8 -32 Q0 -10 22 35 Z" fill={`url(#petalShade-${uid})`} />
        {/* center petal — bright white */}
        <path d="M0 38 Q-20 0 0 -38 Q20 0 0 38 Z"
              fill={`url(#petal-${uid})`}
              stroke="oklch(0.65 0.04 70 / 0.45)" strokeWidth="0.6"/>
        {/* inner highlight */}
        <path d="M-2 -28 Q-8 0 -3 30" stroke="oklch(0.97 0.012 80)" strokeWidth="1.2" fill="none" opacity="0.7"/>
      </g>

      {/* SECOND white tulip — top right, slightly smaller */}
      <g transform="translate(135 50) rotate(8) scale(0.85)">
        <path d="M-20 32 Q-28 -4 -7 -30 Q0 -8 -20 32 Z" fill={`url(#petalShade-${uid})`} />
        <path d="M20 32 Q28 -4 7 -30 Q0 -8 20 32 Z" fill={`url(#petalShade-${uid})`} />
        <path d="M0 35 Q-18 0 0 -34 Q18 0 0 35 Z"
              fill={`url(#petal-${uid})`}
              stroke="oklch(0.65 0.04 70 / 0.45)" strokeWidth="0.6"/>
        <path d="M-2 -25 Q-7 0 -2 27" stroke="oklch(0.97 0.012 80)" strokeWidth="1" fill="none" opacity="0.65"/>
      </g>

      {/* THIRD bud — small */}
      <g transform="translate(105 105) rotate(-12) scale(0.55)">
        <path d="M0 28 Q-15 0 0 -25 Q15 0 0 28 Z"
              fill={`url(#petal-${uid})`}
              stroke="oklch(0.65 0.04 70 / 0.4)" strokeWidth="0.5"/>
      </g>

      {/* tiny gold accents */}
      <circle cx="50" cy="155" r="2.2" fill="oklch(0.80 0.13 82)" opacity="0.85"/>
      <circle cx="115" cy="170" r="1.8" fill="oklch(0.80 0.13 82)" opacity="0.75"/>
      <circle cx="160" cy="100" r="1.6" fill="oklch(0.80 0.13 82)" opacity="0.7"/>
      <circle cx="35" cy="120" r="1.3" fill="oklch(0.80 0.13 82)" opacity="0.6"/>
      <circle cx="155" cy="155" r="1.3" fill="oklch(0.80 0.13 82)" opacity="0.6"/>
    </svg>
  );
}

function FloralPaper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative bg-paper-texture rounded-sm shadow-luxury overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, oklch(0.98 0.01 75) 0%, oklch(0.95 0.018 70) 100%)",
        boxShadow: "0 30px 80px -20px oklch(0.24 0.10 18 / 0.35), 0 10px 30px -10px oklch(0.24 0.10 18 / 0.2), inset 0 0 80px oklch(0.92 0.02 60 / 0.5)",
      }}
    >
      {/* inner border */}
      <div className="absolute inset-3 border border-gold/30 rounded-sm pointer-events-none" />
      <div className="absolute inset-3 border border-burgundy/10 rounded-sm pointer-events-none" style={{ margin: "3px" }} />

      {/* tulip corners */}
      <TulipCorner className="absolute -top-4 -right-4 w-44 h-44 sm:w-52 sm:h-52 opacity-95 pointer-events-none" />
      <TulipCorner className="absolute -bottom-4 -left-4 w-44 h-44 sm:w-52 sm:h-52 opacity-95 pointer-events-none rotate-180" />
      <TulipCorner className="absolute -top-3 -left-3 w-32 h-32 sm:w-36 sm:h-36 opacity-70 pointer-events-none" flip />
      <TulipCorner className="absolute -bottom-3 -right-3 w-32 h-32 sm:w-36 sm:h-36 opacity-70 pointer-events-none rotate-180" flip />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6 text-gold">
      <span className="h-px w-16 bg-gradient-to-l from-transparent via-gold/70 to-transparent" />
      <span className="text-base">✦</span>
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </div>
  );
}

export function Cards() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen w-full pt-24 pb-32 px-4 sm:px-8 bg-burgundy-damask">
      {/* heading */}
      <motion.div
        className="text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-gold/70 tracking-[0.5em] text-xs mb-3">دعوة كريمة</p>
        <h1 className="font-arabic-display text-4xl sm:text-6xl text-gold-shimmer animate-shimmer"
            style={{
              background: "linear-gradient(135deg, oklch(0.92 0.10 88) 0%, oklch(0.75 0.13 78) 50%, oklch(0.92 0.10 88) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
          قيس & دانية
        </h1>
        <p className="text-paper/70 mt-4 font-arabic text-base sm:text-lg leading-loose">
          بكل الفرح والسرور، يسعدنا دعوتكم لحضور حفل زفافنا<br/>
          ومشاركتنا أجمل لحظات حياتنا
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-12">

        {/* CARD 1: Exact uploaded invitation image inside floral paper */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <FloralPaper className="p-4 sm:p-6">
            <img
              src="https://i.postimg.cc/3x9B6m5f/Whats-App-Image-2026-05-10-at-8-35-14-PM.jpg"
              alt="دعوة زفاف قيس و دانية"
              className="w-full h-auto rounded-sm"
              style={{ display: "block" }}
            />
          </FloralPaper>
        </motion.div>
        {/* CARD 2: No children + map */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <FloralPaper className="min-h-[420px]">
            <div className="px-8 sm:px-12 py-14 flex flex-col items-center justify-center text-center">
              <div className="text-gold/80 text-xs tracking-[0.4em] mb-4">ملاحظة كريمة</div>
              <SectionDivider />
              <p className="font-arabic text-burgundy-deep text-lg sm:text-xl leading-loose max-w-md">
                نعتذر بلطف عن استقبال الأطفال،<br/>
                شاكرين تفهّمكم ومشاركتكم فرحتنا 🤍
              </p>
              <SectionDivider />

              <a
                href="https://maps.app.goo.gl/CKzzVxLxTthghXRN6"
                target="_blank" rel="noreferrer"
                className="group mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-full font-arabic text-paper transition-all hover:scale-105"
                style={{
                  background: "var(--gradient-burgundy)",
                  boxShadow: "0 8px 24px oklch(0.24 0.10 18 / 0.4), inset 0 1px 0 oklch(0.85 0.12 80 / 0.3)",
                  border: "1px solid oklch(0.78 0.12 80 / 0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-soft">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="tracking-wider">عرض موقع القاعة</span>
              </a>
            </div>
          </FloralPaper>
        </motion.div>

        {/* CARD 3: RSVP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <FloralPaper className="min-h-[480px]">
            <div className="px-6 sm:px-12 py-14 flex flex-col items-center text-center">
              <div className="text-gold/80 text-xs tracking-[0.4em] mb-3">تأكيد الحضور</div>
              <h2 className="font-arabic-display text-3xl sm:text-4xl text-burgundy-deep">
                نتشرّف بحضوركم
              </h2>
              <SectionDivider />

              {!submitted ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="w-full max-w-sm space-y-4 mt-2"
                >
                  <div className="text-right">
                    <label className="block text-xs text-burgundy/70 mb-2 tracking-wider">الاسم الكامل</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اكتب اسمك الكريم"
                      className="w-full px-5 py-3 rounded-full bg-paper/60 backdrop-blur-sm border border-gold/30 text-burgundy-deep font-arabic placeholder:text-burgundy/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                  <div className="text-right">
                    <label className="block text-xs text-burgundy/70 mb-2 tracking-wider">عدد الحضور</label>
                    <input
                      required type="number" min={1} max={10}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      placeholder="مثال: 2"
                      className="w-full px-5 py-3 rounded-full bg-paper/60 backdrop-blur-sm border border-gold/30 text-burgundy-deep font-arabic placeholder:text-burgundy/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 py-4 rounded-full font-arabic text-paper tracking-wider transition-all hover:scale-[1.02] active:scale-[0.99]"
                    style={{
                      background: "var(--gradient-burgundy)",
                      boxShadow: "0 10px 30px oklch(0.24 0.10 18 / 0.45), inset 0 1px 0 oklch(0.85 0.12 80 / 0.3)",
                      border: "1px solid oklch(0.78 0.12 80 / 0.4)",
                    }}
                  >
                    ✦ تأكيد الحضور ✦
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="py-6"
                >
                  <div className="text-5xl mb-4">🤍</div>
                  <h3 className="font-arabic-display text-2xl text-burgundy-deep mb-3">
                    شكرًا من القلب
                  </h3>
                  <p className="font-arabic text-burgundy/80 leading-loose max-w-xs mx-auto">
                    تم تأكيد حضوركم بنجاح،<br/>
                    بانتظاركم لمشاركتنا أجمل اللحظات ✦
                  </p>
                </motion.div>
              )}
            </div>
          </FloralPaper>
        </motion.div>

        {/* footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center pt-8"
        >
          <div className="flex items-center justify-center gap-3 text-gold/60">
            <span className="h-px w-20 bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
            <span>✦</span>
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>
          <p className="mt-4 font-arabic-display text-gold/70 text-lg">قيس & دانية</p>
        </motion.div>
      </div>
    </div>
  );
}
