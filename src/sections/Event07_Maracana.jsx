import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Trophy, Heart, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

/**
 * Event07_Maracana
 * ⚽ Botafogo x Flamengo no Maracanã
 * Tema de rivalidade (Preto/Branco vs Vermelho/Preto), mas com muito amor.
 */
export default function Event07_Maracana() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax simples
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="event-07"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* ---- Background (Rivalidade) ---- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              135deg,
              #1a1a1a 0%,
              #3f0000 60%,
              #1a0505 100%)`,
            opacity: 0.8,
          }}
        />
        {/* Glows */}
        <div className="glow w-[400px] h-[400px] bg-white/5 top-1/4 -left-10 absolute" />
        <div className="glow w-[500px] h-[500px] bg-red-600/10 bottom-1/4 -right-20 absolute" />
      
        {/* ---- Fade inferior para transição com próxima seção ---- */}
        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #042f2e)',
          }}
        />
      </div>

      {/* ---- Conteúdo ---- */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* ---- Badge ---- */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
            <Calendar className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 07
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-red-400">
              Clássico no Maraca
            </span>
          </div>
        </motion.div>

        {/* ---- Título ---- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight flex flex-col md:flex-row items-center justify-center gap-3">
            <TextScrub
              text="Botafogo"
              wordClassName="text-white drop-shadow-md"
            />
            <span className="text-2xl md:text-5xl text-white/30 italic font-light mx-2">
              vs
            </span>
            <TextScrub
              text="Flamengo"
              wordClassName="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-md"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">Maracanã, RJ</span>
          </motion.div>
        </div>

        {/* ---- Bento Grid Rivalidade ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Card Principal de Texto (Esquerda, 6 colunas) */}
          <motion.div
            className="md:col-span-6 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              <Trophy className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03] rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-red-900 flex items-center justify-center border border-white/10 shrink-0">
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    O Clássico da Rivalidade
                  </h3>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    Amor em campo neutro
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Eu sou Botafoguense apaixonado. Ela? Flamenguista mais ou menos. Juntar
                  nós dois num clássico no Maracanã era receita para confusão, mas
                  acabou sendo um dos dias mais incríveis.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  No fim das contas, não importava muito quem ia ganhar o jogo (bom,
                  claro que importava), mas sim a parceria de viver aquela
                  emoção gigante juntos, dividindo a tensão e as provocações.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span
                    className="text-red-400/50 text-xs easter-egg-trigger select-none flex items-center gap-2 cursor-pointer px-3 py-1 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    onClick={() => {
                      const end = Date.now() + 2000;
                      (function frame() {
                        confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#FFFFFF", "#111111"] });
                        confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#EF4444", "#111111"] });
                        if (Date.now() < end) requestAnimationFrame(frame);
                      })();
                    }}
                    title="Grito de gol!"
                  >
                    ⚽🔥 Gol!
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-red-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Coluna da Direita (6 colunas combinando Vídeo e Fotos) */}
          <div className="md:col-span-6 flex flex-col gap-6 h-full">
            
            {/* Vídeo do Date */}
            <motion.div 
              className="w-full shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-3 relative group w-full">
                <div className="relative rounded-[16px] overflow-hidden aspect-[16/9] w-full bg-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                  <iframe
                    src="https://www.youtube.com/embed/-U_4-zkZODo?autoplay=0&loop=1&playlist=-U_4-zkZODo&controls=0&modestbranding=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                  {/* Overlay sutil para esconder título do YouTube */}
                  <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-black/95 to-transparent pointer-events-none z-10" />
                </div>
                {/* Legenda do vídeo */}
                <div className="mt-3 px-2 pb-1 shrink-0">
                  <p className="text-xs text-white/30 font-medium tracking-wide text-center">
                    ⚽ Clima de jogo
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Fotos com a camisa - EMPILHADAS HORIZONTALMENTE */}
            <motion.div
              className="flex flex-col gap-4 flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative w-full h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img loading="lazy" decoding="async"
                  src="/photos/date-6.2.png"
                  alt="Nós com as camisas dos times"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                <p className="absolute bottom-3 left-3 text-white/80 font-display italic text-xs z-20">
                  Rivais...
                </p>
              </div>
              
              <div className="group relative w-full h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img loading="lazy" decoding="async"
                  src="/photos/date-6.png"
                  alt="Careta no espelho"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
</section>
  );
}
