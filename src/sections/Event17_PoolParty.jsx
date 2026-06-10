import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Sparkles, Waves, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";
import FloatingPoolParty from "../components/FloatingPoolParty";

export default function Event17_PoolParty() {
  const sectionRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isSubmerged, setIsSubmerged] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isSubmerged) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSubmerged]);

  const triggerPool = (e) => {
    e.stopPropagation();
    if (isSubmerged) return;
    setIsSubmerged(true);
    setTimeout(() => {
      setIsSubmerged(false);
    }, 4500); 
  };

  return (
    <section
      ref={sectionRef}
      id="event-17"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #060608 0%, #081a24 50%, #060608 100%)",
            opacity: 0.9,
          }}
        />
        <div className="glow w-[600px] h-[600px] bg-cyan-500/10 top-1/4 -right-20 absolute" />
        <div className="glow w-[500px] h-[500px] bg-blue-600/10 bottom-0 left-0 absolute" />
        <div className="glow w-[400px] h-[400px] bg-amber-400/5 top-1/3 left-1/4 absolute" />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <FloatingPoolParty scrollProgress={scrollYProgress} />

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              src={selectedPhoto}
              alt="Ampliada"
              className="max-w-full max-h-full rounded-lg object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSubmerged && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col justify-end pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >

            <motion.div 
              className="absolute w-[200vw] h-[200vh] left-[-50vw] bg-cyan-500/30 backdrop-blur-sm border-t-8 border-cyan-300/40 rounded-[40%]"
              initial={{ y: "100%", rotate: 0 }}
              animate={{ 
                y: ["100%", "20%", "20%", "100%"], 
                rotate: [0, 45, 90, 180] 
              }}
              transition={{ 
                duration: 4.5, 
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute text-8xl md:text-9xl filter drop-shadow-xl"
              initial={{ x: "-50vw", y: "40vh", rotate: -10 }}
              animate={{ 
                x: ["-50vw", "120vw"], 
                y: ["40vh", "35vh", "45vh", "35vh", "40vh"], 
                rotate: [-10, 10, -5, 15, -10]
              }}
              transition={{ 
                duration: 3, 
                delay: 0.5,
                ease: "linear"
              }}
            >
              🦩
            </motion.div>

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/30 rounded-full"
                style={{
                  width: Math.random() * 20 + 10,
                  height: Math.random() * 20 + 10,
                  left: (Math.random() * 100) + "%"
                }}
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: "-10vh", opacity: 1 }}
                transition={{ 
                  duration: Math.random() * 2 + 1.5,
                  delay: Math.random(),
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: y1, opacity }}
      >

        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/70 tracking-wide">
                Capítulo 17
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-sm font-semibold text-cyan-400">
                Pool Party
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
            <TextScrub
              text="Pool Party"
              wordClassName="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
            />
            <br />
            <TextScrub
              text="com os amigos"
              wordClassName="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Itapuaçu, Maricá</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-6 md:p-8 relative overflow-hidden border-cyan-500/10 flex flex-col justify-center">
              <Sparkles className="absolute -right-10 -bottom-10 w-64 h-64 text-cyan-500/[0.03] rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
                  <Waves className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    Festa & Resenha
                  </h3>
                  <p className="text-xs text-cyan-400/60 uppercase tracking-wider mt-1">
                    Primo Victor Hugo
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  A nossa vibe também é festa! Fomos pra Itapuaçu curtir a Pool Party do Victor Hugo. 
                  Foi incrível conhecer os amigos dele, passar o dia na piscina e dançar muito.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  E o melhor de tudo é que, entre uma música e outra, a gente sempre encontrava um jeito 
                  de criar nossos momentinhos a dois, mesmo no meio da galera toda.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />

                  <span 
                    className="text-cyan-400/60 text-xs select-none flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 cursor-pointer hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
                    onClick={triggerPool}
                    title="Cuidado para não afogar!"
                  >
                    💦 Mergulhar na Piscina
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-4 h-full">

            <motion.div
              className="group relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedPhoto("/photos/date-17.png")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                loading="lazy" 
                decoding="async"
                src="/photos/date-17.png"
                alt="Selfie no espelho"
                className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-white/80 text-sm font-medium tracking-wide">Ver momento</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[350px]">

              <motion.div
                className="group relative w-full h-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => setSelectedPhoto("/photos/date-17.1.png")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  loading="lazy" 
                  decoding="async"
                  src="/photos/date-17.1.png"
                  alt="Sorrisos na festa"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="text-white/80 text-sm font-medium tracking-wide">Ver momento</span>
                </div>
              </motion.div>

              <motion.div
                className="group relative w-full h-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => setSelectedPhoto("/photos/date-17.2.png")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  loading="lazy" 
                  decoding="async"
                  src="/photos/date-17.2.png"
                  alt="Cozinha na festa"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="text-white/80 text-sm font-medium tracking-wide">Ver momento</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
