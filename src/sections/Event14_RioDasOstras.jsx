import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Sun, Waves, Shell } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";
import FloatingBeach from "../components/FloatingBeach";

export default function Event14_RioDasOstras() {
  const sectionRef = useRef(null);
  const [showWave, setShowWave] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="event-14"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #060608 0%, #082f49 50%, #060608 100%)",
            opacity: 0.8,
          }}
        />

        <div className="glow w-[600px] h-[600px] bg-cyan-500/10 top-1/4 -right-20 absolute" />
        <div className="glow w-[500px] h-[500px] bg-sky-600/15 bottom-0 left-0 absolute" />
        <div className="glow w-[300px] h-[300px] bg-amber-500/10 top-1/3 left-1/3 absolute" />


      </div>

      <FloatingBeach scrollProgress={scrollYProgress} />

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
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 14
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-cyan-400">
              Rio das Ostras
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
            <TextScrub
              text="Primeira vez em"
              wordClassName="bg-gradient-to-r from-sky-300 to-cyan-100 bg-clip-text text-transparent"
            />
            <br />
            <TextScrub
              text="Rio das Ostras"
              wordClassName="bg-gradient-to-r from-cyan-400 to-amber-300 bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Costa Azul, Rio das Ostras</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">

          <motion.div
            className="md:col-span-6 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              <Shell className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03] rotate-[-15deg]" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-900 to-sky-700 flex items-center justify-center border border-white/10 shrink-0">
                  <Sun className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    Guia turístico improvisado
                  </h3>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    Missão bate-e-volta
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  A Myrella tinha uma prova em Rio das Ostras e sobrou para mim a
                  missão de ser o motorista. Como eu não sou bobo nem nada, aproveitei
                  a desculpa perfeita e te chamei pra ir junto.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  A gente transformou o que era pra ser só uma obrigação burocrática em
                  um "mini-date" maravilhoso. Enquanto rolava a prova, pegamos a estrada
                  e fomos explorar os cantinhos legais da cidade, curtir a brisa do
                  mar e criar mais um momento só nosso.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="text-cyan-400/50 text-xs select-none flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    🌊 Estrada
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="md:col-span-6 flex flex-col gap-4 h-full">

            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-3 relative group w-full">
                <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] md:aspect-[16/9] w-full border border-white/10">
                  <img loading="lazy" decoding="async"
                    src="/photos/date-14.png"
                    alt="Rio das Ostras"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                  <div className="absolute bottom-4 right-4 z-20">
                    <MagneticElement>
                      <div 
                        className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (showWave) return;
                          setShowWave(true);
                          setTimeout(() => setShowWave(false), 3000);
                        }}
                      >
                        <Waves className="w-5 h-5 text-cyan-300" />
                      </div>
                    </MagneticElement>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img loading="lazy" decoding="async"
                  src="/photos/date-14.1.png"
                  alt="Explorando a cidade"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                <p className="absolute bottom-3 left-3 text-white/80 font-display italic text-xs z-20">
                  Bate-volta...
                </p>
              </div>

              <div className="group relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img loading="lazy" decoding="async"
                  src="/photos/date-14.2.png"
                  alt="Momento especial"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showWave && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none flex flex-col justify-end overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.svg
              viewBox="0 0 1440 320"
              className="absolute bottom-0 w-full h-[50vh] md:h-[60vh]"
              preserveAspectRatio="none"
              initial={{ y: "100%" }}
              animate={{ y: ["100%", "0%", "100%"] }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <path fill="#0ea5e9" fillOpacity="0.5" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,218.7C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </motion.svg>

            <motion.svg
              viewBox="0 0 1440 320"
              className="absolute bottom-0 w-full h-[40vh] md:h-[50vh]"
              preserveAspectRatio="none"
              initial={{ y: "100%" }}
              animate={{ y: ["100%", "0%", "100%"] }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.15 }}
            >
              <path fill="#0284c7" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </motion.svg>

            <motion.svg
              viewBox="0 0 1440 320"
              className="absolute bottom-0 w-full h-[30vh] md:h-[40vh]"
              preserveAspectRatio="none"
              initial={{ y: "100%" }}
              animate={{ y: ["100%", "0%", "100%"] }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            >
              <path fill="#0369a1" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,192C672,181,768,203,864,213.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
