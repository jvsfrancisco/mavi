import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Heart, Users } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingNamoro from "../components/FloatingNamoro";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event09_PedidoNamoro() {
  const sectionRef = useRef(null);
  const [isBeating, setIsBeating] = useState(false);

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
      id="event-09"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              135deg,
              #2e0513 0%,
              #4c0519 40%,
              #831843 80%,
              #2e0513 100%)`,
            opacity: 0.8,
          }}
        />

        <div className="glow w-[600px] h-[600px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/15 to-transparent top-1/4 -right-20" />
        <div className="glow w-[400px] h-[400px] absolute rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 to-transparent bottom-1/4 -left-10" />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #1a0f0a)',
          }}
        />
      </div>

      <FloatingNamoro scrollProgress={scrollYProgress} />

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
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 border-rose-500/30">
            <Calendar className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 09
            </span>
            <span className="w-1 h-1 rounded-full bg-rose-400/50" />
            <span className="text-sm font-semibold text-rose-400">
              07 de Junho de 2025
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="O Pedido (com plateia)"
              wordClassName="bg-gradient-to-r from-rose-300 to-pink-500 bg-clip-text text-transparent drop-shadow-md"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-rose-100/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4 text-rose-400/70" />
            <span className="text-sm tracking-wide text-rose-100/80"> Guaraciaba, MG </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 relative overflow-hidden border-rose-500/20">
              <Heart className="absolute -right-8 -bottom-8 w-40 h-40 text-rose-500/5 rotate-12" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-800 to-pink-900 flex items-center justify-center border border-rose-500/30">
                  <Users className="w-5 h-5 text-rose-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-rose-50">
                    Na frente de todo mundo
                  </h3>
                  <p className="text-xs text-rose-300/60 uppercase tracking-wider">
                    Adeus momento a dois
                  </p>
                </div>
              </div>

              <div className="space-y-4 relative z-10 text-rose-50/70 leading-relaxed text-sm md:text-base">
                <p>
                  O plano era simples e romântico: puxar você pro cantinho, falar 
                  umas palavras bonitas e fazer o pedido oficial de namoro. Só nós dois.
                </p>
                <p>
                  Mas quem disse que a sua família ia deixar? O seu tio Ricardo percebeu o que tava 
                  rolando e, do nada, me fez fazer o pedido na frente da 
                  tia Paula e dos seus primos! 
                </p>
                <p>
                  O que era pra ser um momento super íntimo virou um espetáculo em família. 
                  Eu fiquei morrendo de vergonha, você ficou toda sem graça, mas no final... 
                  foi o "sim" mais divertido e inesquecível de todos. E o melhor de tudo:
                  eu ganhei você e, de quebra, a aprovação de todo mundo.
                </p>
              </div>
            </GlassCard>

            <MagneticElement strength={15}>
              <div className="inline-flex self-start">
                <div 
                  className={`glass-card-subtle px-6 py-3 border-rose-500/30 cursor-pointer group flex items-center gap-3 bg-white/5 transition-shadow duration-500 ${isBeating ? 'shadow-[0_0_20px_rgba(244,63,94,0.4)]' : ''}`}
                  onClick={() => {
                    if (isBeating) return;
                    setIsBeating(true);
                    setTimeout(() => setIsBeating(false), 3000);
                  }}
                  title="Sente o coração bater 💕"
                >
                  <motion.div
                    animate={isBeating ? { scale: [1, 1.4, 1, 1.3, 1] } : {}}
                    transition={isBeating ? { duration: 0.6, repeat: 4, ease: "easeInOut" } : {}}
                  >
                    <Heart className={`w-4 h-4 transition-all duration-300 ${isBeating ? 'text-rose-400 fill-rose-400' : 'text-rose-400 group-hover:scale-125 group-hover:fill-rose-400'}`} />
                  </motion.div>
                  <span className="text-sm font-medium text-rose-100/80 tracking-wider uppercase">Enfim, Namorados</span>
                </div>
              </div>
            </MagneticElement>

          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col gap-4 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >

            <div className="relative z-10 w-full md:w-[85%] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl self-start transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-sm p-2">
              <img loading="lazy" decoding="async"
                src="/photos/date-9.1.png"
                alt="Você sorrindo com algodão doce"
                className="w-full h-auto object-cover rounded-xl"
              />
              <p className="absolute bottom-4 right-4 text-white font-display italic text-sm drop-shadow-md">
                Aquele sorriso...
              </p>
            </div>

            <div className="relative z-20 w-[85%] md:w-[75%] -mt-10 md:-mt-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl self-end transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-sm p-2">
              <img loading="lazy" decoding="async"
                src="/photos/date-9.png"
                alt="Foto no espelho juntos"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <motion.div 
              className="absolute -top-4 right-4 text-2xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
