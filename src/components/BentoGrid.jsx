import { motion } from "framer-motion";

/**
 * BentoGrid
 * Layout assimétrico estilo marmita japonesa (bento box).
 * Cada célula entra com efeito stagger animado.
 *
 * Uso:
 * ```jsx
 * <BentoGrid>
 *   <BentoItem span="large">  // 2 colunas
 *   <BentoItem span="tall">   // 2 linhas
 *   <BentoItem>                // 1x1 padrão
 * </BentoGrid>
 * ```
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - BentoItems
 * @param {string} props.className - Classes adicionais
 */
export function BentoGrid({ children, className = "" }) {
  return (
    <motion.div
      className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * BentoItem
 * Célula individual do BentoGrid.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {"default"|"large"|"tall"|"wide"} props.span
 * @param {string} props.className
 */
export function BentoItem({
  children,
  span = "default",
  className = "",
}) {
  const spanClasses = {
    default: "",
    large: "col-span-2 row-span-2",
    tall: "row-span-2",
    wide: "col-span-2",
  };

  return (
    <motion.div
      className={`glass-card overflow-hidden ${spanClasses[span]} ${className}`}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
