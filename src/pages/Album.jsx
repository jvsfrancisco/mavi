import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Check, Lock, ChevronLeft, ChevronRight, Image as ImageIcon, Calendar, FileText, StickyNote, X, Camera, User } from "lucide-react";
import { stickers } from "../data/stickers.jsx";
import { db } from "../lib/firebase";
import FloatingAlbumElements from "../components/FloatingAlbumElements.jsx";
import { doc, setDoc, onSnapshot, collection } from "firebase/firestore";

const STICKERS_PER_PAGE = 4;
const pagesData = [];
for (let i = 0; i < stickers.length; i += STICKERS_PER_PAGE) {
  pagesData.push(stickers.slice(i, i + STICKERS_PER_PAGE));
}

// Utilitário para comprimir a foto no próprio navegador (bypass do Firebase Storage)
const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 600;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        // Comprime para JPEG com 60% de qualidade (gera uma string base64 de ~30kb a 50kb)
        resolve(canvas.toDataURL("image/jpeg", 0.6));
      };
    };
  });
};

export default function Album() {
  const [unlockedStickers, setUnlockedStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [viewingMemory, setViewingMemory] = useState(null); // Para abrir o post-it
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const [memoryDate, setMemoryDate] = useState("");
  const [memoryNote, setMemoryNote] = useState("");
  const [memoryFile, setMemoryFile] = useState(null);
  const [memoryAuthor, setMemoryAuthor] = useState("both");
  const [isUploading, setIsUploading] = useState(false);

  // Agora usamos uma coleção no Firestore (cada figurinha = 1 documento) para evitar limite de 1MB
  useEffect(() => {
    const colRef = collection(db, "album_stickers");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const loadedStickers = snapshot.docs.map(doc => doc.data());
      setUnlockedStickers(loadedStickers);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handlePasteSticker = async (e) => {
    e.preventDefault();
    if (isUploading) return;
    setIsUploading(true);

    try {
      let photoUrl = null;
      if (memoryFile) {
        // Comprime a foto no próprio navegador e converte pra string base64!
        photoUrl = await compressImage(memoryFile);
      }

      // Format date for display
      let formattedDate = "";
      if (memoryDate) {
        const [year, month, day] = memoryDate.split("-");
        formattedDate = `${day}/${month}/${year}`;
      }

      const memoryObj = {
        id: selectedSticker.id,
        date: formattedDate,
        note: memoryNote,
        photoUrl: photoUrl,
        author: memoryAuthor
      };

      // Salva no Firestore como um documento individual
      await setDoc(doc(db, "album_stickers", selectedSticker.id), memoryObj);

      // Fechar modal e resetar form
      setSelectedSticker(null);
      setMemoryDate("");
      setMemoryNote("");
      setMemoryFile(null);
      setMemoryAuthor("both");
    } catch (error) {
      console.error("Erro ao salvar memória:", error);
      alert("Houve um erro ao colar a figurinha. Tente novamente.");
    } finally {
      setIsUploading(false);
    }
  };

  const nextButtonClick = () => bookRef.current?.pageFlip().flipNext();
  const prevButtonClick = () => bookRef.current?.pageFlip().flipPrev();

  // Helper para checar se a figurinha já foi adquirida
  const getMemoryForSticker = (id) => {
    return unlockedStickers.find(u => (typeof u === 'string' ? u : u.id) === id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0e] via-[#060608] to-[#120508] pb-32 pt-20 px-2 md:px-6 relative overflow-hidden flex flex-col items-center">
      <FloatingAlbumElements />

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <BookOpen className="w-8 h-8 text-sunset-rose" />
        </motion.div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">Nosso Álbum</h1>
        <p className="text-white/50">
          {loading ? "Carregando figurinhas..." : `${unlockedStickers.length} de ${stickers.length} figurinhas coladas`}
        </p>
      </div>

      {/* Container do Livro HTML5 */}
      <div className="relative w-full max-w-5xl mx-auto z-10 flex justify-center items-center">
        
        <button onClick={prevButtonClick} className="hidden md:flex absolute -left-16 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.3}
          showCover={false}
          mobileScrollSupport={true}
          className="shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          ref={bookRef}
        >
          {pagesData.map((pageStickers, pageIndex) => (
            <div key={`page-${pageIndex}`} className="page bg-[#111116] border border-white/5 overflow-hidden relative">
              
              {pageIndex % 2 === 0 ? (
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />
              ) : (
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
              )}

              <div className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs font-semibold">
                {pageIndex + 1}
              </div>

              {/* Grid Fixado 2x2 para cada página */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6 md:p-8 h-full pb-10">
                {pageStickers.map((sticker) => {
                  const memory = getMemoryForSticker(sticker.id);
                  const isUnlocked = !!memory;
                  const globalIndex = stickers.findIndex(s => s.id === sticker.id) + 1;
                  const Icon = sticker.icon;

                  // Extrai o valor numérico da rotação do Tailwind (ex: "-rotate-2" -> -2)
                  const isNegative = sticker.rotation.startsWith('-');
                  const rotNum = parseInt(sticker.rotation.replace(/[^\d]/g, '')) || 0;
                  const finalRotation = isNegative ? -rotNum : rotNum;

                  return (
                    <div key={sticker.id} className="relative w-full h-full flex items-center justify-center">
                      
                      {/* O Espaço Vazio */}
                      <div 
                        onClick={() => !isUnlocked && setSelectedSticker(sticker)}
                        className={`w-full h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center p-2 transition-colors
                          ${isUnlocked ? 'border-transparent' : 'border-white/10 hover:border-sunset-rose/40 hover:bg-white/5 cursor-pointer group'}`}
                      >
                        {!isUnlocked && (
                          <>
                            <span className="font-display text-2xl md:text-3xl font-bold text-white/10 mb-2">#{globalIndex.toString().padStart(2, '0')}</span>
                            <span className="text-[9px] md:text-[10px] font-semibold text-white/30 uppercase tracking-widest leading-snug group-hover:text-sunset-rose/50 transition-colors">
                              {sticker.title}
                            </span>
                            <span className="text-[7px] md:text-[8px] text-white/20 mt-1 line-clamp-2 px-1 text-center font-medium">
                              {sticker.description}
                            </span>
                            <Lock className="w-3 h-3 text-white/10 absolute bottom-3 right-3" />
                          </>
                        )}
                      </div>

                      {/* Figurinha Colada */}
                      <AnimatePresence>
                        {isUnlocked && (
                          <motion.div
                            initial={{ scale: 1.5, opacity: 0, rotate: finalRotation }}
                            animate={{ scale: 1, opacity: 1, rotate: finalRotation }}
                            className={`absolute inset-0 bg-white rounded-[4px] p-1 shadow-[0_5px_15px_rgba(0,0,0,0.4)] flex flex-col z-20 group`}
                          >
                            {/* Arte Frontal */}
                            <div className={`flex-1 rounded-sm flex items-center justify-center bg-gradient-to-br ${sticker.color} relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -rotate-45 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
                              <Icon className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-md" />
                            </div>
                            
                            {/* Titulo na parte branca */}
                            <div className="pt-1 pb-0.5 text-center px-0.5 flex flex-col items-center justify-center min-h-[32px] md:min-h-[40px] shrink-0">
                              <h3 className="font-sans text-[7px] md:text-[9px] font-extrabold text-neutral-800 uppercase tracking-tight leading-tight line-clamp-1">
                                {sticker.title}
                              </h3>
                              <span className="font-sans text-[5px] md:text-[6.5px] text-neutral-600 leading-tight line-clamp-1 block mb-[1px]">
                                {sticker.description}
                              </span>
                              {typeof memory === 'object' && memory.date && (
                                <span className="font-sans text-[4.5px] md:text-[5.5px] text-neutral-400 font-bold block">
                                  {memory.date}
                                </span>
                              )}
                            </div>

                            {/* O Autor (Quem colou) - Estilo Polaroid */}
                            {typeof memory === 'object' && memory.author && (
                              <div className="absolute -top-2 -left-2 rotate-[-8deg] z-30 shadow-md bg-white p-[2px] rounded-sm pointer-events-none" style={{ boxShadow: "1px 2px 5px rgba(0,0,0,0.4)" }}>
                                {memory.author === 'both' ? (
                                  <div className="flex -space-x-1">
                                    <img src="/photos/joao.png" className="w-5 h-5 object-cover rounded-[1px] border border-white" alt="João" />
                                    <img src="/photos/maria.png" className="w-5 h-5 object-cover rounded-[1px] border border-white" alt="Maria" />
                                  </div>
                                ) : (
                                  <img src={`/photos/${memory.author}.png`} className="w-6 h-6 object-cover rounded-[1px]" alt={memory.author} />
                                )}
                              </div>
                            )}

                            {/* O Post-it / Polaroid Thumbnail */}
                            {typeof memory === 'object' && (memory.note || memory.photoUrl) && (
                              <button 
                                onPointerDownCapture={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
                                onMouseDownCapture={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
                                onTouchStartCapture={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}
                                onClickCapture={(e) => { 
                                  e.preventDefault(); 
                                  e.stopPropagation(); 
                                  e.nativeEvent.stopImmediatePropagation();
                                  setViewingMemory({ sticker, memory }); 
                                }}
                                className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rotate-12 shadow-md flex items-center justify-center hover:scale-110 transition-transform z-30 cursor-pointer overflow-hidden bg-white p-1 rounded-sm"
                                style={{ boxShadow: "2px 4px 8px rgba(0,0,0,0.4)" }}
                                title="Abrir recordação"
                              >
                                {memory.photoUrl ? (
                                  <img src={memory.photoUrl} alt="Recordação" className="w-full h-full object-cover rounded-sm" />
                                ) : (
                                  <div className="w-full h-full bg-yellow-200 p-0.5 flex items-center justify-center overflow-hidden">
                                    <p className="font-handwriting text-[5px] leading-[1.2] text-neutral-800 break-words text-center w-full">
                                      {memory.note}
                                    </p>
                                  </div>
                                )}
                              </button>
                            )}

                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </HTMLFlipBook>

        <button onClick={nextButtonClick} className="hidden md:flex absolute -right-16 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-sunset-rose/20">
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* Controles Mobile */}
      <div className="flex md:hidden items-center justify-center gap-6 mt-10 relative z-20 w-full max-w-[250px]">
        <button onClick={prevButtonClick} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Navegar</span>
        <button onClick={nextButtonClick} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mt-6 text-white/40 text-sm hidden md:block">
        Arraste a página pelo canto para virar ou clique nas setas.
      </div>

      {/* Modal de Colagem com Memórias */}
      <AnimatePresence>
        {selectedSticker && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.form 
              onSubmit={handlePasteSticker}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111116] border border-white/10 rounded-3xl p-6 max-w-md w-full shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedSticker.color}`} />

              <button type="button" onClick={() => setSelectedSticker(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-xl shrink-0">
                  <selectedSticker.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white leading-tight">
                    {selectedSticker.title}
                  </h2>
                  <p className="text-white/40 text-xs">
                    {selectedSticker.description}
                  </p>
                </div>
              </div>

              <div className="overflow-y-auto flex-1 pr-2 space-y-4 mb-6 custom-scrollbar">
                
                {/* Quem Completou */}
                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> Quem marcou essa figurinha?
                  </label>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setMemoryAuthor('joao')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'joao' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <img src="/photos/joao.png" className="w-8 h-8 rounded-full object-cover border border-white/10" /> 
                       <span className="text-xs font-bold">João</span>
                    </button>
                    <button type="button" onClick={() => setMemoryAuthor('maria')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'maria' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <img src="/photos/maria.png" className="w-8 h-8 rounded-full object-cover border border-white/10" /> 
                       <span className="text-xs font-bold">Maria</span>
                    </button>
                    <button type="button" onClick={() => setMemoryAuthor('both')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'both' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <div className="flex -space-x-3">
                         <img src="/photos/joao.png" className="w-8 h-8 rounded-full object-cover border-2 border-[#111116]" />
                         <img src="/photos/maria.png" className="w-8 h-8 rounded-full object-cover border-2 border-[#111116]" />
                       </div> 
                       <span className="text-xs font-bold">Nós!</span>
                    </button>
                  </div>
                </div>

                {/* Data */}
                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Quando aconteceu?
                  </label>
                  <input 
                    type="date" 
                    value={memoryDate}
                    onChange={e => setMemoryDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sunset-rose transition-colors"
                  />
                </div>

                {/* Nota */}
                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Escreva algo (Post-it)
                  </label>
                  <textarea 
                    value={memoryNote}
                    onChange={e => setMemoryNote(e.target.value)}
                    placeholder="Foi incrível porque..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sunset-rose transition-colors min-h-[100px] resize-none"
                  />
                </div>

                {/* Foto */}
                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Foto de recordação
                  </label>
                  
                  <div className="flex gap-2 mb-2">
                    <div className="relative flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                      <Camera className="w-4 h-4 mr-2 text-sunset-orange" />
                      <span className="text-xs md:text-sm font-bold">Tirar Foto</span>
                      <input 
                        type="file" 
                        accept="image/*"
                        capture="environment"
                        onChange={e => setMemoryFile(e.target.files[0])}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="relative flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                      <ImageIcon className="w-4 h-4 mr-2 text-sunset-rose" />
                      <span className="text-xs md:text-sm font-bold">Galeria</span>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={e => setMemoryFile(e.target.files[0])}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  {memoryFile && (
                    <div className="text-xs text-white/50 text-center bg-white/5 rounded-lg py-1 px-2 border border-white/5 truncate">
                      Selecionado: {memoryFile.name}
                    </div>
                  )}
                </div>

              </div>

              <button 
                type="submit"
                disabled={isUploading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sunset-orange to-sunset-rose text-white font-bold transition-opacity hover:opacity-90 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isUploading ? "Colando..." : <><Check className="w-5 h-5" /> Colar Figurinha no Álbum!</>}
              </button>

            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de LER o Post-it Expandido (Padrão Mavi) */}
      <AnimatePresence>
        {viewingMemory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setViewingMemory(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#111116]/95 border border-white/10 rounded-3xl p-6 md:p-10 max-w-sm w-full flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Fechar */}
              <button onClick={() => setViewingMemory(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20">
                <X className="w-6 h-6" />
              </button>

              {/* Título da Memória */}
              <h2 className="font-display text-2xl font-bold text-white mb-1 text-center">
                {viewingMemory.sticker.title}
              </h2>
              
              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="text-xs font-semibold tracking-widest text-sunset-rose uppercase text-center">
                  {viewingMemory.memory.date || "Data não registrada"}
                </span>
                
                {/* Quem Completou no Modal */}
                {viewingMemory.memory.author && (
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/40 text-[9px] uppercase tracking-wider font-bold">Por:</span>
                    {viewingMemory.memory.author === 'both' ? (
                      <div className="flex -space-x-1.5">
                        <img src="/photos/joao.png" className="w-4 h-4 object-cover rounded-full border border-white/20" alt="João" />
                        <img src="/photos/maria.png" className="w-4 h-4 object-cover rounded-full border border-white/20" alt="Maria" />
                      </div>
                    ) : (
                      <img src={`/photos/${viewingMemory.memory.author}.png`} className="w-4 h-4 object-cover rounded-full border border-white/20" alt={viewingMemory.memory.author} />
                    )}
                  </div>
                )}
              </div>

              {/* A Polaroid Fotográfica */}
              <div className="bg-white p-3 md:p-4 rounded-sm shadow-2xl rotate-2 w-full max-w-[260px] mx-auto z-10 flex flex-col">
                {viewingMemory.memory.photoUrl ? (
                  <div className="w-full aspect-square bg-neutral-200 overflow-hidden mb-3 rounded-sm border border-neutral-200 shrink-0">
                    <img src={viewingMemory.memory.photoUrl} alt="Recordação" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-yellow-100 flex items-center justify-center mb-3 border border-yellow-200 shrink-0">
                    <StickyNote className="w-12 h-12 text-yellow-300 opacity-50" />
                  </div>
                )}

                {/* Texto da Polaroid */}
                <div className="px-2 text-center pb-2">
                  <p className="font-handwriting text-lg md:text-xl text-neutral-800 leading-snug">
                    {viewingMemory.memory.note || "Nenhuma anotação registrada..."}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
