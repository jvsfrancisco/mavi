import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, PartyPopper, HeartHandshake } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingNeon from "../components/FloatingNeon";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event06_NeonAniversario() {
  const sectionRef = useRef(null);
  const [uvFlash, setUvFlash] = useState(false);

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

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      ref={sectionRef}
      id="event-06"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0 bg-black">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(10, 0, 30, 0.9) 0%, rgba(0, 0, 0, 1) 100%)`,
          }}
        />

        <motion.div 
          className="glow w-[600px] h-[600px] bg-fuchsia-600/15 top-1/4 -left-32 absolute rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(120px)" }}
        />
        <motion.div 
          className="glow w-[500px] h-[500px] bg-cyan-500/15 bottom-1/4 -right-20 absolute rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ filter: "blur(100px)" }}
        />
        <motion.div 
          className="glow w-[400px] h-[400px] bg-lime-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ filter: "blur(90px)" }}
        />

        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #0a0a0f)',
          }}
        />
      </div>

      <FloatingNeon scrollProgress={scrollYProgress} />

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
          <div className="glass-card-subtle inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <PartyPopper className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              Capítulo 06
            </span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/50 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
            <span className="text-sm font-semibold text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">
              Aniversário Neon
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            <TextScrub
              text="Festa Neon &"
              wordClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
            <br className="hidden md:block" />
            <span className="inline md:hidden"> </span>
            <TextScrub
              text="O Grande Passo"
              wordClassName="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2 mt-5 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-sm tracking-wide text-cyan-100">Festa de Aniversário</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale: photoScale, rotate: photoRotate }}
          >

            <div className="absolute -inset-4 bg-gradient-to-br from-fuchsia-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.15)] bg-black/40 backdrop-blur-sm p-3">
              <img loading="lazy" decoding="async"
                src="/photos/aniversario.png"
                alt="Nós dois na festa neon com tintas brilhantes"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-x-3 bottom-3 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-xl">
                <p className="text-fuchsia-300 font-display italic text-sm tracking-wide text-center drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]">
                  Brilhando no escuro ✨
                </p>
              </div>
            </div>

            <motion.div 
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-2 border-lime-400/50 shadow-[0_0_15px_rgba(163,230,53,0.5)] flex items-center justify-center backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lime-300 text-xs font-bold">glow</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-6 md:p-8 relative overflow-hidden bg-white/[0.02] border-white/10 backdrop-blur-xl">

              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-lime-400" />

              <div className="flex items-center gap-3 mb-6 pl-4">
                <div className="w-10 h-10 rounded-xl bg-black/50 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(217,70,239,0.2)] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-fuchsia-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white/90 drop-shadow-md">
                    O Pedido Pro Sogro
                  </h3>
                  <p className="text-xs text-fuchsia-300/70 uppercase tracking-wider">
                    Suando frio na festa
                  </p>
                </div>
              </div>

              <div className="space-y-4 pl-4 text-white/70 leading-relaxed">
                <p>
                  A festa estava incrível. Luz negra, tinta neon brilhando nos nossos 
                  rostos, música alta e aquela energia perfeita. Mas por dentro, meu coração
                  estava batendo num ritmo totalmente diferente.
                </p>
                <p>
                  Aquele era o dia. O dia em que eu decidi que não queria mais só "ficar".
                  Eu queria oficializar. E para fazer do jeito certo, eu precisava pedir 
                  a sua mão para o seu pai. E que momento tenso! Entre as luzes neon e o som
                  da festa, eu lá, reunindo coragem para ter "aquela conversa" com o sogrão.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8 bg-black/40 border-fuchsia-500/20" variant="subtle" delay={0.4}>
              <p className="text-white/60 leading-relaxed italic text-sm md:text-base border-l-2 border-cyan-500/50 pl-4 py-1">
                "Pode parecer uma atitude antiga para alguns, mas para mim era a prova do 
                quanto você é especial. Quando ele disse sim, foi como se a festa toda 
                tivesse ganhado ainda mais cor. Foi ali que nossa história mudou de patamar."
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-lime-400/50" />
                <span
                  className="text-white text-xs font-semibold tracking-widest uppercase cursor-pointer hover:text-cyan-300 transition-colors px-4 py-2 rounded-full border border-white/10 bg-white/5 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  onClick={() => {
                    setUvFlash(true);
                    setTimeout(() => setUvFlash(false), 400);
                  }}
                  title="Soltar as cores! ✨"
                >
                  ✨ CELEBRAR
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-fuchsia-400/50" />
              </div>

              <AnimatePresence>
                {uvFlash && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl mix-blend-screen pointer-events-none z-50"
                    style={{ background: 'linear-gradient(135deg, rgba(217,70,239,0.4), rgba(34,211,238,0.4))' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </AnimatePresence>
            </GlassCard>

            <MagneticElement strength={15}>
              <motion.div
                className="mt-2 inline-flex self-start items-center gap-3 bg-gradient-to-r from-fuchsia-900/40 to-cyan-900/40 border border-fuchsia-500/30 px-5 py-3 rounded-2xl shadow-[0_0_15px_rgba(217,70,239,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)] animate-pulse" />
                <span className="text-sm font-medium text-white/80">O sim mais importante (antes do seu)</span>
              </motion.div>
            </MagneticElement>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
