import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * useScrollProgress
 * Hook que retorna o progresso do scroll de um elemento (0 → 1)
 * e valores derivados como opacidade e escala.
 *
 * @param {object} options
 * @param {string[]} options.offset - Offset de início/fim do scroll
 * @returns {{ ref, scrollYProgress, opacity, scale, y }}
 */
export function useScrollProgress(options = {}) {
  const ref = useRef(null);
  const { offset = ["start end", "end start"] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Fade in quando entra na viewport, fade out quando sai
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Escala sutil ao entrar
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.95]);

  // Parallax vertical sutil
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return { ref, scrollYProgress, opacity, scale, y };
}

/**
 * useSectionInView
 * Detecta quando uma seção está visível e retorna o progresso
 * para controlar transições de cor de fundo.
 */
export function useSectionInView() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { ref, scrollYProgress };
}
