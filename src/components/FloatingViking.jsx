import { motion, useTransform } from "framer-motion";

/**
 * FloatingViking
 * Elementos decorativos para o restaurante Vikings.
 * Escudos, machados, runas, chifres e caneca em SVG.
 */
export default function FloatingViking({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -90]);
  const shieldRotate = useTransform(scrollProgress, [0, 1], [-5, 10]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* 🛡️ Escudo viking */}
      <motion.div
        className="absolute top-[8%] left-[6%] md:left-[10%]"
        style={{ y: y1, rotate: shieldRotate }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-[0.08]">
          <circle cx="25" cy="25" r="22" fill="#d97706" stroke="#92400e" strokeWidth="2" />
          <circle cx="25" cy="25" r="8" fill="#92400e" opacity="0.5" />
          <line x1="25" y1="3" x2="25" y2="47" stroke="#78350f" strokeWidth="1.5" opacity="0.3" />
          <line x1="3" y1="25" x2="47" y2="25" stroke="#78350f" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </motion.div>

      {/* 🪓 Machado */}
      <motion.div
        className="absolute top-[15%] right-[8%] md:right-[12%] animate-float-slow"
        style={{ y: y2 }}
      >
        <svg width="40" height="55" viewBox="0 0 40 55" className="opacity-[0.07]">
          <rect x="18" y="15" width="4" height="38" rx="2" fill="#92400e" />
          <path d="M5 5 C5 5 10 0 20 8 C30 0 35 5 35 5 C35 5 35 18 20 25 C5 18 5 5 5 5Z" fill="#d97706" />
        </svg>
      </motion.div>

      {/* ᚱ Runa 1 */}
      <motion.div
        className="absolute top-[22%] left-[40%] md:left-[50%] animate-shimmer"
        style={{ y: y1 }}
      >
        <span className="text-amber-500/10 text-3xl font-bold select-none">ᚱ</span>
      </motion.div>

      {/* ᛗ Runa 2 */}
      <motion.div
        className="absolute bottom-[25%] left-[5%] md:left-[8%] animate-shimmer"
        style={{ animationDelay: "2s" }}
      >
        <span className="text-amber-500/8 text-2xl font-bold select-none">ᛗ</span>
      </motion.div>

      {/* 🍺 Caneca */}
      <motion.div
        className="absolute bottom-[15%] right-[10%] md:right-[18%] opacity-[0.06]"
        style={{ y: y2 }}
      >
        <svg width="45" height="50" viewBox="0 0 45 50">
          <rect x="5" y="8" width="25" height="35" rx="3" fill="#d97706" />
          <rect x="8" y="12" width="19" height="5" rx="1" fill="#fbbf24" opacity="0.5" />
          <path d="M30 15 C38 15 40 20 40 25 C40 30 38 35 30 35" fill="none" stroke="#92400e" strokeWidth="2.5" />
        </svg>
      </motion.div>

      {/* 🦴 Osso decorativo */}
      <motion.div
        className="absolute bottom-[40%] right-[30%] md:right-[35%] animate-float opacity-[0.04]"
        style={{ animationDelay: "3s" }}
      >
        <svg width="50" height="16" viewBox="0 0 50 16">
          <circle cx="6" cy="4" r="4" fill="#d4d4d8" />
          <circle cx="6" cy="12" r="4" fill="#d4d4d8" />
          <circle cx="44" cy="4" r="4" fill="#d4d4d8" />
          <circle cx="44" cy="12" r="4" fill="#d4d4d8" />
          <rect x="6" y="5" width="38" height="6" rx="3" fill="#d4d4d8" />
        </svg>
      </motion.div>

      {/* ⚔️ Espadas cruzadas (mini) */}
      <motion.div
        className="absolute top-[45%] left-[8%] md:left-[12%] opacity-[0.05]"
        style={{ y: y1 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <line x1="5" y1="35" x2="35" y2="5" stroke="#f59e0b" strokeWidth="2" />
          <line x1="5" y1="5" x2="35" y2="35" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="20" cy="20" r="3" fill="#d97706" />
        </svg>
      </motion.div>
    </div>
  );
}
