import { motion, useScroll } from "framer-motion";
import MeshGradient from "../components/MeshGradient";
import HeroSection from "../components/HeroSection";
import TimelineConnector from "../components/TimelineConnector";
import Event01_PrimeiroDate from "../sections/Event01_PrimeiroDate";
import Event02_Pizzaria from "../sections/Event02_Pizzaria";
import Event03_Mirante from "../sections/Event03_Mirante";
import Event04_TuttoNhoque from "../sections/Event04_TuttoNhoque";
import Event05_NoiteEmCasa from "../sections/Event05_NoiteEmCasa";
import Event06_NeonAniversario from "../sections/Event06_NeonAniversario";
import Event07_Maracana from "../sections/Event07_Maracana";
import Event08_Cachoeira from "../sections/Event08_Cachoeira";
import Event09_PedidoNamoro from "../sections/Event09_PedidoNamoro";
import Event10_Vikings from "../sections/Event10_Vikings";
import Event11_Lagoa from "../sections/Event11_Lagoa";
import Event12_Formatura from "../sections/Event12_Formatura";
import Event13_BK from "../sections/Event13_BK";
import Event14_RioDasOstras from "../sections/Event14_RioDasOstras";
import Event15_AnoNovo from "../sections/Event15_AnoNovo";
import Event16_Petropolis from "../sections/Event16_Petropolis";
import Event17_PoolParty from "../sections/Event17_PoolParty";

export default function Roadmap() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-[#060608]">

      <MeshGradient scrollYProgress={scrollYProgress} />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #F97316, #FB7185, #3B82F6, #F59E0B)",
        }}
      />

      <HeroSection />

      <TimelineConnector color="from-sunset-rose to-sunset-orange" fromColor="#060608" toColor="#0a0a0f" />

      <Event01_PrimeiroDate />

      <TimelineConnector color="from-sunset-orange to-amber-500" fromColor="#0c4a6e" toColor="#1a0a05" />

      <Event02_Pizzaria />

      <TimelineConnector color="from-amber-500 to-sky-400" fromColor="#1a0a05" toColor="#0a1628" />

      <Event03_Mirante />

      <TimelineConnector color="from-sky-400 to-amber-600" fromColor="#0f1f3d" toColor="#1a0e05" />

      <Event04_TuttoNhoque />

      <TimelineConnector color="from-amber-600 to-purple-500" fromColor="#1a0e05" toColor="#0d0b1a" />

      <Event05_NoiteEmCasa />

      <TimelineConnector color="from-purple-500 to-fuchsia-500" fromColor="#0d0b1a" toColor="#000000" />

      <Event06_NeonAniversario />

      <TimelineConnector color="from-fuchsia-500 to-red-600" fromColor="#000000" toColor="#1a1a1a" />

      <Event07_Maracana />

      <TimelineConnector color="from-red-600 to-emerald-600" fromColor="#1a0505" toColor="#022c22" />

      <Event08_Cachoeira />

      <TimelineConnector color="from-emerald-600 to-rose-600" fromColor="#042f2e" toColor="#2e0513" />

      <Event09_PedidoNamoro />

      <TimelineConnector color="from-rose-500 to-amber-600" fromColor="#2e0513" toColor="#1a0f0a" />

      <Event10_Vikings />

      <TimelineConnector color="from-amber-600 to-sky-500" fromColor="#1c0c05" toColor="#082f49" />

      <Event11_Lagoa />

      <TimelineConnector color="from-sky-500 to-emerald-500" fromColor="#0f172a" toColor="#000000" />

      <Event12_Formatura />

      <TimelineConnector color="from-yellow-500 to-fuchsia-600" fromColor="#000000" toColor="#060608" />

      <Event13_BK />

      <TimelineConnector color="from-fuchsia-600 to-sky-500" fromColor="#060608" toColor="#060608" />

      <Event14_RioDasOstras />

      <TimelineConnector color="from-sky-500 to-amber-400" fromColor="#060608" toColor="#060608" />

      <Event15_AnoNovo />

      <TimelineConnector color="from-amber-400 to-rose-500" fromColor="#060608" toColor="#060608" />

      <Event16_Petropolis />

      <TimelineConnector color="from-rose-500 to-cyan-500" fromColor="#060608" toColor="#060608" />

      <Event17_PoolParty />

      <TimelineConnector color="from-cyan-500 to-transparent" fromColor="#060608" toColor="#060608" />

      <div className="relative py-32 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="text-2xl animate-pulse">✨</span>
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white/90 mb-2">
              Aguardando os próximos capítulos...
            </h3>
            <p className="text-white/40 text-sm md:text-base max-w-md mx-auto">
              A história de vocês está apenas começando. Muitos momentos incríveis ainda serão escritos neste roadmap.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
