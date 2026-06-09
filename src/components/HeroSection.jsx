import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { useRef } from "react";

/**
 * HeroSection
 * Tela de abertura — a primeira coisa que ela vê.
 * Título grande + coração animado + seta indicando scroll.
 */
export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax no título conforme rola
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* ---- Glows de fundo ---- */}
      <div className="glow w-[500px] h-[500px] bg-sunset-orange/20 -top-20 -left-20 absolute" />
      <div className="glow w-[400px] h-[400px] bg-sunset-rose/15 bottom-20 right-10 absolute" />
      <div className="glow w-[600px] h-[600px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

      {/* ---- Conteúdo Central ---- */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {/* Coração animado */}
        <motion.div
          className="mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            <Heart
              className="w-16 h-16 mx-auto text-sunset-rose fill-sunset-rose drop-shadow-[0_0_30px_rgba(251,113,133,0.5)]"
            />
          </motion.div>
        </motion.div>

        {/* Subtítulo acima */}
        <motion.p
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/50 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Um ano de
        </motion.p>

        {/* Título principal */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block bg-gradient-to-r from-sunset-orange via-sunset-rose to-sunset-amber bg-clip-text text-transparent">
            Nós Dois
          </span>
        </motion.h1>

        {/* Subtítulo abaixo */}
        <motion.p
          className="font-sans text-lg md:text-xl text-white/40 mt-6 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Tudo que a gente viveu nesse primeiro ano. Cada rolê, cada momento.
        </motion.p>

        {/* Linha do tempo decorativa */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-xs text-white/30 tracking-widest uppercase">Role para baixo</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </motion.div>

      {/* ---- Seta de scroll animada ---- */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.div>

      {/* ---- Partículas flutuantes decorativas ---- */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `rgba(251, 113, 133, ${0.1 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -(20 + Math.random() * 40), 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
