import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingAlbumElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      
      {/* Luzes de fundo / Gradient Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] bg-sunset-rose/60 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] md:w-[600px] md:h-[600px] bg-sunset-orange/50 rounded-full blur-[120px]"
      />

      {/* Coração 1 */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] md:left-[15%] opacity-60 drop-shadow-[0_0_15px_rgba(255,77,109,0.5)]"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF4D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#FF4D6D" fillOpacity="0.8"></path>
        </svg>
      </motion.div>

      {/* Coração 2 */}
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [-10, 5, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] right-[5%] md:right-[10%] opacity-50 drop-shadow-[0_0_20px_rgba(255,143,163,0.4)]"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#FF8FA3" fillOpacity="0.7"></path>
        </svg>
      </motion.div>

      {/* Estrela / Sparkle 1 */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4], rotate: [0, 90, 180] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] md:right-[20%] drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FDE68A" fillOpacity="0.9"></polygon>
        </svg>
      </motion.div>

      {/* Estrela 2 */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, -90, -180] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] md:left-[25%] drop-shadow-[0_0_10px_rgba(253,230,138,0.5)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FDE68A" fillOpacity="0.8"></polygon>
        </svg>
      </motion.div>

      {/* Mini Polaroid Flutuando */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [-15, -5, -15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[60%] left-[5%] md:left-[8%] opacity-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="w-12 h-16 md:w-16 md:h-20 bg-white p-1 pb-3 md:pb-4 rounded-[2px] flex flex-col border border-white/20 shadow-xl">
          <div className="flex-1 bg-neutral-300 w-full" />
        </div>
      </motion.div>

      {/* Pontinhos Brilhantes (Partículas) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"
          animate={{ y: [0, -80, 0], opacity: [0, 0.8, 0] }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
        />
      ))}
      
    </div>
  );
}
