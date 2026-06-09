import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Bike, Anchor } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingLagoa from "../components/FloatingLagoa";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

/**
 * Event11_Lagoa
 * 🚲 Pedalinho Quebrado na Lagoa
 * Tema: Água, céu, azul, aventura que deu errado mas rendeu risadas.
 */
export default function Event11_Lagoa() {
  const sectionRef = useRef(null);
  const [isBroken, setIsBroken] = useState(false);

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
      id="event-11"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* ---- Background (Lagoa) ---- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              135deg,
              #082f49 0%,
              #0c4a6e 40%,
              #164e63 80%,
              #0f172a 100%)`,
            opacity: 0.85,
          }}
        />
        {/* Glows */}
        <div className="glow w-[500px] h-[500px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 to-transparent top-1/4 -right-10" />
        <div className="glow w-[400px] h-[400px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 to-transparent bottom-1/4 -left-20" />
      
        {/* ---- Fade inferior para transição com próxima seção ---- */}
        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #060608)',
          }}
        />
      </div>

      {/* ---- Elementos SVG Flutuantes ---- */}
      <FloatingLagoa scrollProgress={scrollYProgress} />

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
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-sky-500/30">
            <Bike className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 11
            </span>
            <span className="w-1 h-1 rounded-full bg-sky-400/50" />
            <span className="text-sm font-semibold text-sky-400">
              A Saga do Pedalinho
            </span>
          </div>
        </motion.div>

        {/* ---- Título ---- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Lagoa Rodrigo"
              wordClassName="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-md"
            />
            <br className="hidden md:block" />
            <span className="inline md:hidden"> </span>
            <TextScrub
              text="de Freitas"
              wordClassName="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-sky-100/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4 text-sky-400/70" />
            <span className="text-sm tracking-wide">Lagoa Rodrigo de Freitas, RJ</span>
          </motion.div>
        </div>

        {/* ---- Layout: Grid Bento ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Coluna da Esquerda (Texto - 7 colunas) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 relative overflow-hidden border-sky-500/20">
              {/* Decorativo */}
              <Anchor className="absolute -right-8 -bottom-8 w-40 h-40 text-sky-500/5 rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-800 to-cyan-900 flex items-center justify-center border border-sky-500/30">
                  <Bike className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-sky-50">
                    O Cisne Quebrado
                  </h3>
                  <p className="text-xs text-sky-300/60 uppercase tracking-wider">
                    Um teste de resistência
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10 text-sky-50/70 leading-relaxed text-sm md:text-base">
                <p>
                  A ideia parecia perfeita: um dia de sol, pedalando de bicicleta ao redor da Lagoa. 
                  E o passeio de bike até que foi bom (...ou quase)! O problema começou quando decidimos 
                  nos aventurar na água...
                </p>
                <p>
                  Resolvemos alugar um pedalinho. Fomos lá pro meio da Lagoa e, de repente, *plec*. 
                  O pedal quebrou! Ficamos à deriva no meio d'água tentando voltar. 
                  Foi uma luta pra remar aquilo de volta até a borda.
                </p>
                <p>
                  "Tudo bem, a gente troca", pensamos. Pegamos o segundo pedalinho. 
                  Acredite se quiser: fomos andar e esse TAMBÉM estava com o pedal quebrado! 
                  No fim, a aventura virou um teste de paciência, mas as risadas (e o esforço) 
                  fizeram o dia ser inesquecível.
                </p>
              </div>
            </GlassCard>

            {/* Easter Egg Card */}
            <GlassCard className="p-6 md:p-8 border-cyan-500/10 bg-black/40" variant="subtle" delay={0.4}>
              <div className="flex items-center justify-between">
                <p className="text-white/60 italic text-sm md:text-base pr-4">
                  Aquele momento de desespero quando o pedal gira em falso...
                </p>
                <MagneticElement strength={15}>
                  <motion.div 
                    className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-sky-600 to-cyan-800 flex items-center justify-center shadow-lg cursor-pointer border border-sky-400/30"
                    onClick={() => {
                      if (isBroken) return;
                      setIsBroken(true);
                      setTimeout(() => setIsBroken(false), 2000);
                    }}
                    whileTap={{ scale: 0.9 }}
                    title="Tentar pedalar ⚙️"
                  >
                    <motion.span 
                      className="text-2xl drop-shadow-md"
                      animate={isBroken ? { rotate: [0, 90, 180, 200, 190, 205], y: [0, 0, 0, 5, 5, 10], opacity: [1, 1, 1, 0.8, 0.5, 0] } : { rotate: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      ⚙️
                    </motion.span>
                  </motion.div>
                </MagneticElement>
              </div>
            </GlassCard>
          </motion.div>

          {/* Coluna da Direita (Fotos - 5 colunas) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Foto 1 */}
            <div className="relative z-10 w-full md:w-[85%] rounded-2xl overflow-hidden border-2 border-sky-500/20 shadow-2xl self-start transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-sky-950/20 backdrop-blur-sm p-2">
              <img loading="lazy" decoding="async"
                src="/photos/date-11.png"
                alt="Foto do passeio de bicicleta na Lagoa"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            
            {/* Foto 2 */}
            <div className="relative z-20 w-[85%] md:w-[75%] -mt-10 md:-mt-20 rounded-2xl overflow-hidden border-2 border-sky-400/20 shadow-2xl self-end transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-sky-900/30 backdrop-blur-sm p-2">
              <img loading="lazy" decoding="async"
                src="/photos/date-11.1.png"
                alt="Foto no pedalinho da Lagoa"
                className="w-full h-auto object-cover rounded-xl"
              />
              <p className="absolute bottom-4 left-4 text-sky-100 font-display italic text-sm drop-shadow-md">
                À deriva... 🦢
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
