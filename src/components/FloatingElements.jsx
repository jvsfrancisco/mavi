import { motion, useTransform } from "framer-motion";

export default function FloatingElements({ scrollProgress }) {

  const y1 = useTransform(scrollProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollProgress, [0, 1], [0, 30]);
  const x2 = useTransform(scrollProgress, [0, 1], [0, -20]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <motion.div
        className="absolute bottom-0 left-0 w-[200%] opacity-20"
        style={{ y: y1 }}
      >
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-wave">
          <path
            d="M0 80C240 20 480 140 720 80C960 20 1200 140 1440 80V200H0V80Z"
            fill="url(#waveGrad1)"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="1440" y2="200">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 w-[200%] opacity-10"
        style={{ y: y2 }}
      >
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-wave" style={{ animationDuration: "18s" }}>
          <path
            d="M0 60C360 120 720 0 1080 60C1260 90 1440 40 1440 40V160H0V60Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="1440" y2="160">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[15%] right-[10%] animate-float"
        style={{ y: y3, x: x1 }}
      >
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25 drop-shadow-lg">

          <rect x="15" y="30" width="50" height="60" rx="4" fill="#DC2626" opacity="0.8" />
          <rect x="18" y="33" width="44" height="20" rx="2" fill="#FDE68A" opacity="0.4" />

          <rect x="22" y="10" width="6" height="35" rx="3" fill="#FCD34D" transform="rotate(-8 25 25)" />
          <rect x="32" y="5" width="6" height="38" rx="3" fill="#FBBF24" transform="rotate(3 35 24)" />
          <rect x="42" y="8" width="6" height="36" rx="3" fill="#FCD34D" transform="rotate(10 45 26)" />
          <rect x="52" y="12" width="6" height="32" rx="3" fill="#F59E0B" transform="rotate(15 55 28)" />
          <rect x="27" y="7" width="5" height="33" rx="2.5" fill="#FDE68A" transform="rotate(-3 29 23)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[8%] animate-float-slow"
        style={{ y: y2, x: x2 }}
      >
        <svg width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 drop-shadow-lg">

          <path d="M10 28C10 14 25 5 45 5C65 5 80 14 80 28H10Z" fill="#D97706" opacity="0.9" />

          <ellipse cx="35" cy="16" rx="3" ry="2" fill="#FDE68A" opacity="0.6" />
          <ellipse cx="50" cy="13" rx="3" ry="2" fill="#FDE68A" opacity="0.6" />
          <ellipse cx="60" cy="19" rx="3" ry="2" fill="#FDE68A" opacity="0.6" />

          <path d="M8 32C8 32 20 36 45 36C70 36 82 32 82 32V28H8V32Z" fill="#22C55E" opacity="0.6" />

          <rect x="12" y="34" width="66" height="10" rx="3" fill="#92400E" opacity="0.8" />

          <path d="M10 44L14 50H76L80 44H10Z" fill="#FBBF24" opacity="0.7" />

          <path d="M12 50H78C78 58 65 65 45 65C25 65 12 58 12 50Z" fill="#D97706" opacity="0.8" />
        </svg>
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white animate-shimmer"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            top: `${10 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${i * 0.5}s`,
            y: useTransform(scrollProgress, [0, 1], [0, -(30 + i * 20)]),
          }}
        />
      ))}
    </div>
  );
}
