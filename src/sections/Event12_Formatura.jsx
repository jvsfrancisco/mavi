import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, GraduationCap, Camera, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import GlassCard from "../components/GlassCard";
import TextScrub from "../components/TextScrub";

/**
 * Event12_Formatura
 * 🎓 Fotos de Formatura no Aterro do Flamengo (Monumento dos Pracinhas)
 */
export default function Event12_Formatura() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const PHOTOS = [
    {
      src: "/photos/date-12.jpg",
      alt: "Fotos da Formatura",
      caption: "A graduada 🎓",
      top: false
    },
    {
      src: "/photos/date-12.2.png",
      alt: "Encontro e comemoração",
      caption: "",
      top: true
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
  };

  const triggerConfetti = () => {
    const capelo = confetti.shapeFromText({ text: '🎓', scalar: 6 });

    confetti({
      particleCount: 8,
      angle: 90,
      spread: 45,
      origin: { x: 0.5, y: 1 }, // Sai bem de baixo, no centro
      shapes: [capelo],
      scalar: 4, // <-- ISSO DEIXA O CAPELO GIGANTE
      gravity: 0.2, // Cai ainda mais devagar
      startVelocity: 65, // Sobe devagar
      ticks: 600, // Dura bastante
    });
  };

  return (
    <section
      ref={sectionRef}
      id="event-12"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* ---- Background ---- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-neutral-900/40 to-[#060608] opacity-80" />
        {/* Glows de celebração */}
        <div className="glow w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 to-transparent top-1/4 -right-20 absolute rounded-full" />
        <div className="glow w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent bottom-1/4 -left-20 absolute rounded-full" />
      
        {/* ---- Fade inferior para transição com próxima seção ---- */}
        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #060608)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: contentY }}
      >
        {/* ---- Badge ---- */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-yellow-500/30">
            <GraduationCap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 12
            </span>
            <span className="w-1 h-1 rounded-full bg-yellow-400/50" />
            <span className="text-sm font-semibold text-yellow-400">
              O Orgulho
            </span>
          </div>
        </motion.div>

        {/* ---- Título ---- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Fotos da"
              wordClassName="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-md"
            />
            <br className="hidden md:block" />
            <span className="inline md:hidden"> </span>
            <TextScrub
              text="Formatura"
              wordClassName="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-md"
            />
          </h2>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-amber-100/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">Flamengo, RJ</span>
          </motion.div>
        </div>

        {/* ---- Bento Grid ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Card de Texto Principal (Esquerda, 7 colunas) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 md:p-8 flex flex-col justify-center relative group">
              <Award className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-0" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 flex items-center justify-center border border-amber-500/30 shrink-0">
                  <Camera className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    Técnica em Alimentos
                  </h3>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    Formada pelo IFRJ
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Acordamos bem cedo e fomos até o Monumento dos Pracinhas, no Aterro do Flamengo (pertinho do Assador), 
                  para tirar as fotos de formatura do Ensino Médio Técnico dela pelo IFRJ.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Foi muito gratificante ver ela alcançando esse marco e vestindo a beca com tanto orgulho. 
                  Eu não podia estar mais feliz de fazer parte desse momento.
                </p>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  E como se o dia já não fosse especial o suficiente, foi ali também que aconteceu 
                  <strong className="text-emerald-400 font-medium"> o primeiro encontro oficial das nossas famílias</strong>! 
                  Um dia inesquecível em todos os sentidos.
                </p>
                
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span
                    className="text-amber-400/60 text-xs easter-egg-trigger select-none flex items-center gap-2 cursor-pointer px-4 py-1.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    onClick={triggerConfetti}
                    title="Jogar o capelo!"
                  >
                    🎓 Jogar o capelo
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Fotos (Direita, 5 colunas - Carrossel com botões) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-3 md:p-4 relative group">
              {/* Moldura decorativa */}
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500/20 via-transparent to-emerald-500/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

              {/* Container da foto com transição */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-neutral-900 to-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={PHOTOS[currentPhoto].src}
                    alt={PHOTOS[currentPhoto].alt}
                    className={`w-full h-full object-cover ${PHOTOS[currentPhoto].top ? 'object-top' : ''}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>

                {/* Overlay gradiente para os botões lerem bem */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Setas Esquerda/Direita */}
                <div className="absolute inset-y-0 left-0 flex items-center px-2">
                  <button
                    onClick={prevPhoto}
                    className="p-1.5 md:p-2 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <button
                    onClick={nextPhoto}
                    className="p-1.5 md:p-2 rounded-full bg-black/20 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                {/* ---- Controles do carrossel (Dots) ---- */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  {/* Indicadores (dots) */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {PHOTOS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhoto(index)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          index === currentPhoto
                            ? "w-6 h-2 bg-yellow-400"
                            : "w-2 h-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Ver foto ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Legenda da foto atual */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentPhoto}
                      className="text-center text-xs md:text-sm text-white/80 font-display italic drop-shadow-md"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {PHOTOS[currentPhoto].caption}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
