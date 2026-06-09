import { motion, useTransform } from "framer-motion";

/**
 * FloatingLagoa
 * Elementos decorativos para a Lagoa Rodrigo de Freitas.
 * Ondas, rodas de bicicleta, engrenagens quebradas e pedalinhos em SVG.
 */
export default function FloatingLagoa({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -110]);
  const wheelRotate = useTransform(scrollProgress, [0, 1], [0, 360]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* 🌊 Onda 1 */}
      <motion.div
        className="absolute top-[10%] left-[8%] md:left-[15%]"
        style={{ y: y1 }}
      >
        <svg width="60" height="20" viewBox="0 0 60 20" className="opacity-[0.15]">
          <path d="M0 10 Q 15 0, 30 10 T 60 10" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 🌊 Onda 2 */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] md:right-[20%] animate-float-slow"
        style={{ y: y2 }}
      >
        <svg width="40" height="15" viewBox="0 0 60 20" className="opacity-[0.12]">
          <path d="M0 10 Q 15 0, 30 10 T 60 10" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 🚲 Roda de bicicleta */}
      <motion.div
        className="absolute top-[25%] right-[5%] md:right-[10%]"
        style={{ y: y3, rotate: wheelRotate }}
      >
        <svg width="45" height="45" viewBox="0 0 50 50" className="opacity-[0.08]">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#0284c7" strokeWidth="2" />
          <circle cx="25" cy="25" r="4" fill="#0284c7" />
          <line x1="25" y1="5" x2="25" y2="45" stroke="#0284c7" strokeWidth="1" />
          <line x1="5" y1="25" x2="45" y2="25" stroke="#0284c7" strokeWidth="1" />
          <line x1="10" y1="10" x2="40" y2="40" stroke="#0284c7" strokeWidth="1" />
          <line x1="10" y1="40" x2="40" y2="10" stroke="#0284c7" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* 🦢 Pedalinho (Cisne simplificado) */}
      <motion.div
        className="absolute bottom-[35%] left-[5%] md:left-[12%] animate-float"
        style={{ y: y1 }}
      >
        <svg width="40" height="35" viewBox="0 0 40 35" className="opacity-10">
          <path d="M5 25 C 10 35, 30 35, 35 25 L 30 15 L 25 15 L 20 20 C 15 20, 10 15, 12 5 C 15 0, 5 0, 5 5 C 5 10, 8 15, 5 25 Z" fill="#e0f2fe" />
        </svg>
      </motion.div>

      {/* ⚙️ Engrenagem Quebrada (Pedal quebrado) */}
      <motion.div
        className="absolute top-[45%] right-[30%] md:right-[35%] animate-shimmer"
        style={{ animationDelay: "2s" }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-[0.12]">
          <circle cx="15" cy="15" r="8" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5,2" />
          <line x1="15" y1="15" x2="25" y2="5" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* 💧 Gotas d'água */}
      <motion.div
        className="absolute top-[20%] left-[45%] md:left-[55%] animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        <svg width="10" height="15" viewBox="0 0 12 18" className="opacity-[0.08]">
          <path d="M6 0 C6 0 0 10 0 12 C0 15.3 2.7 18 6 18 C9.3 18 12 15.3 12 12 C12 10 6 0 6 0Z" fill="#bae6fd" />
        </svg>
      </motion.div>
    </div>
  );
}
