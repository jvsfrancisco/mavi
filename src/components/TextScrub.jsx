import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * TextScrub
 * Componente estilo Apple que "acende" cada palavra conforme o scroll avança.
 * As palavras começam com opacidade baixa e ganham opacidade total em sequência,
 * sincronizadas com a posição do scroll do usuário.
 *
 * @param {object} props
 * @param {string} props.text - O texto a ser revelado
 * @param {string} props.className - Classes CSS do container
 * @param {string} props.wordClassName - Classes CSS de cada palavra
 * @param {number} props.startOpacity - Opacidade inicial das palavras (default: 0.12)
 */
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
        // Cada palavra "acende" em um trecho do scroll
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

/**
 * Word individual — controla a opacidade com base na posição do scroll
 */
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
