import { motion } from "framer-motion";
import { useState } from "react";

// Decorative tulip SVG corner
function TulipCorner({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="petal" cx="50%" cy="40%">
          <stop offset="0%" stopColor="oklch(0.99 0.005 75)" />
          <stop offset="100%" stopColor="oklch(0.92 0.02 60)" />
        </radialGradient>
        <linearGradient id="leaf" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.06 130 / 0.6)" />
          <stop offset="100%" stopColor="oklch(0.45 0.08 140 / 0.5)" />
        </linearGradient>
      </defs>
      {/* leaves */}
      <path d="M20 180 Q40 120 80 100 Q60 140 30 180 Z" fill="url(#leaf)" opacity="0.7"/>
      <path d="M10 160 Q50 100 110 90 Q70 130 20 175 Z" fill="url(#leaf)" opacity="0.5"/>
      {/* tulip 1 */}
      <g transform="translate(60 60)">
        <path d="M0 30 Q-15 0 0 -25 Q15 0 0 30 Z" fill="url(#petal)" stroke="oklch(0.65 0.04 70 / 0.4)" strokeWidth="0.5"/>
        <path d="M-12 25 Q-22 0 -10 -18 Q-5 5 -12 25 Z" fill="url(#petal)" opacity="0.85"/>
        <path d="M12 25 Q22 0 10 -18 Q5 5 12 25 Z" fill="url(#petal)" opacity="0.85"/>
        <path d="M0 30 Q2 60 -5 95" stroke="oklch(0.5 0.07 140 / 0.6)" strokeWidth="1.5" fill="none"/>
      </g>
      {/* tulip 2 (smaller) */}
      <g transform="translate(115 35) scale(0.7)">
        <path d="M0 25 Q-12 0 0 -20 Q12 0 0 25 Z" fill="url(#petal)" stroke="oklch(0.65 0.04 70 / 0.4)" strokeWidth="0.5"/>
        <path d="M-10 22 Q-18 0 -8 -15 Q-4 4 -10 22 Z" fill="url(#petal)" opacity="0.85"/>
        <path d="M10 22 Q18 0 8 -15 Q4 4 10 22 Z" fill="url(#petal)" opacity="0.85"/>
        <path d="M0 25 Q-3 60 8 100" stroke="oklch(0.5 0.07 140 / 0.6)" strokeWidth="1.5" fill="none"/>
      </g>
      {/* tiny gold dots */}
      <circle cx="40" cy="120" r="2" fill="oklch(0.78 0.12 80 / 0.7)"/>
      <circle cx="90" cy="140" r="1.5" fill="oklch(0.78 0.12 80 / 0.6)"/>
      <circle cx="130" cy="80" r="1.5" fill="oklch(0.78 0.12 80 / 0.6)"/>
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
      <TulipCorner className="absolute -top-2 -right-2 w-32 h-32 opacity-90 pointer-events-none" />
      <TulipCorner className="absolute -bottom-2 -left-2 w-32 h-32 opacity-90 pointer-events-none rotate-180" />
      <TulipCorner className="absolute -top-2 -left-2 w-24 h-24 opacity-60 pointer-events-none" flip />
      <TulipCorner className="absolute -bottom-2 -right-2 w-24 h-24 opacity-60 pointer-events-none rotate-180" flip />

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
    <div
      className="min-h-screen w-full pt-24 pb-32 px-4 sm:px-8"
      style={{
        background: "linear-gradient(180deg, oklch(0.24 0.10 18) 0%, oklch(0.30 0.11 18) 50%, oklch(0.24 0.10 18) 100%)",
      }}
    >
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
          قيس & دانة
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
              alt="دعوة زفاف قيس و دانة"
              className="w-full h-auto rounded-sm"
              style={{ display: "block" }}
            />
          </FloralPaper>
        </motion.div>
        {/* CARD 1: Invitation image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <FloralPaper className="aspect-[3/4] sm:aspect-[4/5]">
            <div className="absolute inset-8 flex flex-col items-center justify-center text-center">
              <div className="text-gold/80 text-xs tracking-[0.4em] mb-4">دعوة زفاف</div>
              <div className="font-arabic-display text-3xl sm:text-5xl text-burgundy-deep leading-tight">
                قاسم
              </div>
              <div className="my-4 flex items-center gap-3 text-gold">
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
                <span className="text-2xl font-serif-lux italic">&</span>
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
              </div>
              <div className="font-arabic-display text-3xl sm:text-5xl text-burgundy-deep leading-tight">
                دانة
              </div>

              <SectionDivider />

              <p className="font-arabic text-burgundy/80 text-sm sm:text-base leading-loose max-w-xs">
                يتشرّفان بدعوتكم لحضور حفل زفافهما<br/>
                لتُشاركوهما أجمل لحظات العمر
              </p>

              <div className="mt-6 grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-burgundy/50 mb-1">التاريخ</div>
                  <div className="font-arabic-display text-burgundy-deep">قريبًا</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-burgundy/50 mb-1">المكان</div>
                  <div className="font-arabic-display text-burgundy-deep">قاعة الأفراح</div>
                </div>
              </div>
            </div>
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
          <p className="mt-4 font-arabic-display text-gold/70 text-lg">قاسم & دانة</p>
        </motion.div>
      </div>
    </div>
  );
}
