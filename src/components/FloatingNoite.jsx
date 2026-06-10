import { motion, useTransform } from "framer-motion";

export default function FloatingNoite({ scrollProgress }) {
  const starY1 = useTransform(scrollProgress, [0, 1], [0, -60]);
  const starY2 = useTransform(scrollProgress, [0, 1], [0, -90]);
  const moonY = useTransform(scrollProgress, [0, 1], [0, -40]);
  const moonRotate = useTransform(scrollProgress, [0, 1], [-10, 15]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

      <motion.div
        className="absolute top-[8%] right-[12%]"
        style={{ y: moonY, rotate: moonRotate }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
          <path
            d="M50 10 C30 10 15 25 15 45 C15 65 30 78 50 78 C35 70 28 55 28 45 C28 30 38 15 50 10Z"
            fill="#FBBF24"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[15%] left-[18%] animate-shimmer"
        style={{ y: starY1 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-15">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#E9D5FF"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[22%] right-[30%] animate-shimmer"
        style={{ y: starY2, animationDelay: "1.5s" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-10">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#C4B5FD"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[10%] left-[45%] animate-shimmer"
        style={{ animationDelay: "3s" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" className="opacity-12">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#FDE68A"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] left-[8%] animate-shimmer"
        style={{ animationDelay: "2s" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-10">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#E9D5FF"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[35%] right-[8%] animate-float-slow opacity-10"
        style={{ y: starY1 }}
      >
        <span className="text-3xl text-purple-300/40 font-display font-bold select-none">
          z
        </span>
      </motion.div>

      <motion.div
        className="absolute top-[28%] right-[5%] animate-float opacity-8"
      >
        <span className="text-xl text-purple-300/25 font-display font-bold select-none">
          z
        </span>
      </motion.div>

      <motion.div
        className="absolute top-[40%] right-[11%] animate-float opacity-6"
        style={{ animationDelay: "2s" }}
      >
        <span className="text-lg text-purple-300/20 font-display font-bold select-none">
          z
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[15%] opacity-[0.06]"
        style={{ y: starY2 }}
      >
        <svg width="100" height="60" viewBox="0 0 100 60">
          <rect
            x="5" y="10" width="90" height="40" rx="20" ry="20"
            fill="#E9D5FF" stroke="#C4B5FD" strokeWidth="1"
          />
          <line x1="30" y1="20" x2="30" y2="40" stroke="#C4B5FD" strokeWidth="0.5" opacity="0.5" />
          <line x1="70" y1="20" x2="70" y2="40" stroke="#C4B5FD" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[45%] right-[40%] animate-shimmer"
        style={{ animationDelay: "4s" }}
      >
        <svg width="8" height="8" viewBox="0 0 24 24" className="opacity-8">
          <circle cx="12" cy="12" r="3" fill="#FDE68A" />
        </svg>
      </motion.div>
    </div>
  );
}
