import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Flower, ShieldAlert } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingViking from "../components/FloatingViking";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

/**
 * Event10_Vikings
 * 🛡️ Flores e Valhalla
 * Tema rústico: bronze, madeira, âmbar e ferro escuro.
 */
export default function Event10_Vikings() {
  const sectionRef = useRef(null);
  const runes = ["ᚲ", "ᚱ", "ᚺ", "ᛗ", "ᛃ", "ᛊ", "ᚦ"];
  const [runeIndex, setRuneIndex] = useState(0);
  const [swordSpin, setSwordSpin] = useState(0);

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
      id="event-10"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* ---- Background (Viking / Rust) ---- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              135deg,
              #1a0f0a 0%,
              #3d1f11 40%,
              #78350f 80%,
              #1c0c05 100%)`,
            opacity: 0.85,
          }}
        />
        {/* Glows */}
        <div className="glow w-[500px] h-[500px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 to-transparent top-1/4 -right-10" />
        <div className="glow w-[600px] h-[600px] bg-orange-700/10 bottom-1/4 -left-20 absolute rounded-full mix-blend-screen filter blur-[120px]" />
        
        {/* Textura de ruído rústico (opcional) */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        />
      
        {/* ---- Fade inferior para transição com próxima seção ---- */}
        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #082f49)',
          }}
        />
      </div>

      {/* ---- Elementos SVG Flutuantes ---- */}
      <FloatingViking scrollProgress={scrollYProgress} />

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
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-amber-600/30">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 10
            </span>
            <span className="w-1 h-1 rounded-full bg-amber-400/50" />
            <span className="text-sm font-semibold text-amber-400">
              Apresentação e Banquete
            </span>
          </div>
        </motion.div>

        {/* ---- Título ---- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight flex flex-col md:flex-row items-center justify-center gap-3">
            <TextScrub
              text="Flores e"
              wordClassName="bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent drop-shadow-md"
            />
            <TextScrub
              text="Valhalla"
              wordClassName="bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent drop-shadow-md font-serif italic"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-amber-100/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4 text-amber-500/70" />
            <span className="text-sm tracking-wide">Restaurante Vikings</span>
          </motion.div>
        </div>

        {/* ---- Grid (Bento) ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Lado Esquerdo: Texto (7 colunas) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card Principal */}
            <GlassCard className="p-8 relative overflow-hidden border-amber-600/20 flex-1">
              {/* Decorativo */}
              <Flower className="absolute -right-8 -bottom-8 w-40 h-40 text-amber-500/5 rotate-45" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-800 to-orange-950 flex items-center justify-center border border-amber-600/30">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-amber-50">
                    Da delicadeza ao machado
                  </h3>
                  <p className="text-xs text-amber-400/60 uppercase tracking-wider">
                    Banquete de comemoração
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10 text-amber-50/70 leading-relaxed text-sm md:text-base">
                <p>
                  Tudo começou com você tendo aquela apresentação super importante para fazer. 
                  Como eu queria transformar aquele dia estressante em algo especial, cheguei 
                  de surpresa te levando flores pra te desejar sorte e acalmar os nervos.
                </p>
                <p>
                  E já que a ocasião pedia uma comemoração de verdade pelo seu esforço, a gente 
                  saiu do lado delicado das flores e foi direto para um banquete digno de Odin.
                </p>
                <p>
                  No restaurante Vikings, você abraçou o personagem: colocou o capacete de 
                  chifres, sentou no trono de madeira e virou uma verdadeira guerreira viking. 
                  Ver você rindo com aquele chapéu foi impagável!
                </p>
              </div>
            </GlassCard>

            {/* Card Secundário com Easter Egg */}
            <GlassCard className="p-6 md:p-8 border-orange-500/10 bg-black/40" variant="subtle" delay={0.4}>
              <div className="flex items-center justify-between">
                <p className="text-white/60 italic text-sm md:text-base pr-4">
                  "Porque a verdadeira guerreira merece tanto flores quanto um trono."
                </p>
                <MagneticElement strength={20}>
                  <motion.div 
                    className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-amber-600 to-orange-800 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 border border-amber-400/30"
                    onClick={() => {
                      setSwordSpin(prev => prev + 360);
                      setRuneIndex(prev => (prev + 1) % runes.length);
                    }}
                    animate={{ rotate: swordSpin }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    title="Skål! 🍻"
                  >
                    <span className="text-2xl drop-shadow-md">⚔️</span>
                  </motion.div>
                </MagneticElement>
              </div>
            </GlassCard>
          </motion.div>

          {/* Lado Direito: Foto (5 colunas) */}
          <motion.div
            className="lg:col-span-5 h-full relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full h-full min-h-[350px] md:min-h-[450px] rounded-2xl overflow-hidden border-2 border-amber-600/20 shadow-[0_0_40px_rgba(217,119,6,0.15)] relative bg-black/50">
              <img loading="lazy" decoding="async"
                src="/photos/date-10.png"
                alt="Você no trono viking com o capacete"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-amber-300 font-display italic text-lg drop-shadow-md">
                  A Rainha de Valhalla 🛡️
                </p>
                <div className="h-px w-1/3 bg-gradient-to-r from-amber-500/50 to-transparent mt-2" />
              </div>
            </div>
            
            {/* Runas decorativas flutuantes */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full border border-amber-500/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-amber-500 text-sm font-bold shadow-lg cursor-pointer"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              onClick={() => setRuneIndex(prev => (prev + 1) % runes.length)}
              key={runeIndex}
            >
              {runes[runeIndex]}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
