import { motion } from "framer-motion";
import { useState } from "react";

export default function OrganicPhoto({
  src,
  alt = "",
  className = "",
  size = 400,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const clipId = `organic-clip-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <motion.path
              animate={{
                d: [

                  "M320,200 C320,280 270,350 200,350 C130,350 60,290 60,200 C60,110 120,50 200,50 C280,50 320,120 320,200",

                  "M330,190 C340,270 280,340 200,345 C120,340 55,280 50,200 C55,115 110,55 200,50 C290,55 325,110 330,190",

                  "M315,210 C310,290 260,355 200,350 C135,345 65,285 65,200 C65,115 130,45 200,55 C275,60 325,130 315,210",

                  "M320,200 C320,280 270,350 200,350 C130,350 60,290 60,200 C60,110 120,50 200,50 C280,50 320,120 320,200",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </clipPath>
        </defs>

        <image
          href={src}
          width="400"
          height="400"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
          style={{
            filter: isHovered
              ? "saturate(1.15) brightness(1.05)"
              : "saturate(0.7) brightness(0.9) blur(0.5px)",
            transition: "filter 0.5s ease",
          }}
        />

        <motion.path
          animate={{
            d: [
              "M320,200 C320,280 270,350 200,350 C130,350 60,290 60,200 C60,110 120,50 200,50 C280,50 320,120 320,200",
              "M330,190 C340,270 280,340 200,345 C120,340 55,280 50,200 C55,115 110,55 200,50 C290,55 325,110 330,190",
              "M315,210 C310,290 260,355 200,350 C135,345 65,285 65,200 C65,115 130,45 200,55 C275,60 325,130 315,210",
              "M320,200 C320,280 270,350 200,350 C130,350 60,290 60,200 C60,110 120,50 200,50 C280,50 320,120 320,200",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
      </svg>

      <div
        className="absolute inset-[10%] rounded-full transition-all duration-500 -z-10"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(251,113,133,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(251,113,133,0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </motion.div>
  );
}
