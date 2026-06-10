import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Map, BookOpen, Clock, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function FloatingNavBar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null; // Não mostra menu se não estiver logado

  const navItems = [
    { name: "História", path: "/roadmap", icon: Clock },
    { name: "Álbum", path: "/album", icon: BookOpen },
    { name: "Mapa", path: "/map", icon: Map },
  ];

  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (location.pathname === "/" && item.path === "/roadmap"); // fallback se tivermos a home
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive ? "text-white" : "text-white/40 hover:text-white/80"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon className="w-4 h-4 relative z-10" />
            <span className="relative z-10 hidden md:block">{item.name}</span>
          </Link>
        );
      })}

      <div className="w-px h-6 bg-white/10 mx-2" />

      <button
        onClick={logout}
        className="p-2 text-white/40 hover:text-red-400 transition-colors rounded-full"
        title="Sair"
      >
        <LogOut className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
