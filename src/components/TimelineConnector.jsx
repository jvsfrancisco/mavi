import { motion } from "framer-motion";

/**
 * TimelineConnector
 * Linha vertical animada que conecta as seções do roadmap.
 * Flutua na borda entre as seções sem criar espaço em branco.
 */
export default function TimelineConnector({ 
  color = "from-sunset-orange to-sunset-rose",
}) {
  return (
    <div className="relative flex justify-center" style={{ height: 0, zIndex: 20 }}>
      <motion.div
        className={`w-px h-16 md:h-24 bg-gradient-to-b ${color} opacity-60 absolute`}
        style={{ top: '-2rem', transformOrigin: 'top' }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
