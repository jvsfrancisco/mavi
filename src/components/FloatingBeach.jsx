import { motion, useTransform } from "framer-motion";

export default function FloatingBeach({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -50]);
  const x1 = useTransform(scrollProgress, [0, 1], [0, 30]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, -20]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -15]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

      <motion.div
        className="absolute top-[10%] right-[15%]"
        style={{ y: y1, rotate: rotate1 }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-15">
          <circle cx="50" cy="50" r="25" fill="#FDE047" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29" stroke="#FDE047" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[10%]"
        style={{ y: y2, x: x1, rotate: rotate2 }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-10">
          <path d="M50 80 C20 80 10 50 30 30 C40 20 60 20 70 30 C90 50 80 80 50 80 Z" fill="#67E8F9" />
          <path d="M50 80 L50 30 M30 70 L40 30 M70 70 L60 30" stroke="#083344" strokeWidth="2" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[30%] left-[12%]"
        style={{ y: y3, x: x2 }}
      >
        <svg width="50" height="20" viewBox="0 0 100 40" className="opacity-10">
          <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] right-[8%]"
        style={{ y: y1, x: x1 }}
      >
        <svg width="60" height="25" viewBox="0 0 100 40" className="opacity-[0.08]">
          <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="#7DD3FC" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[35%]"
        style={{ y: y2 }}
      >
        <svg width="30" height="15" viewBox="0 0 100 40" className="opacity-10">
          <path d="M10 20 Q 30 0, 50 20 Q 70 0, 90 20" fill="none" stroke="#E0F2FE" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[25%] animate-shimmer"
        style={{ animationDelay: "1s" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-20">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#FDE047" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[25%] animate-shimmer"
        style={{ animationDelay: "2.5s" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" className="opacity-15">
          <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" fill="#67E8F9" />
        </svg>
      </motion.div>
    </div>
  );
}
