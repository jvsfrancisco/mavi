import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useScrollProgress(options = {}) {
  const ref = useRef(null);
  const { offset = ["start end", "end start"] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.95]);

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return { ref, scrollYProgress, opacity, scale, y };
}

export function useSectionInView() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { ref, scrollYProgress };
}
