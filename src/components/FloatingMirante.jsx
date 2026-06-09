import { motion, useTransform } from "framer-motion";

/**
 * FloatingMirante
 * Elementos SVG flutuantes temáticos do Mirante Dona Marta:
 * - Silhueta do Cristo Redentor
 * - Nuvens em parallax
 * - Pássaros voando
 * - Montanhas ao fundo
 * - Estrelinhas / brilhos
 *
 * @param {object} props
 * @param {import("framer-motion").MotionValue} props.scrollProgress
 */
export default function FloatingMirante({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -130]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -180]);
  const x1 = useTransform(scrollProgress, [0, 1], [0, 40]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, -35]);
  const x3 = useTransform(scrollProgress, [0, 1], [0, 60]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ---- Cristo Redentor (silhueta — centro-direita) ---- */}
      <motion.div
        className="absolute top-[8%] right-[12%] animate-float-slow"
        style={{ y: y1 }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.12] drop-shadow-lg">
          {/* Cabeça */}
          <circle cx="40" cy="14" r="8" fill="white" />
          {/* Corpo */}
          <rect x="36" y="22" width="8" height="45" rx="3" fill="white" />
          {/* Braços abertos */}
          <rect x="4" y="26" width="72" height="7" rx="3.5" fill="white" />
          {/* Mãos */}
          <circle cx="6" cy="29.5" r="4" fill="white" />
          <circle cx="74" cy="29.5" r="4" fill="white" />
          {/* Base / pedestal */}
          <path d="M28 67L25 95H55L52 67" fill="white" opacity="0.7" />
          <rect x="20" y="95" width="40" height="8" rx="2" fill="white" opacity="0.5" />
          {/* Montanha base */}
          <path d="M5 115L40 85L75 115H5Z" fill="white" opacity="0.15" />
        </svg>
      </motion.div>

      {/* ---- Nuvem grande (top-left) ---- */}
      <motion.div
        className="absolute top-[15%] left-[5%]"
        style={{ y: y2, x: x1 }}
      >
        <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.07]">
          <ellipse cx="60" cy="35" rx="50" ry="20" fill="white" />
          <ellipse cx="90" cy="25" rx="40" ry="22" fill="white" />
          <ellipse cx="120" cy="35" rx="35" ry="18" fill="white" />
          <ellipse cx="45" cy="30" rx="30" ry="15" fill="white" />
        </svg>
      </motion.div>

      {/* ---- Nuvem média (center-right) ---- */}
      <motion.div
        className="absolute top-[40%] right-[3%]"
        style={{ y: y3, x: x2 }}
      >
        <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.06]">
          <ellipse cx="45" cy="28" rx="35" ry="16" fill="white" />
          <ellipse cx="70" cy="20" rx="30" ry="18" fill="white" />
          <ellipse cx="90" cy="28" rx="25" ry="14" fill="white" />
        </svg>
      </motion.div>

      {/* ---- Nuvem pequena (bottom-left) ---- */}
      <motion.div
        className="absolute bottom-[25%] left-[15%]"
        style={{ y: y1, x: x3 }}
      >
        <svg width="90" height="35" viewBox="0 0 90 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.05]">
          <ellipse cx="35" cy="20" rx="25" ry="12" fill="white" />
          <ellipse cx="55" cy="15" rx="20" ry="13" fill="white" />
          <ellipse cx="70" cy="20" rx="18" ry="10" fill="white" />
        </svg>
      </motion.div>

      {/* ---- Pássaros voando (grupo 1 — top) ---- */}
      <motion.div
        className="absolute top-[22%] left-[35%]"
        style={{ y: y2, x: x3 }}
      >
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15]">
          <path d="M5 15C10 8 15 12 20 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M25 10C30 3 35 7 40 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M50 18C55 11 60 15 65 18" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M60 8C64 2 68 5 72 8" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* ---- Pássaros voando (grupo 2 — bottom) ---- */}
      <motion.div
        className="absolute bottom-[35%] right-[25%]"
        style={{ y: y3, x: x2 }}
      >
        <svg width="60" height="25" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.1]">
          <path d="M5 12C9 6 13 9 17 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M22 8C26 2 30 5 34 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M40 14C44 8 48 11 52 14" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* ---- Silhueta de montanhas (fundo — bottom) ---- */}
      <motion.div
        className="absolute bottom-0 left-0 w-full opacity-[0.06]"
        style={{ y: y2 }}
      >
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 200V140L120 90L240 120L360 60L480 100L600 40L720 80L840 30L960 70L1080 50L1200 90L1320 55L1440 100V200H0Z"
            fill="url(#mountainGrad)"
          />
          <defs>
            <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="200">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ---- Brilhos (simula ar limpo de altitude) ---- */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full animate-shimmer"
          style={{
            width: `${1.5 + Math.random() * 2.5}px`,
            height: `${1.5 + Math.random() * 2.5}px`,
            top: `${5 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            backgroundColor: i % 3 === 0
              ? `rgba(147, 197, 253, ${0.15 + Math.random() * 0.2})`
              : i % 3 === 1
                ? `rgba(196, 181, 253, ${0.1 + Math.random() * 0.15})`
                : `rgba(255, 255, 255, ${0.1 + Math.random() * 0.15})`,
            animationDelay: `${i * 0.4}s`,
            y: useTransform(scrollProgress, [0, 1], [0, -(15 + i * 12)]),
          }}
        />
      ))}
    </div>
  );
}
