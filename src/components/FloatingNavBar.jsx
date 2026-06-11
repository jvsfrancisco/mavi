import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Map, BookOpen, Clock, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function FloatingNavBar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  if (!user) return null; 

  const navItems = [
    { name: "Histórico", path: "/", icon: Clock },
    { name: "Álbum", path: "/album", icon: BookOpen },
    { name: "Mapa", path: "/map", icon: Map },
  ];

  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center p-1.5 bg-[#060608]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredPath === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-4 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white" : "text-white/40 hover:text-white/90"
              }`}
            >
              {/* Pill de fundo ao passar o mouse */}
              {isHovered && !isActive && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-white/5 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}

              {/* Pill ativo (Gradiente suave) */}
              {isActive && (
                <motion.div
                  layoutId="nav-active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-sunset-orange/20 to-sunset-rose/20 border border-sunset-rose/30 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <motion.div 
                animate={{ scale: isActive ? 1.1 : 1 }}
                className="relative z-10"
              >
                <item.icon className={`w-[18px] h-[18px] ${isActive ? 'text-sunset-rose' : ''}`} />
              </motion.div>
              
              <AnimatePresence mode="popLayout">
                {(isActive || isHovered) && (
                  <motion.span 
                    initial={{ opacity: 0, width: 0, scale: 0.8 }}
                    animate={{ opacity: 1, width: "auto", scale: 1 }}
                    exit={{ opacity: 0, width: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="relative z-10 overflow-hidden whitespace-nowrap"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>

      <div className="w-px h-8 bg-white/10 mx-2" />

      <button
        onClick={logout}
        className="p-3 text-white/30 hover:text-red-400 hover:bg-white/5 transition-all rounded-full"
        title="Sair"
      >
        <LogOut className="w-[18px] h-[18px]" />
      </button>
    </motion.div>
  );
}
