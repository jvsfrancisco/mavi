import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Moon } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingNoite from "../components/FloatingNoite";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

/**
 * Event05_NoiteEmCasa
 * 🌙 Longe dos perigos noturnos — noite aconchegante em casa
 *
 * Layout diferenciado: Polaroids espalhadas na cama
 * As 3 fotos ficam empilhadas com rotações diferentes.
 * Ao clicar em uma, ela "sobe" pra frente com animação suave.
 */

/** Fotos espalhadas como polaroids */
const POLAROIDS = [
  {
    src: "/photos/date-5.png",
    alt: "Nós dois deitados juntinhos",
    caption: "chamego",
    rotation: -12,
    offset: { x: -160, y: 30 },
  },
  {
    src: "/photos/date-5.2.png",
    alt: "Sorrindo na cama",
    caption: "sorrisão",
    rotation: 0,
    offset: { x: 0, y: -10 },
  },
  {
    src: "/photos/date-5.3.png",
    alt: "Noite tranquila juntinhos",
    caption: "paz",
    rotation: 12,
    offset: { x: 160, y: 30 },
  },
];

export default function Event05_NoiteEmCasa() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // foto do meio na frente

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const photosScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 1, 1, 0.95]
  );

  /** Traz a foto clicada pra frente */
  const bringToFront = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="event-05"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* ---- Background (noite escura, aconchegante) ---- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              180deg,
              #0d0b1a 0%,
              #1a1033 30%,
              #231547 45%,
              #1f1240 60%,
              #170d30 75%,
              #0d0b1a 100%,)`,
            opacity: 0.7,
          }}
        />
        {/* Glows suaves e quentes */}
        <div className="glow w-[500px] h-[500px] bg-purple-600/15 top-1/3 -left-20 absolute" />
        <div className="glow w-[400px] h-[400px] bg-indigo-500/10 bottom-1/4 right-10 absolute" />
        <div className="glow w-[300px] h-[300px] bg-pink-500/10 top-1/4 right-1/3 absolute" />
      
        {/* ---- Fade inferior para transição com próxima seção ---- */}
        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #000000)',
          }}
        />
      </div>

      {/* ---- Elementos flutuantes (estrelas, lua, zzz) ---- */}
      <FloatingNoite scrollProgress={scrollYProgress} />

      {/* ---- Conteúdo ---- */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* ---- Badge ---- */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 05
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-purple-400">
              Noite em Casa
            </span>
          </div>
        </motion.div>

        {/* ---- Título com Text Scrubbing ---- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Longe dos perigos noturnos"
              wordClassName="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">Em casa, juntinhos</span>
          </motion.div>
        </div>

        {/* ---- Polaroids espalhadas (tela cheia, em cima do texto) ---- */}
        <motion.div
          className="relative h-[420px] md:h-[500px] mb-10"
          style={{ scale: photosScale }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {POLAROIDS.map((photo, index) => {
              const isActive = activeIndex === index;
              const zIndex = isActive ? 30 : 10 + index;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{ zIndex }}
                  initial={{
                    opacity: 0,
                    rotate: photo.rotation,
                    x: photo.offset.x,
                    y: photo.offset.y,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    rotate: isActive ? 0 : photo.rotation,
                    x: photo.offset.x,
                    y: isActive ? photo.offset.y - 20 : photo.offset.y,
                    scale: isActive ? 1.05 : 0.85,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  animate={{
                    rotate: isActive ? 0 : photo.rotation,
                    x: photo.offset.x,
                    y: isActive ? photo.offset.y - 20 : photo.offset.y,
                    scale: isActive ? 1.05 : 0.85,
                    filter: isActive
                      ? "brightness(1) saturate(1)"
                      : "brightness(0.55) saturate(0.5)",
                  }}
                  whileHover={{
                    scale: isActive ? 1.08 : 0.9,
                    y: isActive ? photo.offset.y - 25 : photo.offset.y - 10,
                    filter: "brightness(0.9) saturate(0.8)",
                  }}
                  onClick={() => bringToFront(index)}
                >
                  {/* Polaroid frame */}
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl p-2 pb-7 shadow-2xl shadow-black/50">
                    <div className="w-[200px] h-[260px] md:w-[230px] md:h-[300px] rounded-lg overflow-hidden">
                      <img loading="lazy" decoding="async"
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <p className="text-center mt-1.5 text-white/25 text-[11px] font-display italic tracking-wide">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Indicador sutil */}
          <motion.p
            className="absolute -bottom-2 left-0 right-0 text-center text-white/15 text-xs tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            CLIQUE NAS FOTOS
          </motion.p>
        </motion.div>

        {/* ---- Texto (abaixo das polaroids, largura total) ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <GlassCard className="p-6 md:p-8" delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white/90">
                  Noite em casa
                </h3>
                <p className="text-xs text-white/40">O melhor programa</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              Não precisa de restaurante, mirante ou pôr do sol. Às vezes o
              melhor programa é ficar deitado de pijama, com a cara amassada
              no travesseiro, grudado em você. A gente ficou ali, juntinho,
              sem pressa de nada. Sem roteiro, sem plano. Só a gente e o
              silêncio bom.
            </p>
          </GlassCard>

          <div className="flex flex-col gap-6">
            <GlassCard className="p-6 md:p-8" variant="subtle" delay={0.5}>
              <p className="text-white/50 leading-relaxed text-sm md:text-base italic">
                "Longe dos perigos noturnos, porque o perigo era a gente.
                Você com aquele pijamão, cabelo bagunçado, e eu
                pensando: é isso. É exatamente isso."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-400/30 to-transparent" />
                <motion.span
                  className="text-purple-300/50 text-xs select-none cursor-pointer"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  onClick={() => {
                    // Dim lights - escurece a seção por 2s
                    const section = document.getElementById('event-05');
                    if (!section) return;
                    const overlay = document.createElement('div');
                    overlay.style.cssText = 'position:absolute;inset:0;background:black;z-index:50;opacity:0;transition:opacity 0.8s ease;pointer-events:none;border-radius:inherit;';
                    section.style.position = 'relative';
                    section.appendChild(overlay);
                    requestAnimationFrame(() => { overlay.style.opacity = '0.7'; });
                    setTimeout(() => { overlay.style.opacity = '0'; }, 1500);
                    setTimeout(() => { overlay.remove(); }, 2300);
                  }}
                  title="Apaga a luz 💤"
                >
                  🌙💤
                </motion.span>
                <div className="h-px flex-1 bg-gradient-to-l from-purple-400/30 to-transparent" />
              </div>
            </GlassCard>

            {/* Mini-card + Magnetic */}
            <MagneticElement strength={20}>
              <motion.div
                className="flex items-center gap-4 glass-card-subtle px-5 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="text-2xl">🛏️</span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">
                    Vibe da noite
                  </p>
                  <p className="text-sm text-white/60 font-medium">
                    Pijama + chamego + paz total
                  </p>
                </div>
              </motion.div>
            </MagneticElement>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
