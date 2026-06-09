import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

/**
 * GlassCard
 * Card com efeito Glassmorphism + Tilt 3D interativo.
 *
 * O card se inclina suavemente seguindo a posição do cursor,
 * com um brilho de luz (sheen) passando pela superfície do vidro.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className - Classes adicionais
 * @param {"default"|"subtle"} props.variant - Estilo do glass
 * @param {number} props.delay - Delay da animação de entrada
 * @param {boolean} props.tilt - Ativar efeito tilt 3D (default: true)
 * @param {number} props.tiltStrength - Força da inclinação em graus (default: 8)
 */
export default function GlassCard({
  children,
  className = "",
  variant = "default",
  delay = 0,
  tilt = true,
  tiltStrength = 8,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const baseClass = variant === "subtle" ? "glass-card-subtle" : "glass-card";

  // Motion values para tilt — raw
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Suavização spring
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformar posição do mouse em rotação
  const rotateX = useTransform(smoothY, [0, 1], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltStrength, tiltStrength]);

  // Posição do brilho (sheen) no vidro
  const sheenX = useTransform(smoothX, [0, 1], ["-50%", "150%"]);
  const sheenY = useTransform(smoothY, [0, 1], ["-50%", "150%"]);

  const handleMouseMove = (e) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`${baseClass} ${className} overflow-hidden relative`}
      style={{
        transformStyle: tilt ? "preserve-3d" : undefined,
        perspective: tilt ? "800px" : undefined,
        rotateX: tilt ? rotateX : undefined,
        rotateY: tilt ? rotateY : undefined,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sheen — brilho de luz que segue o cursor */}
      {tilt && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10 overflow-hidden"
          style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <motion.div
            className="absolute w-[200%] h-[200%]"
            style={{
              left: sheenX,
              top: sheenY,
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 55%)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      )}

      {/* Conteúdo */}
      {children}
    </motion.div>
  );
}
