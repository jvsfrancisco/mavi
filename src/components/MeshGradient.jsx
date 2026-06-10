import { motion, useTransform, useMotionTemplate } from "framer-motion";

const COLOR_STOPS = {

  positions: [0, 0.05, 0.11, 0.17, 0.23, 0.29, 0.35, 0.41, 0.47, 0.53, 0.59, 0.65, 0.71, 0.76, 0.82, 0.88, 0.94, 1],
  blob1: [
    "rgba(251, 113, 133, 0.25)", 
    "rgba(249, 115, 22, 0.30)",  
    "rgba(249, 115, 22, 0.25)",  
    "rgba(220, 38, 38, 0.22)",   
    "rgba(59, 130, 246, 0.20)",  
    "rgba(37, 99, 235, 0.22)",   
    "rgba(217, 119, 6, 0.22)",   
    "rgba(180, 83, 9, 0.18)",    
    "rgba(139, 92, 246, 0.22)",  
    "rgba(99, 56, 204, 0.18)",   
    "rgba(217, 70, 239, 0.25)",  
    "rgba(192, 38, 211, 0.20)",  
    "rgba(220, 38, 38, 0.25)",   
    "rgba(153, 27, 27, 0.20)",   
    "rgba(16, 185, 129, 0.25)",  
    "rgba(5, 150, 105, 0.20)",   
    "rgba(244, 63, 94, 0.25)",   
    "rgba(225, 29, 72, 0.20)",   
    "rgba(147, 51, 234, 0.12)",  
  ],
  blob2: [
    "rgba(147, 51, 234, 0.15)",  
    "rgba(245, 158, 11, 0.22)",  
    "rgba(251, 191, 36, 0.18)",  
    "rgba(248, 113, 113, 0.18)", 
    "rgba(125, 211, 252, 0.20)", 
    "rgba(56, 189, 248, 0.18)",  
    "rgba(253, 230, 138, 0.15)", 
    "rgba(252, 211, 77, 0.18)",  
    "rgba(192, 132, 252, 0.18)", 
    "rgba(168, 85, 247, 0.20)",  
    "rgba(232, 121, 249, 0.22)", 
    "rgba(217, 70, 239, 0.18)",  
    "rgba(248, 113, 113, 0.22)", 
    "rgba(239, 68, 68, 0.18)",   
    "rgba(52, 211, 153, 0.20)",  
    "rgba(16, 185, 129, 0.18)",  
    "rgba(251, 113, 133, 0.22)", 
    "rgba(244, 63, 94, 0.18)",   
    "rgba(59, 130, 246, 0.10)",  
  ],
  blob3: [
    "rgba(59, 130, 246, 0.20)",  
    "rgba(251, 146, 60, 0.20)",  
    "rgba(249, 115, 22, 0.22)",  
    "rgba(185, 28, 28, 0.15)",   
    "rgba(29, 78, 216, 0.15)",   
    "rgba(30, 64, 175, 0.18)",   
    "rgba(217, 119, 6, 0.18)",   
    "rgba(180, 83, 9, 0.20)",    
    "rgba(109, 40, 217, 0.22)",  
    "rgba(91, 33, 182, 0.20)",   
    "rgba(162, 28, 175, 0.25)",  
    "rgba(134, 25, 143, 0.20)",  
    "rgba(185, 28, 28, 0.25)",   
    "rgba(153, 27, 27, 0.20)",   
    "rgba(4, 120, 87, 0.20)",    
    "rgba(6, 95, 70, 0.18)",     
    "rgba(225, 29, 72, 0.22)",   
    "rgba(190, 18, 60, 0.20)",   
    "rgba(236, 72, 153, 0.12)",  
  ],
  blob4: [
    "rgba(236, 72, 153, 0.15)",  
    "rgba(254, 215, 170, 0.20)", 
    "rgba(253, 186, 116, 0.18)", 
    "rgba(252, 165, 165, 0.20)", 
    "rgba(186, 230, 253, 0.15)", 
    "rgba(125, 211, 252, 0.18)", 
    "rgba(254, 243, 199, 0.12)", 
    "rgba(253, 230, 138, 0.15)", 
    "rgba(216, 180, 254, 0.15)", 
    "rgba(192, 132, 252, 0.18)", 
    "rgba(240, 171, 252, 0.15)", 
    "rgba(232, 121, 249, 0.18)", 
    "rgba(252, 165, 165, 0.18)", 
    "rgba(248, 113, 113, 0.15)", 
    "rgba(13, 148, 136, 0.15)",  
    "rgba(15, 118, 110, 0.12)",  
    "rgba(251, 113, 133, 0.15)", 
    "rgba(225, 29, 72, 0.12)",   
    "rgba(55, 48, 163, 0.08)",   
  ],
};

export default function MeshGradient({ scrollYProgress }) {

  const blob1Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob1);
  const blob2Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob2);
  const blob3Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob3);
  const blob4Color = useTransform(scrollYProgress, COLOR_STOPS.positions, COLOR_STOPS.blob4);

  const bg1 = useMotionTemplate`radial-gradient(circle closest-side, ${blob1Color} 0%, transparent 100%)`;
  const bg2 = useMotionTemplate`radial-gradient(circle closest-side, ${blob2Color} 0%, transparent 100%)`;
  const bg3 = useMotionTemplate`radial-gradient(circle closest-side, ${blob3Color} 0%, transparent 100%)`;
  const bg4 = useMotionTemplate`radial-gradient(circle closest-side, ${blob4Color} 0%, transparent 100%)`;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      <div className="absolute inset-0 bg-[#060608]" />

      <motion.div
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] mesh-blob-1"
        style={{
          background: bg1,
          top: "-10%",
          left: "-15%",
        }}
      />

      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] mesh-blob-2"
        style={{
          background: bg2,
          bottom: "-15%",
          right: "-10%",
        }}
      />

      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] mesh-blob-3"
        style={{
          background: bg3,
          top: "30%",
          left: "40%",
        }}
      />

      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] mesh-blob-4"
        style={{
          background: bg4,
          top: "5%",
          right: "5%",
        }}
      />

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
