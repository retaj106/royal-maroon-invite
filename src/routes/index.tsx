import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Envelope } from "@/components/Envelope";
import { Cards } from "@/components/Cards";
import { MusicPlayer } from "@/components/MusicPlayer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "دعوة زفاف قاسم ودانة" },
      { name: "description", content: "دعوة زفاف فاخرة — قاسم & دانة. يسعدنا حضوركم لمشاركتنا أجمل اللحظات." },
      { property: "og:title", content: "دعوة زفاف قاسم & دانة" },
      { property: "og:description", content: "دعوة زفاف فاخرة وأنيقة" },
    ],
  }),
});

type Stage = "envelope" | "cards";

function Index() {
  const [stage, setStage] = useState<Stage>("envelope");

  return (
    <main className="min-h-screen w-full relative" dir="rtl">
      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <motion.div key="envelope" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Envelope onOpen={() => setStage("cards")} />
          </motion.div>
        )}
        {stage === "cards" && (
          <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <Cards />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer autoplay={stage === "cards"} />
    </main>
  );
}
