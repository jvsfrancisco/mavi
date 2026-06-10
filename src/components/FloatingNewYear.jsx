import { motion, useTransform } from "framer-motion";

export default function FloatingNewYear({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -50]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -45]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

      <motion.div
        className="absolute top-[10%] right-[20%] animate-pulse"
        style={{ y: y1, rotate: rotate1 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" className="opacity-20">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#FDE047" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] left-[10%] animate-shimmer"
        style={{ y: y2, rotate: rotate2 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" className="opacity-15">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#E2E8F0" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[30%] left-[15%] animate-shimmer"
        style={{ y: y3, animationDelay: "1s" }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" className="opacity-30">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#FEF08A" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[15%] animate-shimmer"
        style={{ y: y1, animationDelay: "2s" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-20">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#CBD5E1" />
        </svg>
      </motion.div>
    </div>
  );
}
