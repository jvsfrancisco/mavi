import { motion } from "framer-motion";
import { Heart, Lock } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { loginWithEmail, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startDate = new Date('2025-06-07T00:00:00');
  const diffTime = new Date() - startDate;
  const daysTogether = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsSubmitting(true);
    await loginWithEmail(email, password);
    setIsSubmitting(false);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#060608]">
      {/* Glows de Fundo da Hero Original */}
      <div className="glow w-[500px] h-[500px] bg-sunset-orange/20 -top-20 -left-20 absolute pointer-events-none" />
      <div className="glow w-[400px] h-[400px] bg-sunset-rose/15 bottom-20 right-10 absolute pointer-events-none" />
      <div className="glow w-[600px] h-[600px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none" />

      {/* Partículas flutuantes da Hero Original */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `rgba(251, 113, 133, ${0.1 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -(20 + Math.random() * 40), 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 w-full max-w-md">
        <motion.div
          className="mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            <Heart className="w-16 h-16 mx-auto text-sunset-rose fill-sunset-rose drop-shadow-[0_0_30px_rgba(251,113,133,0.5)]" />
          </motion.div>
        </motion.div>

        <motion.p
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/50 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {daysTogether} dias de
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl font-black leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="block bg-gradient-to-r from-sunset-orange via-sunset-rose to-sunset-amber bg-clip-text text-transparent">
            Nós Dois
          </span>
        </motion.h1>

        {/* Formulário de Login */}
        <motion.form 
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-8 flex flex-col gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Lock className="w-4 h-4 text-white/40" />
            <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
              Acesso Privado
            </span>
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-sunset-rose/50 transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-sunset-rose/50 transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sunset-orange to-sunset-rose text-white font-semibold rounded-xl px-4 py-3 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
