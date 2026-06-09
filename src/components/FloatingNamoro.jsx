import { motion, useTransform } from "framer-motion";

/**
 * FloatingNamoro
 * Elementos decorativos para o pedido de namoro.
 * Corações, anéis, estrelas e borboletas em SVG.
 */
export default function FloatingNamoro({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -100]);
  const heartRotate = useTransform(scrollProgress, [0, 1], [-10, 10]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* ❤️ Coração 1 */}
      <motion.div
        className="absolute top-[10%] right-[8%] md:right-[14%]"
        style={{ y: y1, rotate: heartRotate }}
      >
        <svg width="35" height="35" viewBox="0 0 24 24" className="opacity-[0.12]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#f43f5e" />
        </svg>
      </motion.div>

      {/* ❤️ Coração 2 (menor) */}
      <motion.div
        className="absolute top-[25%] left-[5%] md:left-[10%] animate-float-slow"
        style={{ y: y2 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-[0.08]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ec4899" />
        </svg>
      </motion.div>

      {/* 💍 Anel */}
      <motion.div
        className="absolute top-[15%] left-[40%] md:left-[50%]"
        style={{ y: y3 }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-10">
          <circle cx="15" cy="18" r="8" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="15" cy="10" r="3" fill="#fbbf24" opacity="0.5" />
        </svg>
      </motion.div>

      {/* ✨ Estrela 1 */}
      <motion.div
        className="absolute top-[18%] right-[30%] md:right-[35%] animate-shimmer"
        style={{ y: y1 }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-15">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#fda4af" />
        </svg>
      </motion.div>

      {/* ✨ Estrela 2 */}
      <motion.div
        className="absolute bottom-[30%] right-[5%] md:right-[8%] animate-shimmer"
        style={{ animationDelay: "2.5s" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" className="opacity-10">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#f9a8d4" />
        </svg>
      </motion.div>

      {/* 🦋 Borboleta */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] md:left-[15%] animate-float opacity-[0.07]"
        style={{ y: y2 }}
      >
        <svg width="40" height="30" viewBox="0 0 40 30">
          <ellipse cx="12" cy="12" rx="10" ry="8" fill="#f472b6" transform="rotate(-15 12 12)" />
          <ellipse cx="28" cy="12" rx="10" ry="8" fill="#f472b6" transform="rotate(15 28 12)" />
          <ellipse cx="12" cy="20" rx="7" ry="6" fill="#ec4899" transform="rotate(-10 12 20)" />
          <ellipse cx="28" cy="20" rx="7" ry="6" fill="#ec4899" transform="rotate(10 28 20)" />
          <line x1="20" y1="5" x2="20" y2="28" stroke="#be185d" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* ❤️ Coração 3 (tiny, bottom) */}
      <motion.div
        className="absolute bottom-[40%] left-[60%] md:left-[65%] animate-float-slow"
        style={{ animationDelay: "4s" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-[0.06]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#fb7185" />
        </svg>
      </motion.div>
    </div>
  );
}
