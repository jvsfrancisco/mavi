import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * MagneticElement
 * Wrapper que faz o elemento filho ser "puxado" em direção ao cursor
 * quando o mouse se aproxima — como se fosse um ímã.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.strength - Força magnética em pixels (default: 15)
 * @param {string} props.className - Classes CSS adicionais
 */
export default function MagneticElement({
  children,
  strength = 15,
  className = "",
}) {
  const ref = useRef(null);

  // Posição magnética
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring suave para o retorno
  const springConfig = { stiffness: 200, damping: 15, mass: 0.3 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distância do cursor ao centro do elemento
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Aplicar força magnética (proporcional à distância)
    x.set(deltaX * (strength / 100));
    y.set(deltaY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
