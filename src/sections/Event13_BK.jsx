import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Music, Mic2, MapPin, Disc, Heart } from "lucide-react";
import { useRef, useState } from "react";
import TextScrub from "../components/TextScrub";
import GlassCard from "../components/GlassCard";

export default function Event13_BK() {
  const sectionRef = useRef(null);
  const [easterEgg, setEasterEgg] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yPhoto1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yPhoto2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yPhoto3 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

  return (
    <section
      ref={sectionRef}
      id="event-13"
      className="relative min-h-[120vh] flex items-center justify-center py-20 md:py-32 overflow-hidden bg-[#060608]"
    >

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-black to-black opacity-80" />
        <div className="glow w-[400px] h-[400px] bg-fuchsia-500/10 absolute top-1/4 -right-32 rounded-full blur-3xl" />
        <div className="glow w-[500px] h-[500px] bg-rose-500/10 absolute bottom-1/4 -left-32 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <motion.div
          className="lg:col-span-5 flex flex-col justify-center order-1 mt-12 lg:mt-0"
          style={{ y: textY }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-fuchsia-500/30 mb-8 self-start">
            <Mic2 className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 13
            </span>
            <span className="w-1 h-1 rounded-full bg-fuchsia-400/50" />
            <span className="text-sm font-semibold text-fuchsia-400">
              O Rap e a Energia
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            <TextScrub
              text="Show do BK"
              wordClassName="bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent drop-shadow-md"
            />
            <br className="hidden lg:block" />
            <span className="inline lg:hidden"> </span>
            <TextScrub
              text="na Fundição"
              wordClassName="text-white drop-shadow-md"
            />
          </h2>

          <div className="flex items-center gap-2 mb-8 text-rose-100/50">
            <MapPin className="w-4 h-4 text-rose-400/70" />
            <span className="text-sm tracking-wide">Fundição Progresso, Lapa - RJ</span>
          </div>

          <GlassCard className="p-6 md:p-8 relative group overflow-hidden border-fuchsia-500/20">

            <div 
              className="absolute -right-8 -bottom-8 w-48 h-48 cursor-pointer z-20"
              onClick={() => setEasterEgg(!easterEgg)}
            >
              <Disc className={`w-full h-full text-fuchsia-500/10 transition-transform duration-1000 ${easterEgg ? 'rotate-[720deg] text-rose-500/30 scale-110' : 'rotate-12 group-hover:rotate-[180deg]'}`} />
            </div>

            <p className="text-white/70 leading-relaxed text-sm md:text-base relative z-10">
              Eu ia no show com dois amigos, mas um deles desistiu e acabou me dando o ingresso. 
              Obviamente, aproveitei a chance pra te levar comigo.
            </p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base relative z-10 mt-4">
              Você não conhecia muito as músicas do BK, mas a energia do show na Fundição bateu na hora. 
              Foi muito bom o momento que eu cantei <strong 
                className="text-rose-400 font-medium italic cursor-pointer hover:text-rose-300 transition-colors"
                onClick={() => setEasterEgg(true)}
                title="Clique para sentir a vibe!"
              >
                "Planos"
              </strong> pra você, e a gente cantando <strong 
                className="text-fuchsia-400 font-medium italic cursor-pointer hover:text-fuchsia-300 transition-colors"
                onClick={() => setEasterEgg(true)}
              >
                "Amanhecer"
              </strong> juntos logo depois.
            </p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base relative z-10 mt-4">
              No final das contas, você não só amou o show como saiu de lá viciada nas músicas dele. 
              Foi uma noite absurda.
            </p>

            <AnimatePresence>
              {easterEgg && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-fuchsia-900/20 rounded-xl border border-fuchsia-500/20 relative z-10 flex flex-col gap-4"
                >
                  <p className="text-fuchsia-300 text-sm italic font-medium flex items-start gap-3 leading-relaxed">
                    <Heart className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <span>
                      "Tenho você por perto<br/>
                      Nunca me senti tão completo<br/>
                      Nunca me senti tão seguro<br/>
                      Perco o medo do fim do mundo"
                    </span>
                  </p>
                  <p className="text-rose-300 text-sm italic font-medium flex items-start gap-3 leading-relaxed">
                    <Music className="w-4 h-4 text-fuchsia-400 mt-1 shrink-0" />
                    <span>
                      "Amanhecer na casa de campo<br/>
                      Ouvindo Djavan<br/>
                      Correndo atrás de ti feito um cigano"
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>

        <div className="lg:col-span-7 relative h-[500px] md:h-[700px] w-full order-2 mt-12 lg:mt-0">

          <motion.div 
            className="absolute top-[10%] right-[20%] text-rose-500/30 blur-[1px] rotate-12 z-0" 
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Music className="w-12 h-12" />
          </motion.div>
          <motion.div 
            className="absolute bottom-[20%] left-[10%] text-fuchsia-500/30 blur-[2px] -rotate-12 z-0" 
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          >
            <Music className="w-8 h-8" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] sm:w-[45%] md:w-[50%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#0a0a0f] shadow-2xl z-20 rotate-3 cursor-pointer"
            style={{ y: yPhoto1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/photos/date-13.png" alt="Show do BK" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-fuchsia-500/10 mix-blend-overlay pointer-events-none" />
          </motion.div>

          <motion.div 
            className="absolute top-[10%] left-[5%] w-[45%] sm:w-[35%] md:w-[40%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#0a0a0f] shadow-xl z-10 -rotate-12 cursor-pointer"
            style={{ y: yPhoto2 }}
            whileHover={{ scale: 1.1, rotate: -5, zIndex: 40 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/photos/date-13.1.png" alt="Nós no show" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
              <Music className="w-4 h-4 text-white/90" />
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-[5%] right-[5%] w-[50%] sm:w-[40%] md:w-[45%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#0a0a0f] shadow-xl z-30 rotate-12 cursor-pointer"
            style={{ y: yPhoto3 }}
            whileHover={{ scale: 1.1, rotate: 5, zIndex: 40 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/photos/date-13.2.png" alt="Fundição Progresso vibe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
              <Disc className="w-4 h-4 text-fuchsia-400" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
