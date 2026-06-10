import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Sparkles, Gift, X } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";
import FloatingPetropolis from "../components/FloatingPetropolis";

export default function Event16_Petropolis() {
  const sectionRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const triggerStrawberries = (e) => {
    e.stopPropagation();
    if (showEasterEgg) return;
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 3500); 
  };

  const photos = [
    { src: "/photos/aniversario-2.png", alt: "Colagem Petrópolis" },
    { src: "/photos/aniversario-2.1.png", alt: "Palácio de Cristal" },
    { src: "/photos/aniversario-2.2.png", alt: "Catedral Petrópolis" },
    { src: "/photos/aniversario-2.3.png", alt: "Momento 4" },
    { src: "/photos/aniversario-2.4.png", alt: "Momento 5" },
    { src: "/photos/aniversario-2.5.png", alt: "Momento 6" },
    { src: "/photos/aniversario-2.6.png", alt: "Momento 7" },
  ];

  return (
    <section
      ref={sectionRef}
      id="event-16"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #060608 0%, #170F11 50%, #060608 100%)",
            opacity: 0.9,
          }}
        />

        <div className="glow w-[600px] h-[600px] bg-rose-600/10 top-1/4 -right-20 absolute" />
        <div className="glow w-[500px] h-[500px] bg-emerald-600/10 bottom-0 left-0 absolute" />
        <div className="glow w-[400px] h-[400px] bg-amber-500/5 top-1/3 left-1/4 absolute" />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <FloatingPetropolis scrollProgress={scrollYProgress} />

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
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
        {showEasterEgg && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none flex justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="absolute top-0 w-2 h-40 bg-gradient-to-b from-emerald-900 to-emerald-600 rounded-b-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              initial={{ y: -160 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
              className="absolute top-[140px] text-[120px] filter drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]"
              initial={{ y: -160, rotate: -5 }}
              animate={{ 
                y: [0, 0, 1000], 
                rotate: [-5, 5, -5, 10, 45] 
              }}
              transition={{ 
                duration: 2.5, 
                times: [0, 0.4, 1], 
                delay: 0.6, 
                ease: "easeIn" 
              }}
            >
              🍓
            </motion.div>

            <motion.div
              className="absolute top-[140px] w-32 h-1 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] rotate-[-15deg]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, delay: 1.5 }} 
            />

            <motion.div
              className="absolute top-[140px] w-4 h-4 bg-emerald-400 rounded-full"
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], x: -40, y: -20, opacity: [0, 1, 0] }}
              transition={{ duration: 0.4, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-[140px] w-3 h-3 bg-rose-400 rounded-full"
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0], x: 30, y: 30, opacity: [0, 1, 0] }}
              transition={{ duration: 0.4, delay: 1.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12"
        style={{ y: y1, opacity }}
      >

        <div className="flex flex-col items-center text-center">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
              <Calendar className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-white/70 tracking-wide">
                Capítulo 16
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-sm font-semibold text-rose-400">
                Aniversário 2
              </span>
            </div>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
            <TextScrub
              text="Segundo"
              wordClassName="bg-gradient-to-r from-emerald-200 to-white bg-clip-text text-transparent"
            />
            <br />
            <TextScrub
              text="Aniversário"
              wordClassName="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Petrópolis & Morango do Vale</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 md:p-8 relative overflow-hidden border-rose-500/10">
              <Sparkles className="absolute -right-10 -bottom-10 w-64 h-64 text-rose-500/[0.03] rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-red-600/10 flex items-center justify-center border border-rose-500/20 shrink-0">
                  <Gift className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    O Frio da Serra
                  </h3>
                  <p className="text-xs text-rose-400/60 uppercase tracking-wider mt-1">
                    Cidade Imperial
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Comemorar o meu segundo aniversário ao seu lado pedia algo diferente, 
                  e a serra foi o lugar perfeito. Fomos conhecer a Cidade Imperial de Petrópolis, 
                  passeando de mãos dadas por palácios de cristal e catedrais.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Mas o ponto alto da viagem foi o Morango do Vale: uma colheita de morangos 
                  fresquinhos direto da fazenda, que deixou o nosso final de semana ainda 
                  mais doce (mas claro, nunca mais doce que você).
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />

                  <span 
                    className="text-rose-400/60 text-xs select-none flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/5 border border-rose-500/10 cursor-pointer hover:bg-rose-500/20 hover:text-rose-300 transition-colors"
                    onClick={triggerStrawberries}
                    title="Clique para colher!"
                  >
                    🍓 Colher Morangos
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-rose-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  className="break-inside-avoid relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-white/5"
                  onClick={() => setSelectedPhoto(photo.src)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    loading="lazy" 
                    decoding="async"
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white/80 text-sm font-medium tracking-wide">
                      Ver momento
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
