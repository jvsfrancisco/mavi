import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginScreen from "./components/LoginScreen";
import Roadmap from "./pages/Roadmap";
import Album from "./pages/Album";
import Map from "./pages/Map";
import FloatingNavBar from "./components/FloatingNavBar";

// Componente para proteger rotas
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen bg-[#060608] flex items-center justify-center text-white">Carregando...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// O componente Main define o que aparece na raiz ("/")
function Main() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading && user) {
      navigate('/roadmap', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) return <div className="min-h-screen bg-[#060608]" />;

  // Se não estiver logado, mostra a tela de Login
  if (!user) {
    return <LoginScreen />;
  }

  // Tela preta enquanto o useEffect dispara o redirect
  return <div className="min-h-screen bg-[#060608]" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#060608] min-h-screen">
          <Routes>
            <Route path="/" element={<Main />} />
            
            <Route 
              path="/roadmap" 
              element={
                <ProtectedRoute>
                  <Roadmap />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/album" 
              element={
                <ProtectedRoute>
                  <Album />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/map" 
              element={
                <ProtectedRoute>
                  <Map />
                </ProtectedRoute>
              } 
            />
          </Routes>
          
          <FloatingNavBar />
        </div>
      </Router>
    </AuthProvider>
  );
}
