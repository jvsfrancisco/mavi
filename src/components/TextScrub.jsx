import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextScrub({
  text,
  className = "",
  wordClassName = "",
  startOpacity = 0.12,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`inline ${className}`}>
      {words.map((word, i) => {

        const start = i / words.length;
        const end = (i + 1) / words.length;

        return (
          <Word
            key={`${word}-${i}`}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            startOpacity={startOpacity}
            className={wordClassName}
          />
        );
      })}
    </span>
  );
}

function Word({ word, range, progress, startOpacity, className }) {
  const opacity = useTransform(progress, range, [startOpacity, 1]);

  return (
    <motion.span
      className={`inline-block mr-[0.25em] transition-none ${className}`}
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}
