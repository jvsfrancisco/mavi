import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Sparkles, GlassWater } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";
import FloatingNewYear from "../components/FloatingNewYear";
import confetti from "canvas-confetti";

export default function Event15_AnoNovo() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const triggerFireworks = (e) => {
    e.stopPropagation();
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FDE047', '#FEF08A', '#E2E8F0', '#ffffff']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FDE047', '#FEF08A', '#E2E8F0', '#ffffff']
      });
    }, 250);
  };

  return (
    <section
      ref={sectionRef}
      id="event-15"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #060608 0%, #171717 50%, #060608 100%)",
            opacity: 0.9,
          }}
        />

        <div className="glow w-[600px] h-[600px] bg-amber-500/10 top-1/4 -right-20 absolute" />
        <div className="glow w-[500px] h-[500px] bg-slate-400/10 bottom-0 left-0 absolute" />
        <div className="glow w-[400px] h-[400px] bg-cyan-600/5 top-1/3 left-1/4 absolute" />


      </div>

      <FloatingNewYear scrollProgress={scrollYProgress} />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: y1, opacity }}
      >

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
            <Calendar className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 15
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-amber-300">
              Ano Novo
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
            <TextScrub
              text="Nosso primeiro"
              wordClassName="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent"
            />
            <br />
            <TextScrub
              text="Ano Novo"
              wordClassName="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-6 text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">Praia da Tartaruga, Rio das Ostras</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

          <motion.div
            className="md:col-span-5 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              <Sparkles className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.02] rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                  <GlassWater className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    Com a Família
                  </h3>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    Um brinde aos recomeços
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Passar o primeiro Ano Novo juntos com minha família já seria especial, mas levar
                  você pra passar em Rio das Ostras, na Praia da Tartaruga deixou
                  tudo com gosto de tradição. 
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Foi incrível ver você se misturando com o pessoal, a gente
                  vendo os fogos na praia e começando o ano exatamente do jeito que a
                  gente queria: rindo muito e lado a lado.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />

                  <span 
                    className="text-amber-400/60 text-xs select-none flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 hover:text-amber-300 transition-colors"
                    onClick={triggerFireworks}
                    title="Clique para celebrar!"
                  >
                    🎆 Feliz Ano Novo!
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="md:col-span-7 flex flex-col gap-4 h-full">
            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">

              <motion.div
                className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <img loading="lazy" decoding="async"
                  src="/photos/date-15.png"
                  alt="Ano Novo 1"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </motion.div>

              <motion.div
                className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img loading="lazy" decoding="async"
                  src="/photos/date-15.1.png"
                  alt="Ano Novo 2"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </motion.div>

              <motion.div
                className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <img loading="lazy" decoding="async"
                  src="/photos/date-15.2.png"
                  alt="Ano Novo 3"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </motion.div>

              <motion.div
                className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img loading="lazy" decoding="async"
                  src="/photos/date-15.3.png"
                  alt="Ano Novo 4"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </motion.div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
