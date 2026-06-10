import { motion } from "framer-motion";

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
