import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, UtensilsCrossed } from "lucide-react";
import { useRef, useState } from "react";
import GlassCard from "../components/GlassCard";
import FloatingItaliano from "../components/FloatingItaliano";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event04_TuttoNhoque() {
  const sectionRef = useRef(null);
  const moods = ["😤", "😊", "🥰", "😂"];
  const [moodIndex, setMoodIndex] = useState(0);
  const currentMood = moods[moodIndex];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const photo1Scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.95]);
  const photo1Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);
  const photo2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 1, 3]);

  return (
    <section
      ref={sectionRef}
      id="event-04"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              180deg,
              #1a0e05 0%,
              #2d1a0a 22%,
              #4a2810 35%,
              #6b3515 48%,
              #7c3a15 55%,
              #5c2d12 65%,
              #3a1e0d 78%,
              #1a0e05 100%,)`,
            opacity: 0.5,
          }}
        />
        <div className="glow w-[500px] h-[500px] bg-amber-700/18 top-1/4 -right-20 absolute" />
        <div className="glow w-[450px] h-[450px] bg-red-900/12 bottom-1/3 -left-10 absolute" />
        <div className="glow w-[350px] h-[350px] bg-amber-500/10 top-1/2 left-1/3 absolute" />
        <div className="glow w-[500px] h-[250px] bg-amber-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #050508)',
          }}
        />
      </div>

      <FloatingItaliano scrollProgress={scrollYProgress} />

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
              Capítulo 04
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-amber-400">
              Tutto Nhoque
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Ela ficou bolada"
              wordClassName="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Tutto Nhoque, Rio de Janeiro</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <GlassCard className="p-6 md:p-8" delay={0.3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white/90">
                    Tutto Nhoque
                  </h3>
                  <p className="text-xs text-white/40">Spoiler: não comemos nhoque</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                A gente foi no Tutto Nhoque e — pasmem — nem pediu nhoque.
                Não me pergunte por quê, só sei que a comida era boa e que
                em algum momento ela ficou bolada comigo. Tipo, BOLADA bolada.
                Aquele olhar de "tá de brincadeira, né?".
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" variant="subtle" delay={0.5}>
              <p className="text-white/50 leading-relaxed text-sm md:text-base italic">
                "Mas é isso, né. Faz parte. A gente briga, fica emburrada, e
                daqui a pouco tá rindo de novo. Esse é o charme. Se fosse
                perfeito o tempo todo, ia ser chato demais."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
                <motion.span
                  className="text-amber-400/50 text-base select-none cursor-pointer"
                  onClick={() => setMoodIndex((prev) => (prev + 1) % moods.length)}
                  whileTap={{ scale: 1.5, rotate: 20 }}
                  key={moodIndex}
                  initial={{ scale: 0.5, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  title="Clica pra mudar o humor 😏"
                >{currentMood}🍝</motion.span>
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
                <span className="text-2xl">{currentMood}</span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Status do date</p>
                  <p className="text-sm text-white/60 font-medium">
                    Comida boa + ela me olhando torto
                  </p>
                </div>
              </motion.div>
            </MagneticElement>
          </div>

          <div className="relative order-1 lg:order-2">

            <motion.div
              style={{ scale: photo1Scale, rotate: photo1Rotate }}
            >
              <GlassCard className="p-3 md:p-4 relative group" delay={0.2}>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-transparent to-red-600/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-amber-950/50 to-red-950/50">
                  <img loading="lazy" decoding="async"
                    src="/photos/date-4.png"
                    alt="Nosso date no Tutto Nhoque"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />
                </div>

                <div className="mt-3 px-2 pb-1">
                  <p className="text-xs text-white/30 font-medium tracking-wide text-center">
                    🍽️ Tudo tranquilo... por enquanto
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-8 w-[45%] md:w-[55%] z-20"
              style={{ rotate: photo2Rotate }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-2 md:p-3 relative group" delay={0.6}>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-amber-950/50 to-red-950/50">
                  <img loading="lazy" decoding="async"
                    src="/photos/date-4.2.png"
                    alt="Ela bolada no Tutto Nhoque"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-2 px-1 pb-0.5">
                  <p className="text-[10px] text-white/30 font-medium tracking-wide text-center">
                    😤 a cara de bolada
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
