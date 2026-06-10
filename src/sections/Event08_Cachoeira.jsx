import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Mountain, TreePine } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingCachoeira from "../components/FloatingCachoeira";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event08_Cachoeira() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="event-08"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              135deg,
              #022c22 0%,
              #064e3b 40%,
              #0f766e 80%,
              #042f2e 100%)`,
            opacity: 0.8,
          }}
        />

        <div className="glow w-[500px] h-[500px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent top-1/4 -left-20" />
        <div className="glow w-[400px] h-[400px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/10 to-transparent bottom-1/4 -right-10" />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #2e0513)',
          }}
        />
      </div>

      <FloatingCachoeira scrollProgress={scrollYProgress} />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-emerald-500/30">
            <TreePine className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 08
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
            <span className="text-sm font-semibold text-emerald-400">
              Aventura na Floresta
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Cachoeira do Horto"
              wordClassName="bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent drop-shadow-md"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-emerald-100/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4 text-emerald-400/70" />
            <span className="text-sm tracking-wide">Parque Nacional da Tijuca, RJ</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-5xl mx-auto items-center">

          <motion.div
            className="md:col-span-5 flex flex-col gap-4 relative items-center md:items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 w-full md:w-[85%] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl md:self-end transform hover:scale-105 transition-transform duration-500">
              <img loading="lazy" decoding="async"
                src="/photos/date-8.png"
                alt="Nós na cachoeira do Horto"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative z-0 w-[80%] md:w-[70%] -mt-10 md:-mt-16 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl opacity-90 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10" />
              <img loading="lazy" decoding="async"
                src="/photos/date-8.1.png"
                alt="Vista do riacho e floresta"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute top-1/2 -left-6 w-20 h-20 rounded-full border border-dashed border-emerald-500/30 animate-spin-slow hidden md:block" />
          </motion.div>

          <motion.div
            className="md:col-span-7 h-full flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 relative overflow-hidden border-emerald-500/20">

              <Mountain className="absolute -right-8 -bottom-8 w-40 h-40 text-emerald-500/5 rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center border border-emerald-500/30">
                  <Mountain className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-emerald-50">
                    O Teste de Sobrevivência
                  </h3>
                  <p className="text-xs text-emerald-300/60 uppercase tracking-wider">
                    Cordas, pedras e água gelada
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10 text-emerald-50/70 leading-relaxed text-sm md:text-base">
                <p>
                  Chegar na cachoeira do Horto já não é o passeio mais simples do mundo, 
                  mas a melhor parte foi colocar você pra passar um pequeno perrengue chique.
                </p>
                <p>
                  Lembra da parte da escalada? Eu fiz você passar por aquelas cordas e 
                  escalar uma pequena parede de pedra só pra chegar lá no topo. E você foi, 
                  toda corajosa (ou talvez só com medo de cair, mas o que importa é o resultado).
                </p>
                <p>
                  A recompensa valeu a pena: aquela som da cachoeira acalmando a alma 
                  e a gente curtindo a natureza juntos, longe do barulho da cidade.
                </p>
              </div>
            </GlassCard>

            <MagneticElement strength={15}>
              <div className="inline-flex self-start">
                <div 
                  className="glass-card-subtle px-6 py-3 border-emerald-500/30 cursor-pointer group flex items-center gap-3 relative overflow-hidden"
                  onClick={(e) => {

                    const btn = e.currentTarget;
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const ripple = document.createElement('span');
                    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(16,185,129,0.3);width:10px;height:10px;left:${x}px;top:${y}px;transform:translate(-50%,-50%) scale(0);animation:ripple-water 0.8s ease-out forwards;pointer-events:none;`;
                    btn.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 900);
                  }}
                  title="Clica pra sentir a água 💧"
                >
                  <span className="text-emerald-400 group-hover:scale-125 transition-transform duration-300">🌿</span>
                  <span className="text-sm font-medium text-emerald-100/80">Sobrevivemos!</span>
                </div>
              </div>
            </MagneticElement>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
