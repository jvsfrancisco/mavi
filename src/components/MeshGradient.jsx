import { motion, useTransform, useMotionTemplate } from "framer-motion";

/**
 * MeshGradient
 * Fundo com manchas de cor orgânicas animadas (estilo Aurora / Mesh Gradient).
 * As cores mudam suavemente conforme o scroll, transicionando entre os temas
 * de cada seção do roadmap.
 *
 * Cada "blob" é um radial-gradient posicionado absolutamente, com:
 * - Posição animada (movimento orgânico via CSS keyframes)
 * - Cor animada (via useTransform atrelado ao scroll)
 * - Opacidade e tamanho distintos para criar profundidade
 *
 * @param {object} props
 * @param {import("framer-motion").MotionValue} props.scrollYProgress
 */

/** Paletas de cores por seção */
const COLOR_STOPS = {
  // [scrollProgress] → [blob1, blob2, blob3, blob4]
  positions: [0, 0.05, 0.11, 0.17, 0.23, 0.29, 0.35, 0.41, 0.47, 0.53, 0.59, 0.65, 0.71, 0.76, 0.82, 0.88, 0.94, 1],
  blob1: [
    "rgba(251, 113, 133, 0.25)", // Hero: rosa
    "rgba(249, 115, 22, 0.30)",  // → Evento 1: laranja sunset
    "rgba(249, 115, 22, 0.25)",  // Evento 1: laranja
    "rgba(220, 38, 38, 0.22)",   // → Evento 2: vermelho pizzaria
    "rgba(59, 130, 246, 0.20)",  // → Evento 3: azul mirante
    "rgba(37, 99, 235, 0.22)",   // Evento 3: azul profundo
    "rgba(217, 119, 6, 0.22)",   // → Evento 4: âmbar italiano
    "rgba(180, 83, 9, 0.18)",    // Evento 4: terracota
    "rgba(139, 92, 246, 0.22)",  // → Evento 5: violeta noturno
    "rgba(99, 56, 204, 0.18)",   // Evento 5: roxo profundo
    "rgba(217, 70, 239, 0.25)",  // → Evento 6: Neon fúcsia
    "rgba(192, 38, 211, 0.20)",  // Evento 6: fúcsia profundo
    "rgba(220, 38, 38, 0.25)",   // → Evento 7: Flamengo (vermelho vivo)
    "rgba(153, 27, 27, 0.20)",   // Evento 7: vermelho escuro
    "rgba(16, 185, 129, 0.25)",  // → Evento 8: Cachoeira (emerald)
    "rgba(5, 150, 105, 0.20)",   // Evento 8: emerald escuro
    "rgba(244, 63, 94, 0.25)",   // → Evento 9: Pedido (rose)
    "rgba(225, 29, 72, 0.20)",   // Evento 9: rose profundo
    "rgba(147, 51, 234, 0.12)",  // Final: roxo suave
  ],
  blob2: [
    "rgba(147, 51, 234, 0.15)",  // Hero: roxo
    "rgba(245, 158, 11, 0.22)",  // → Evento 1: amarelo sol
    "rgba(251, 191, 36, 0.18)",  // Evento 1: amarelo quente
    "rgba(248, 113, 113, 0.18)", // → Evento 2: tomate brilhante
    "rgba(125, 211, 252, 0.20)", // → Evento 3: azul celeste
    "rgba(56, 189, 248, 0.18)",  // Evento 3: ciano
    "rgba(253, 230, 138, 0.15)", // → Evento 4: trigo quente
    "rgba(252, 211, 77, 0.18)",  // Evento 4: dourado
    "rgba(192, 132, 252, 0.18)", // → Evento 5: lilás suave
    "rgba(168, 85, 247, 0.20)",  // Evento 5: ametista
    "rgba(232, 121, 249, 0.22)", // → Evento 6: rosa neon
    "rgba(217, 70, 239, 0.18)",  // Evento 6: fúcsia choque
    "rgba(248, 113, 113, 0.22)", // → Evento 7: Flamengo (vermelho claro)
    "rgba(239, 68, 68, 0.18)",   // Evento 7: vermelho
    "rgba(52, 211, 153, 0.20)",  // → Evento 8: Cachoeira (verde claro)
    "rgba(16, 185, 129, 0.18)",  // Evento 8: emerald claro
    "rgba(251, 113, 133, 0.22)", // → Evento 9: Pedido (rosa claro)
    "rgba(244, 63, 94, 0.18)",   // Evento 9: rose claro
    "rgba(59, 130, 246, 0.10)",  // Final: azul sereno
  ],
  blob3: [
    "rgba(59, 130, 246, 0.20)",  // Hero: azul
    "rgba(251, 146, 60, 0.20)",  // → Evento 1: laranja médio
    "rgba(249, 115, 22, 0.22)",  // Evento 1: laranja vivo
    "rgba(185, 28, 28, 0.15)",   // → Evento 2: vinho
    "rgba(29, 78, 216, 0.15)",   // → Evento 3: azul marinho
    "rgba(30, 64, 175, 0.18)",   // Evento 3: azul escuro
    "rgba(217, 119, 6, 0.18)",   // → Evento 4: mostarda
    "rgba(180, 83, 9, 0.20)",    // Evento 4: ocre
    "rgba(109, 40, 217, 0.22)",  // → Evento 5: roxo real
    "rgba(91, 33, 182, 0.20)",   // Evento 5: roxo muito profundo
    "rgba(162, 28, 175, 0.25)",  // → Evento 6: roxo neon escuro
    "rgba(134, 25, 143, 0.20)",  // Evento 6: púrpura neon
    "rgba(185, 28, 28, 0.25)",   // → Evento 7: Flamengo (escuro)
    "rgba(153, 27, 27, 0.20)",   // Evento 7: vinho escuro
    "rgba(4, 120, 87, 0.20)",    // → Evento 8: Cachoeira (verde floresta)
    "rgba(6, 95, 70, 0.18)",     // Evento 8: verde escuro
    "rgba(225, 29, 72, 0.22)",   // → Evento 9: Pedido (rose vibrante)
    "rgba(190, 18, 60, 0.20)",   // Evento 9: carmim
    "rgba(236, 72, 153, 0.12)",  // Final: rosa pastel
  ],
  blob4: [
    "rgba(236, 72, 153, 0.15)",  // Hero: rosa claro
    "rgba(254, 215, 170, 0.20)", // → Evento 1: pêssego
    "rgba(253, 186, 116, 0.18)", // Evento 1: melão
    "rgba(252, 165, 165, 0.20)", // → Evento 2: rosa claro pizzaria
    "rgba(186, 230, 253, 0.15)", // → Evento 3: azul brisa
    "rgba(125, 211, 252, 0.18)", // Evento 3: azul céu
    "rgba(254, 243, 199, 0.12)", // → Evento 4: creme suave
    "rgba(253, 230, 138, 0.15)", // Evento 4: palha
    "rgba(216, 180, 254, 0.15)", // → Evento 5: lavanda
    "rgba(192, 132, 252, 0.18)", // Evento 5: uva claro
    "rgba(240, 171, 252, 0.15)", // → Evento 6: rosa chiclete neon
    "rgba(232, 121, 249, 0.18)", // Evento 6: rosa bebê neon
    "rgba(252, 165, 165, 0.18)", // → Evento 7: Flamengo (rosado)
    "rgba(248, 113, 113, 0.15)", // Evento 7: vermelho leve
    "rgba(13, 148, 136, 0.15)",  // → Evento 8: Cachoeira (teal)
    "rgba(15, 118, 110, 0.12)",  // Evento 8: teal escuro
    "rgba(251, 113, 133, 0.15)", // → Evento 9: Pedido (rosa suave)
    "rgba(225, 29, 72, 0.12)",   // Evento 9: rosa escuro
    "rgba(55, 48, 163, 0.08)",   // Final: índigo sutil
  ],
};

