import { motion, useTransform } from "framer-motion";

/**
 * FloatingItaliano
 * Elementos SVG flutuantes temáticos de restaurante italiano / nhoque:
 * - Prato de nhoque / massa
 * - Garfo e colher
 * - Folha de louro / ervas
 * - Taça de vinho
 * - Brilhos quentes (luz de restaurante)
 *
 * @param {object} props
 * @param {import("framer-motion").MotionValue} props.scrollProgress
 */
export default function FloatingItaliano({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -110]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -90]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -160]);
  const x1 = useTransform(scrollProgress, [0, 1], [0, 30]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, -25]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 12]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -8]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ---- Prato de Nhoque (top-right) ---- */}
      <motion.div
        className="absolute top-[10%] right-[8%] animate-float"
        style={{ y: y1, x: x2, rotate: rotate1 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15] drop-shadow-lg">
          {/* Prato */}
          <ellipse cx="50" cy="55" rx="42" ry="18" fill="white" opacity="0.3" />
          <ellipse cx="50" cy="52" rx="38" ry="15" fill="white" opacity="0.15" />
          {/* Nhoques (bolinhas) */}
          <circle cx="38" cy="48" r="5" fill="#FBBF24" opacity="0.5" />
          <circle cx="50" cy="45" r="5.5" fill="#F59E0B" opacity="0.5" />
          <circle cx="62" cy="48" r="5" fill="#FBBF24" opacity="0.5" />
          <circle cx="44" cy="40" r="4.5" fill="#D97706" opacity="0.4" />
          <circle cx="56" cy="41" r="4.5" fill="#F59E0B" opacity="0.45" />
          <circle cx="50" cy="53" r="4" fill="#FBBF24" opacity="0.4" />
          {/* Molho (vermelho) */}
          <ellipse cx="50" cy="48" rx="20" ry="10" fill="#DC2626" opacity="0.2" />
          {/* Manjericão no topo */}
          <ellipse cx="52" cy="38" rx="5" ry="3" fill="#22C55E" opacity="0.4" transform="rotate(-15 52 38)" />
        </svg>
      </motion.div>

      {/* ---- Taça de Vinho (bottom-left) ---- */}
      <motion.div
        className="absolute bottom-[22%] left-[6%] animate-float-slow"
        style={{ y: y2, x: x1, rotate: rotate2 }}
      >
        <svg width="50" height="90" viewBox="0 0 50 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15]">
          {/* Bowl da taça */}
          <path d="M10 15C10 15 8 40 25 45C42 40 40 15 40 15H10Z" fill="#7C2D12" opacity="0.5" />
          <path d="M12 15C12 15 10 35 25 40C40 35 38 15 38 15H12Z" fill="#991B1B" opacity="0.3" />
          {/* Haste */}
          <rect x="23" y="45" width="4" height="25" rx="2" fill="white" opacity="0.25" />
          {/* Base */}
          <ellipse cx="25" cy="72" rx="14" ry="4" fill="white" opacity="0.2" />
          {/* Brilho do vinho */}
          <ellipse cx="22" cy="25" rx="4" ry="6" fill="white" opacity="0.08" />
          {/* Borda */}
          <path d="M10 15H40" stroke="white" strokeWidth="1.5" opacity="0.2" />
        </svg>
      </motion.div>

      {/* ---- Garfo (center-left) ---- */}
      <motion.div
        className="absolute top-[35%] left-[12%] animate-float"
        style={{ y: y3, rotate: rotate1 }}
      >
        <svg width="25" height="80" viewBox="0 0 25 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.1]">
          {/* Dentes do garfo */}
          <rect x="5" y="5" width="2" height="25" rx="1" fill="white" />
          <rect x="9" y="5" width="2" height="25" rx="1" fill="white" />
          <rect x="13" y="5" width="2" height="25" rx="1" fill="white" />
          <rect x="17" y="5" width="2" height="25" rx="1" fill="white" />
          {/* Conexão */}
          <path d="M5 30C5 30 7 35 12 35C17 35 19 30 19 30" stroke="white" strokeWidth="2" fill="none" />
          {/* Cabo */}
          <rect x="10.5" y="35" width="3" height="35" rx="1.5" fill="white" />
        </svg>
      </motion.div>

      {/* ---- Folha de louro / erva (top-left) ---- */}
      <motion.div
        className="absolute top-[18%] left-[28%] animate-float-slow"
        style={{ y: y1, rotate: rotate2 }}
      >
        <svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.12]">
          <path d="M20 5C10 15 3 30 8 40C13 50 28 48 33 38C38 28 30 10 20 5Z" fill="#22C55E" opacity="0.5" />
          <path d="M20 5C20 5 18 22 12 35" stroke="#16A34A" strokeWidth="1" opacity="0.3" fill="none" />
          <path d="M20 5C20 5 21 20 25 30" stroke="#16A34A" strokeWidth="0.8" opacity="0.25" fill="none" />
        </svg>
      </motion.div>

      {/* ---- Segundo prato menor (bottom-right) ---- */}
      <motion.div
        className="absolute bottom-[30%] right-[15%] animate-float"
        style={{ y: y2, rotate: rotate1 }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.08]">
          <ellipse cx="50" cy="55" rx="42" ry="18" fill="white" opacity="0.3" />
          <circle cx="42" cy="48" r="4" fill="#FBBF24" opacity="0.4" />
          <circle cx="54" cy="46" r="4.5" fill="#F59E0B" opacity="0.4" />
          <circle cx="48" cy="53" r="3.5" fill="#FBBF24" opacity="0.35" />
        </svg>
      </motion.div>

      {/* ---- Brilhos quentes (luz de restaurante italiano) ---- */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full animate-shimmer"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            top: `${10 + Math.random() * 75}%`,
            left: `${5 + Math.random() * 90}%`,
            backgroundColor: i % 3 === 0
              ? `rgba(217, 119, 6, ${0.12 + Math.random() * 0.15})`
              : i % 3 === 1
                ? `rgba(251, 191, 36, ${0.1 + Math.random() * 0.12})`
                : `rgba(239, 68, 68, ${0.08 + Math.random() * 0.1})`,
            animationDelay: `${i * 0.5}s`,
            y: useTransform(scrollProgress, [0, 1], [0, -(18 + i * 14)]),
          }}
        />
      ))}
    </div>
  );
}
