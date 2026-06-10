import { motion, useTransform } from "framer-motion";
import { Leaf, Crown, Mountain } from "lucide-react";

/**
 * FloatingPetropolis
 * Elementos decorativos flutuantes temáticos:
 * Coroa (Cidade Imperial), Montanha (Serra) e Folhas (Colheita de morango)
 */
export default function FloatingPetropolis({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -60]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 60]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -60]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* 👑 Coroa (Imperial) */}
      <motion.div
        className="absolute top-[15%] right-[15%] text-amber-500/20"
        style={{ y: y1, rotate: rotate1 }}
      >
        <Crown className="w-16 h-16" />
      </motion.div>

      {/* ⛰️ Montanha (Serra) */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] text-emerald-500/10"
        style={{ y: y2, rotate: rotate2 }}
      >
        <Mountain className="w-24 h-24" />
      </motion.div>

      {/* 🍃 Folha (Morango do Vale) */}
      <motion.div
        className="absolute top-[40%] left-[20%] text-rose-500/15"
        style={{ y: y3, rotate: rotate2 }}
      >
        <Leaf className="w-10 h-10" />
      </motion.div>

      {/* 🍃 Folha 2 */}
      <motion.div
        className="absolute bottom-[30%] right-[25%] text-emerald-500/15"
        style={{ y: y1, rotate: rotate1 }}
      >
        <Leaf className="w-12 h-12" />
      </motion.div>
    </div>
  );
}
