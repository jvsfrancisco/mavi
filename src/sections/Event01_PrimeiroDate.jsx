import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Sun } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";
import FloatingElements from "../components/FloatingElements";
import TextScrub from "../components/TextScrub";
import MagneticElement from "../components/MagneticElement";

export default function Event01_PrimeiroDate() {
  const sectionRef = useRef(null);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const secretPhrase = "(na real eu quase desisti de ir)";

  const startTyping = () => {
    if (isTyping || typingText.length > 0) {
      setTypingText("");
      setIsTyping(false);
      return;
    }
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypingText(secretPhrase.slice(0, i));
      if (i >= secretPhrase.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 60);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  const photoScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);

  return (
    <section
      ref={sectionRef}
      id="event-01"
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >

      <div className="absolute inset-0 z-0">

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(              180deg,
              #1a0a2e 0%,
              #2d1b69 30%,
              #6b2fa0 45%,
              #c2185b 55%,
              #e65100 68%,
              #f57c00 78%,
              #ffb74d 88%,
              #0c4a6e 100%,)`,
            opacity: 0.6,
          }}
        />

        <div className="glow w-[600px] h-[600px] bg-sunset-orange/30 top-1/3 -right-40 absolute" />
        <div className="glow w-[400px] h-[400px] bg-sunset-rose/20 bottom-1/4 left-10 absolute" />
        <div className="glow w-[300px] h-[300px] bg-sunset-amber/15 top-1/4 left-1/3 absolute" />

        <div 
          className="bottom-fade-overlay absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, #1a0a05)',
          }}
        />
      </div>

      <FloatingElements scrollProgress={scrollYProgress} />

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
            <Calendar className="w-4 h-4 text-sunset-amber" />
            <span className="text-sm font-medium text-white/70 tracking-wide">
              Capítulo 01
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm font-semibold text-sunset-amber">
              Nosso Primeiro Date
            </span>
          </div>
        </motion.div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <TextScrub
              text="Onde tudo começou"
              wordClassName="bg-gradient-to-r from-sunset-orange via-sunset-rose to-sunset-amber bg-clip-text text-transparent"
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
            <span className="text-sm tracking-wide">Praia do Arpoador, Rio de Janeiro</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <motion.div
            className="relative"
            style={{ scale: photoScale, rotate: photoRotate }}
          >
            <GlassCard className="p-3 md:p-4 relative group" delay={0.3}>

              <div className="absolute -inset-1 bg-gradient-to-br from-sunset-orange/20 via-transparent to-sunset-rose/20 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-sunset-deep/50 to-ocean-dark/50">

                <img loading="lazy" decoding="async"
                  src="/photos/date-1.jpg"
                  alt="Nosso primeiro date na Praia do Arpoador"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {

                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                <div
                  className="absolute inset-0 flex-col items-center justify-center gap-4 bg-gradient-to-br from-sunset-deep/80 to-ocean-dark/80 hidden"
                >
                  <Sun className="w-12 h-12 text-sunset-amber/50" />
                  <p className="text-white/30 text-sm text-center px-6">
                    Coloque a foto em<br />
                    <code className="text-sunset-amber/60 text-xs">public/photos/date-1.jpg</code>
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="mt-3 px-2 pb-1">
                <p className="text-xs text-white/30 font-medium tracking-wide text-center">
                  📍 Arpoador — O pôr do sol mais bonito do Rio
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            <GlassCard className="p-6 md:p-8" delay={0.5}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sunset-orange to-sunset-rose flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white/90">
                    Arpoador + McDonald's
                  </h3>
                  <p className="text-xs text-white/40">Combo imbatível</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Primeiro encontro e a gente foi pro Arpoador. Eu tava nervoso,
                tentando parecer tranquilo (não funcionou). A praia tava linda,
                o céu tava absurdo, mas sinceramente? Eu tava prestando mais
                atenção em você do que em qualquer pôr do sol.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" variant="subtle" delay={0.7}>
              <p className="text-white/50 leading-relaxed text-sm md:text-base italic">
                "Antes da praia rolou um McDonald's. Porque né, a gente é
                romântico assim. Big Mac, batata frita e muita risada. Não
                precisa de restaurante chique quando a companhia já é boa."
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-sunset-amber/30 to-transparent" />
                  <span
                    className="text-sunset-amber/50 text-xs easter-egg-trigger select-none cursor-pointer hover:text-sunset-amber/80 transition-colors"
                    onClick={startTyping}
                    title="Clica aí 👀"
                  >🍟🍔</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-sunset-amber/30 to-transparent" />
                </div>
                {typingText && (
                  <motion.p
                    className="text-sunset-amber/60 text-xs text-center font-mono"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {typingText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </motion.p>
                )}
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
                <span className="text-2xl">🌅</span>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Resumo do dia</p>
                  <p className="text-sm text-white/60 font-medium">
                    Nervosismo + McDonald's + pôr do sol
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
