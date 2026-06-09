import { motion, useTransform } from "framer-motion";

/**
 * FloatingNeon
 * Elementos decorativos para a festa neon/aniversário.
 * Bolas de luz, raios laser, estrelas neon e confete em SVG.
 */
export default function FloatingNeon({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -70]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -90]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 45]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* 💡 Bola de luz neon (fúcsia) */}
      <motion.div
        className="absolute top-[10%] left-[8%] md:left-[12%]"
        style={{ y: y1 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-15">
          <circle cx="20" cy="20" r="15" fill="none" stroke="#d946ef" strokeWidth="2" />
          <circle cx="20" cy="20" r="8" fill="#d946ef" opacity="0.3" />
        </svg>
      </motion.div>

      {/* 💡 Bola de luz neon (cyan) */}
      <motion.div
        className="absolute top-[20%] right-[6%] md:right-[10%] animate-float-slow"
        style={{ y: y2 }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-20">
          <circle cx="15" cy="15" r="10" fill="none" stroke="#22d3ee" strokeWidth="2" />
          <circle cx="15" cy="15" r="5" fill="#22d3ee" opacity="0.3" />
        </svg>
      </motion.div>

      {/* ⚡ Raio laser diagonal */}
      <motion.div
        className="absolute top-[5%] left-[30%] md:left-[40%]"
        style={{ rotate: rotate1 }}
      >
        <svg width="120" height="3" viewBox="0 0 120 3" className="opacity-[0.07]">
          <line x1="0" y1="1.5" x2="120" y2="1.5" stroke="#a3e635" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* ✦ Estrela neon 1 */}
      <motion.div
        className="absolute top-[15%] left-[55%] md:left-[60%] animate-shimmer"
        style={{ y: y3 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-15">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#d946ef" />
        </svg>
      </motion.div>

      {/* ✦ Estrela neon 2 */}
      <motion.div
        className="absolute bottom-[25%] left-[5%] md:left-[8%] animate-shimmer"
        style={{ animationDelay: "2s" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" className="opacity-10">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#22d3ee" />
        </svg>
      </motion.div>

      {/* 🎉 Confete flutuante */}
      <motion.div
        className="absolute bottom-[35%] right-[8%] md:right-[15%] animate-float opacity-[0.08]"
        style={{ y: y1 }}
      >
        <svg width="60" height="40" viewBox="0 0 60 40">
          <rect x="5" y="5" width="8" height="3" rx="1" fill="#d946ef" transform="rotate(30 9 6)" />
          <rect x="25" y="15" width="6" height="3" rx="1" fill="#22d3ee" transform="rotate(-20 28 16)" />
          <rect x="45" y="8" width="7" height="3" rx="1" fill="#a3e635" transform="rotate(15 48 9)" />
          <rect x="15" y="28" width="5" height="3" rx="1" fill="#fbbf24" transform="rotate(-45 17 29)" />
          <rect x="40" y="30" width="8" height="3" rx="1" fill="#d946ef" transform="rotate(60 44 31)" />
        </svg>
      </motion.div>

      {/* 💡 Bola de luz neon (lime) */}
      <motion.div
        className="absolute bottom-[15%] left-[20%] md:left-[25%] animate-float-slow"
        style={{ y: y2, animationDelay: "3s" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" className="opacity-10">
          <circle cx="10" cy="10" r="7" fill="none" stroke="#a3e635" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="3" fill="#a3e635" opacity="0.4" />
        </svg>
      </motion.div>
    </div>
  );
}
