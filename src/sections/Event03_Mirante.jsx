import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Mountain, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingMirante from "../components/FloatingMirante";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

const PHOTOS = [
  {
    src: "/photos/date-3.png",
    alt: "Vista do Mirante Dona Marta",
    caption: "O Rio aos nossos pés",
  },
  {
    src: "/photos/date-3.2.png",
    alt: "Nós dois no Mirante Dona Marta",
    caption: "Nós dois lá em cima",
  },
  {
    src: "/photos/date-3.3.png",
    alt: "Cristo Redentor visto do Mirante",
    caption: "O Cristo de pertinho",
  },
];

export default function Event03_Mirante() {
  const sectionRef = useRef(null);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const galleryScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.95]);
  const galleryRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 1.5]);

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % PHOTOS.length);
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -1000 || offset.x < -50) {
      nextPhoto();
    } else if (swipe > 1000 || offset.x > 50) {
      prevPhoto();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="event-03"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              180deg,
              #0a1628 0%,
              #0f2847 22%,
              #1a3a6b 35%,
              #2563eb 48%,
              #3b82f6 55%,
              #1d4ed8 65%,
              #1e3a5f 78%,
              #0f1f3d 100%,)`,
            opacity: 0.5,
          }}
        />

        <div className="glow w-[600px] h-[600px] bg-blue-500/15 top-1/4 -right-20 absolute" />
        <div className="glow w-[500px] h-[500px] bg-indigo-500/10 bottom-1/3 -left-20 absolute" />
        <div className="glow w-[400px] h-[400px] bg-sky-400/10 top-1/3 left-1/3 absolute" />

        <div
          className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
          }}
        />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #1a0805)',
          }}
        />
      </div>

      <FloatingMirante scrollProgress={scrollYProgress} />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5">
            <Calendar className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 03
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-sky-400">
              Mirante Dona Marta
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="No topo do mundo"
              wordClassName="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">Mirante Dona Marta, Rio de Janeiro</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            className="relative"
            style={{ scale: galleryScale, rotate: galleryRotate }}
          >
            <GlassCard className="p-3 md:p-4 relative group" delay={0.3}>

              <div className="absolute -inset-1 bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-blue-950/50 to-indigo-950/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={PHOTOS[currentPhoto].src}
                    alt={PHOTOS[currentPhoto].alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{ cursor: "grab" }}
                    whileTap={{ cursor: "grabbing" }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-4">

                  <div className="flex items-center justify-center gap-2 mb-3">
                    {PHOTOS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhoto(index)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          index === currentPhoto
                            ? "w-6 h-2 bg-white"
                            : "w-2 h-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Ver foto ${index + 1}`}
                      />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentPhoto}
                      className="text-center text-xs text-white/60 font-medium"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {PHOTOS[currentPhoto].caption}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 px-2 pb-1 flex items-center justify-between">
                <p className="text-xs text-white/30 font-medium tracking-wide">
                  📍 Mirante Dona Marta — 340m de altitude
                </p>
                <div className="flex items-center gap-1.5 text-white/25">
                  <Camera className="w-3 h-3" />
                  <span className="text-xs">{currentPhoto + 1}/{PHOTOS.length}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            <GlassCard className="p-6 md:p-8" delay={0.5}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white/90">
                    Dona Marta
                  </h3>
                  <p className="text-xs text-white/40">Vista absurda</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Subimos o Dona Marta e mano... a vista lá de cima é de outro
                mundo. O Cristo ali do lado, o Rio inteiro lá embaixo. Ventava
                demais e você tava reclamando de frio, mas não queria ir
                embora. Ficamos um tempão só olhando tudo e tirando foto.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" variant="subtle" delay={0.7}>
              <p className="text-white/50 leading-relaxed text-sm md:text-base italic">
                "Lá em cima eu fiquei pensando que é muito doido a gente
                ter se encontrado. Tipo, o Rio é gigante, tem milhões de
                pessoas, e de algum jeito a gente se achou. Sorte? Pode ser.
                Mas eu prefiro achar que não."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent" />
                <motion.span
                  className="text-sky-400/50 text-xs select-none cursor-pointer hover:text-sky-400/80 transition-colors"
                  animate={isShaking ? { x: [0, -3, 3, -2, 2, 0], rotate: [0, -1, 1, -1, 0] } : {}}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setIsShaking(true);
                    setTimeout(() => setIsShaking(false), 600);
                  }}
                  title="Sente o vento! 💨"
                >⛰️💨</motion.span>
                <div className="h-px flex-1 bg-gradient-to-l from-sky-400/30 to-transparent" />
              </div>
            </GlassCard>

            <MagneticElement strength={20}>
              <motion.div
                className="flex items-center gap-4 glass-card-subtle px-5 py-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span className="text-2xl">🗼</span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Momento marcante</p>
                  <p className="text-sm text-white/60 font-medium">
                    Você reclamando mas sorrindo
                  </p>
                </div>
              </motion.div>
            </MagneticElement>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
