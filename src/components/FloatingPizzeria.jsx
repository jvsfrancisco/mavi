import { motion, useTransform } from "framer-motion";

/**
 * FloatingPizzeria
 * Elementos SVG flutuantes temáticos de pizzaria:
 * - Fatias de pizza
 * - Vela/chama (clima intimista)
 * - Folhas de manjericão
 * - Estrelinhas decorativas
 *
 * @param {object} props
 * @param {import("framer-motion").MotionValue} props.scrollProgress
 */
export default function FloatingPizzeria({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -70]);
  const x1 = useTransform(scrollProgress, [0, 1], [0, 25]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, -30]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -10]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ---- Fatia de Pizza (top-right) ---- */}
      <motion.div
        className="absolute top-[12%] right-[8%] animate-float"
        style={{ y: y1, x: x1, rotate: rotate1 }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 drop-shadow-lg">
          {/* Fatia triangular */}
          <path d="M45 8L80 78H10L45 8Z" fill="#D97706" opacity="0.85" />
          {/* Borda da crosta */}
          <path d="M10 78C10 78 20 85 45 85C70 85 80 78 80 78" stroke="#92400E" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
          {/* Queijo derretido */}
          <path d="M45 20L72 72H18L45 20Z" fill="#FBBF24" opacity="0.6" />
          {/* Pepperoni */}
          <circle cx="40" cy="50" r="5" fill="#DC2626" opacity="0.7" />
          <circle cx="55" cy="60" r="4.5" fill="#DC2626" opacity="0.6" />
          <circle cx="35" cy="65" r="4" fill="#B91C1C" opacity="0.7" />
          {/* Manjericão */}
          <ellipse cx="48" cy="42" rx="4" ry="2.5" fill="#22C55E" opacity="0.5" transform="rotate(-20 48 42)" />
        </svg>
      </motion.div>

      {/* ---- Fatia de Pizza menor (bottom-left) ---- */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] animate-float-slow"
        style={{ y: y2, x: x2, rotate: rotate2 }}
      >
        <svg width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15 drop-shadow-lg">
          <path d="M45 8L80 78H10L45 8Z" fill="#D97706" opacity="0.85" />
          <path d="M10 78C10 78 20 85 45 85C70 85 80 78 80 78" stroke="#92400E" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M45 20L72 72H18L45 20Z" fill="#FBBF24" opacity="0.5" />
          <circle cx="45" cy="55" r="5" fill="#DC2626" opacity="0.6" />
          <circle cx="35" cy="62" r="3.5" fill="#B91C1C" opacity="0.5" />
        </svg>
      </motion.div>

      {/* ---- Vela com chama (clima intimista — center-left) ---- */}
      <motion.div
        className="absolute top-[35%] left-[12%] animate-float"
        style={{ y: y3 }}
      >
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          {/* Corpo da vela */}
          <rect x="14" y="30" width="12" height="40" rx="2" fill="#FDE68A" opacity="0.6" />
          <rect x="16" y="32" width="8" height="38" rx="1" fill="#FEF3C7" opacity="0.3" />
          {/* Pavio */}
          <line x1="20" y1="22" x2="20" y2="30" stroke="#78716C" strokeWidth="1.5" opacity="0.5" />
          {/* Chama */}
          <ellipse cx="20" cy="18" rx="5" ry="8" fill="#F97316" opacity="0.7" />
          <ellipse cx="20" cy="16" rx="3" ry="5" fill="#FBBF24" opacity="0.8" />
          <ellipse cx="20" cy="14" rx="1.5" ry="3" fill="#FEF3C7" opacity="0.9" />
          {/* Brilho da chama */}
          <circle cx="20" cy="15" r="12" fill="#F97316" opacity="0.08" />
        </svg>
      </motion.div>

      {/* ---- Folhas de Manjericão (top-left) ---- */}
      <motion.div
        className="absolute top-[20%] left-[25%] animate-float-slow"
        style={{ y: y1, rotate: rotate2 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
          <path d="M25 5C15 15 5 25 10 35C15 45 30 40 35 30C40 20 35 5 25 5Z" fill="#22C55E" opacity="0.6" />
          <path d="M25 5C25 5 22 20 15 30" stroke="#16A34A" strokeWidth="1" opacity="0.4" fill="none" />
          <path d="M25 5C25 5 27 18 30 25" stroke="#16A34A" strokeWidth="0.8" opacity="0.3" fill="none" />
        </svg>
      </motion.div>

      {/* ---- Segunda folha (bottom-right) ---- */}
      <motion.div
        className="absolute bottom-[30%] right-[15%] animate-float"
        style={{ y: y2, rotate: rotate1 }}
      >
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path d="M25 5C15 15 5 25 10 35C15 45 30 40 35 30C40 20 35 5 25 5Z" fill="#22C55E" opacity="0.6" />
          <path d="M25 5C25 5 22 20 15 30" stroke="#16A34A" strokeWidth="1" opacity="0.3" fill="none" />
        </svg>
      </motion.div>

      {/* ---- Brilhos quentes (simula luz de velas) ---- */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full animate-shimmer"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            top: `${10 + Math.random() * 75}%`,
            left: `${5 + Math.random() * 90}%`,
            backgroundColor: i % 2 === 0
              ? `rgba(251, 191, 36, ${0.15 + Math.random() * 0.2})`
              : `rgba(249, 115, 22, ${0.1 + Math.random() * 0.15})`,
            animationDelay: `${i * 0.6}s`,
            y: useTransform(scrollProgress, [0, 1], [0, -(20 + i * 15)]),
          }}
        />
      ))}
    </div>
  );
}
