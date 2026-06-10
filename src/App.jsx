import { motion, useScroll } from "framer-motion";
import MeshGradient from "./components/MeshGradient";
import HeroSection from "./components/HeroSection";
import TimelineConnector from "./components/TimelineConnector";
import Event01_PrimeiroDate from "./sections/Event01_PrimeiroDate";
import Event02_Pizzaria from "./sections/Event02_Pizzaria";
import Event03_Mirante from "./sections/Event03_Mirante";
import Event04_TuttoNhoque from "./sections/Event04_TuttoNhoque";
import Event05_NoiteEmCasa from "./sections/Event05_NoiteEmCasa";
import Event06_NeonAniversario from "./sections/Event06_NeonAniversario";
import Event07_Maracana from "./sections/Event07_Maracana";
import Event08_Cachoeira from "./sections/Event08_Cachoeira";
import Event09_PedidoNamoro from "./sections/Event09_PedidoNamoro";
import Event10_Vikings from "./sections/Event10_Vikings";
import Event11_Lagoa from "./sections/Event11_Lagoa";
import Event12_Formatura from "./sections/Event12_Formatura";
import Event13_BK from "./sections/Event13_BK";
import Event14_RioDasOstras from "./sections/Event14_RioDasOstras";
import Event15_AnoNovo from "./sections/Event15_AnoNovo";

/**
 * App
 * Componente raiz — gerencia o layout global, mesh gradient animado
 * e a barra de progresso do scroll.
 */
export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-[#060608]">
      {/* ---- Mesh Gradient Animado (Aurora) — fundo vivo ---- */}
      <MeshGradient scrollYProgress={scrollYProgress} />

      {/* ---- Noise texture overlay (REMOVIDO PARA PERFORMANCE) ---- */}

      {/* ---- Barra de progresso do scroll (topo da tela) ---- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #F97316, #FB7185, #3B82F6, #F59E0B)",
        }}
      />

      {/* ============================================
          SEÇÕES DO ROADMAP
          ============================================ */}

      {/* 🏠 Hero — Tela de abertura */}
      <HeroSection />

      {/* ── Conector ── */}
      <TimelineConnector color="from-sunset-rose to-sunset-orange" fromColor="#060608" toColor="#0a0a0f" />

      {/* 🏖️ Evento 01 — Primeiro Date (Arpoador + McDonald's) */}
      <Event01_PrimeiroDate />

      {/* ── Conector 1 → 2 ── */}
      <TimelineConnector color="from-sunset-orange to-amber-500" fromColor="#0c4a6e" toColor="#1a0a05" />

      {/* 🍕 Evento 02 — Pizzaria Vesuvio Carioca */}
      <Event02_Pizzaria />

      {/* ── Conector 2 → 3 ── */}
      <TimelineConnector color="from-amber-500 to-sky-400" fromColor="#1a0a05" toColor="#0a1628" />

      {/* 🏔️ Evento 03 — Mirante Dona Marta */}
      <Event03_Mirante />

      {/* ── Conector 3 → 4 ── */}
      <TimelineConnector color="from-sky-400 to-amber-600" fromColor="#0f1f3d" toColor="#1a0e05" />

      {/* 🍝 Evento 04 — Tutto Nhoque */}
      <Event04_TuttoNhoque />

      {/* ── Conector 4 → 5 ── */}
      <TimelineConnector color="from-amber-600 to-purple-500" fromColor="#1a0e05" toColor="#0d0b1a" />

      {/* 🌙 Evento 05 — Longe dos Perigos Noturnos */}
      <Event05_NoiteEmCasa />

      {/* ── Conector 5 → 6 ── */}
      <TimelineConnector color="from-purple-500 to-fuchsia-500" fromColor="#0d0b1a" toColor="#000000" />

      {/* 🎉 Evento 06 — Aniversário Neon */}
      <Event06_NeonAniversario />

      {/* ── Conector 6 → 7 ── */}
      <TimelineConnector color="from-fuchsia-500 to-red-600" fromColor="#000000" toColor="#1a1a1a" />

      {/* ⚽ Evento 07 — Maracanã */}
      <Event07_Maracana />

      {/* ── Conector 7 → 8 ── */}
      <TimelineConnector color="from-red-600 to-emerald-600" fromColor="#1a0505" toColor="#022c22" />

      {/* 🌿 Evento 08 — Cachoeira do Horto */}
      <Event08_Cachoeira />

      {/* ── Conector 8 → 9 ── */}
      <TimelineConnector color="from-emerald-600 to-rose-600" fromColor="#042f2e" toColor="#2e0513" />

      {/* 💍 Evento 09 — O Pedido de Namoro */}
      <Event09_PedidoNamoro />

      {/* ── Conector 9 → 10 ── */}
      <TimelineConnector color="from-rose-500 to-amber-600" fromColor="#2e0513" toColor="#1a0f0a" />

      {/* ⚔️ Evento 10 — Vikings (Flores e Valhalla) */}
      <Event10_Vikings />

      {/* ── Conector 10 → 11 ── */}
      <TimelineConnector color="from-amber-600 to-sky-500" fromColor="#1c0c05" toColor="#082f49" />

      {/* 🚲 Evento 11 — Lagoa Rodrigo de Freitas */}
      <Event11_Lagoa />

      {/* ── Conector 11 → 12 ── */}
      <TimelineConnector color="from-sky-500 to-emerald-500" fromColor="#0f172a" toColor="#000000" />

      {/* 🎓 Evento 12 — Formatura IFRJ Monumento */}
      <Event12_Formatura />

      {/* ── Conector 12 → 13 ── */}
      <TimelineConnector color="from-yellow-500 to-fuchsia-600" fromColor="#000000" toColor="#060608" />

      {/* 🎤 Evento 13 — Show do BK na Fundição */}
      <Event13_BK />

      {/* ── Conector 13 → 14 ── */}
      <TimelineConnector color="from-fuchsia-600 to-sky-500" fromColor="#060608" toColor="#060608" />

      {/* 🌊 Evento 14 — Rio das Ostras */}
      <Event14_RioDasOstras />

      {/* ── Conector 14 → 15 ── */}
      <TimelineConnector color="from-sky-500 to-amber-400" fromColor="#060608" toColor="#060608" />

      {/* 🎆 Evento 15 — Ano Novo */}
      <Event15_AnoNovo />

      {/* ── Conector final provisório ── */}
      <TimelineConnector color="from-amber-400 to-transparent" fromColor="#060608" toColor="#060608" />

      {/* 📌 Placeholder — Próximos eventos */}
      <section className="min-h-[50vh] flex items-center justify-center">
        <motion.p
          className="text-white/20 text-sm tracking-widest uppercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Mais capítulos em breve...
        </motion.p>
      </section>
    </div>
  );
}
// Force Tailwind Update
