import { motion, useTransform } from "framer-motion";

/**
 * FloatingCachoeira
 * Elementos decorativos para a cachoeira do Horto.
 * Folhas, gotas d'água, pedras e cipó em SVG.
 */
export default function FloatingCachoeira({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -110]);
  const leafRotate = useTransform(scrollProgress, [0, 1], [-15, 30]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* 🍃 Folha 1 */}
      <motion.div
        className="absolute top-[8%] right-[10%] md:right-[15%]"
        style={{ y: y1, rotate: leafRotate }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-[0.12]">
          <path d="M25 5 C15 15 5 30 25 45 C45 30 35 15 25 5Z" fill="#10b981" />
          <line x1="25" y1="10" x2="25" y2="40" stroke="#065f46" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </motion.div>

      {/* 🍃 Folha 2 (menor, lado oposto) */}
      <motion.div
        className="absolute top-[25%] left-[5%] md:left-[8%] animate-float-slow"
        style={{ y: y2 }}
      >
        <svg width="30" height="30" viewBox="0 0 50 50" className="opacity-[0.08]">
          <path d="M25 5 C15 15 5 30 25 45 C45 30 35 15 25 5Z" fill="#34d399" />
          <line x1="25" y1="10" x2="25" y2="40" stroke="#065f46" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </motion.div>

      {/* 💧 Gota d'água 1 */}
      <motion.div
        className="absolute top-[12%] left-[35%] md:left-[45%] animate-shimmer"
        style={{ y: y3 }}
      >
        <svg width="12" height="18" viewBox="0 0 12 18" className="opacity-15">
          <path d="M6 0 C6 0 0 10 0 12 C0 15.3 2.7 18 6 18 C9.3 18 12 15.3 12 12 C12 10 6 0 6 0Z" fill="#5eead4" />
        </svg>
      </motion.div>

      {/* 💧 Gota d'água 2 */}
      <motion.div
        className="absolute top-[30%] right-[25%] md:right-[30%] animate-shimmer"
        style={{ animationDelay: "2s" }}
      >
        <svg width="8" height="12" viewBox="0 0 12 18" className="opacity-10">
          <path d="M6 0 C6 0 0 10 0 12 C0 15.3 2.7 18 6 18 C9.3 18 12 15.3 12 12 C12 10 6 0 6 0Z" fill="#99f6e4" />
        </svg>
      </motion.div>

      {/* 💧 Gota d'água 3 */}
      <motion.div
        className="absolute bottom-[20%] left-[15%] md:left-[20%] animate-shimmer"
        style={{ animationDelay: "3.5s" }}
      >
        <svg width="10" height="15" viewBox="0 0 12 18" className="opacity-12">
          <path d="M6 0 C6 0 0 10 0 12 C0 15.3 2.7 18 6 18 C9.3 18 12 15.3 12 12 C12 10 6 0 6 0Z" fill="#6ee7b7" />
        </svg>
      </motion.div>

      {/* 🪨 Pedra decorativa */}
      <motion.div
        className="absolute bottom-[10%] right-[8%] md:right-[12%] opacity-[0.06]"
        style={{ y: y2 }}
      >
        <svg width="80" height="45" viewBox="0 0 80 45">
          <ellipse cx="40" cy="30" rx="38" ry="14" fill="#6b7280" />
          <ellipse cx="35" cy="25" rx="25" ry="12" fill="#9ca3af" />
        </svg>
      </motion.div>

      {/* 🌿 Cipó (lateral direita) */}
      <motion.div
        className="absolute top-[0%] right-[3%] opacity-[0.05]"
        style={{ y: y1 }}
      >
        <svg width="20" height="200" viewBox="0 0 20 200">
          <path d="M10 0 C15 30 5 60 10 90 C15 120 5 150 10 180 C12 190 10 200 10 200" fill="none" stroke="#10b981" strokeWidth="2" />
          <ellipse cx="8" cy="50" rx="6" ry="4" fill="#10b981" opacity="0.3" />
          <ellipse cx="14" cy="110" rx="5" ry="3" fill="#34d399" opacity="0.3" />
          <ellipse cx="6" cy="160" rx="7" ry="4" fill="#10b981" opacity="0.25" />
        </svg>
      </motion.div>
    </div>
  );
}