export default function MeshGradient({ scrollYProgress }) {
  // Cores dinâmicas de cada blob atreladas ao scroll
  const blob1Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob1);
  const blob2Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob2);
  const blob3Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob3);
  const blob4Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob4);

  // Otimização: Substituindo filter: blur() por radial-gradient diretamente via useMotionTemplate.
  // Isso remove o peso de repainting da GPU que o blur() causava no scroll.
  const bg1 = useMotionTemplate`radial-gradient(circle closest-side, ${blob1Color} 0%, transparent 100%)`;
  const bg2 = useMotionTemplate`radial-gradient(circle closest-side, ${blob2Color} 0%, transparent 100%)`;
  const bg3 = useMotionTemplate`radial-gradient(circle closest-side, ${blob3Color} 0%, transparent 100%)`;
  const bg4 = useMotionTemplate`radial-gradient(circle closest-side, ${blob4Color} 0%, transparent 100%)`;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base escura */}
      <div className="absolute inset-0 bg-[#060608]" />

      {/* ---- Blob 1 (grande, top-left, lento) ---- */}
      <motion.div
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] mesh-blob-1"
        style={{
          background: bg1,
          top: "-10%",
          left: "-15%",
        }}
      />

      {/* ---- Blob 2 (médio, bottom-right, médio) ---- */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] mesh-blob-2"
        style={{
          background: bg2,
          bottom: "-15%",
          right: "-10%",
        }}
      />

      {/* ---- Blob 3 (médio, center, rápido) ---- */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] mesh-blob-3"
        style={{
          background: bg3,
          top: "30%",
          left: "40%",
        }}
      />

      {/* ---- Blob 4 (pequeno, top-right, lento-inverso) ---- */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] mesh-blob-4"
        style={{
          background: bg4,
          top: "5%",
          right: "5%",
        }}
      />
      {/* ---- Blob 5 (extra sutil, bottom-left) ---- */}
      <motion.div
        className="absolute w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full mesh-blob-5"
        style={{
          background: blob1Color,
          filter: "blur(130px)",
          opacity: 0.4,
          bottom: "10%",
          left: "10%",
        }}
      />
    </div>
  );
}
