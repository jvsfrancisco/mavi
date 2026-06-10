import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Pizza, Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingPizzeria from "../components/FloatingPizzeria";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event02_Pizzaria() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  const videoX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -30]);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      id="event-02"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              180deg,
              #1a0a05 0%,
              #2d1408 20%,
              #4a1a0a 35%,
              #6b2010 48%,
              #8b3a1a 55%,
              #6b2010 65%,
              #3d1a0d 78%,
              #1a0a05 100%,)`,
            opacity: 0.55,
          }}
        />

        <div className="glow w-[500px] h-[500px] bg-amber-600/20 top-1/4 -left-20 absolute" />
        <div className="glow w-[400px] h-[400px] bg-red-700/15 bottom-1/3 right-10 absolute" />
        <div className="glow w-[350px] h-[350px] bg-orange-500/12 top-1/2 left-1/2 -translate-x-1/2 absolute" />

        <div className="glow w-[600px] h-[300px] bg-amber-500/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #0a0f0a)',
          }}
        />
      </div>

      <FloatingPizzeria scrollProgress={scrollYProgress} />

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
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 02
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-amber-400">
              Nosso Date na Pizzaria
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Vesuvio Carioca"
              wordClassName="bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Vesuvio Carioca, Rio de Janeiro</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <GlassCard className="p-6 md:p-8" delay={0.3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                  <Pizza className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white/90">
                    Uma noite na Vesuvio
                  </h3>
                  <p className="text-xs text-white/40">Pizzaria raiz</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Vesuvio Carioca. Pizzaria pequenininha, apertada, familiar.
                Daquelas que você senta e já tá ouvindo a conversa da mesa
                do lado. E sabe o que? Era perfeito assim. A pizza era boa
                demais e a gente não parava de rir. Noite simples, dessas
                que você nem planeja e acaba sendo a melhor.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" variant="subtle" delay={0.5}>
              <p className="text-white/50 leading-relaxed text-sm md:text-base italic">
                "Você roubando meu pedaço de pizza achando que eu não tava vendo.
                Eu vi. Só deixei porque gosto de te ver feliz comendo."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
                <span
                  className="text-amber-400/50 text-xs select-none cursor-pointer hover:text-amber-400/80 transition-colors relative group/tip"
                  title="Clica na pizza 👀"
                >
                  🍕🕯️
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md text-amber-300 text-[10px] px-3 py-1 rounded-full border border-amber-500/20 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    Ela roubou mais que um pedaço...
                  </span>
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-amber-500/30 to-transparent" />
              </div>
            </GlassCard>

            <MagneticElement strength={20}>
              <motion.div
                className="flex items-center gap-4 glass-card-subtle px-5 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="text-2xl">🍕</span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Veredicto</p>
                  <p className="text-sm text-white/60 font-medium">
                    Pizza boa + conversa melhor ainda
                  </p>
                </div>
              </motion.div>
            </MagneticElement>
          </div>

          <motion.div
            className="relative order-1 lg:order-2"
            style={{ x: videoX, rotate: videoRotate }}
          >
            <GlassCard className="p-3 md:p-4 relative group" delay={0.2}>

              <div className="absolute -inset-1 bg-gradient-to-br from-red-600/20 via-transparent to-amber-500/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

              <div className="relative rounded-[16px] overflow-hidden aspect-[9/16] w-full max-w-[340px] mx-auto bg-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <iframe
                  src="https://www.youtube.com/embed/fI86X3i3ZQ0?autoplay=0&loop=1&playlist=fI86X3i3ZQ0&controls=0&modestbranding=1&rel=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0 z-0"
                ></iframe>

                <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-black/95 via-black/80 to-transparent pointer-events-none z-20" />
              </div>

              <div className="mt-3 px-2 pb-1">
                <p className="text-xs text-white/30 font-medium tracking-wide text-center">
                  🎬 Um pedacinho daquela noite na Vesuvio
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
