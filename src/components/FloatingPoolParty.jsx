import { motion, useTransform } from "framer-motion";
import { Sun, Droplet, Music } from "lucide-react";

export default function FloatingPoolParty({ scrollProgress }) {
  const y1 = useTransform(scrollProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -60]);
  const rotate1 = useTransform(scrollProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollProgress, [0, 1], [0, -45]);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

      <motion.div
        className="absolute top-[15%] right-[15%] text-amber-400/20"
        style={{ y: y1, rotate: rotate1 }}
      >
        <Sun className="w-24 h-24" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[10%] text-cyan-400/20"
        style={{ y: y2, rotate: rotate2 }}
      >
        <Droplet className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-[40%] left-[20%] text-blue-400/20"
        style={{ y: y3, rotate: rotate2 }}
      >
        <Droplet className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] right-[25%] text-fuchsia-400/15"
        style={{ y: y1, rotate: rotate1 }}
      >
        <Music className="w-12 h-12" />
      </motion.div>
    </div>
  );
}
