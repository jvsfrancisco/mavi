import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion, AnimatePresence } from "framer-motion";
import { Map as MapIcon, X, MapPin, Calendar, FileText, Image as ImageIcon, Check, Camera, Navigation, User } from "lucide-react";
import { db } from "../lib/firebase";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { roadmapLocations } from "../data/roadmapLocations";

const createPhotoIcon = (photoUrl, count = 1) => L.divIcon({
  className: "custom-photo-icon",
  html: `<div style="
    width: 48px; 
    height: 48px; 
    border-radius: 8px; 
    border: 3px solid #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    background-image: url('${photoUrl}');
    background-size: cover;
    background-position: center;
    transform: rotate(${-5 + Math.random() * 10}deg);
    position: relative;
  ">
    ${count > 1 ? `<div style="
      position: absolute;
      top: -10px;
      right: -10px;
      background: #FF4D6D;
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      border: 2px solid #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      font-family: sans-serif;
    ">${count}</div>` : ''}
  </div>`,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});

// Compressão de foto para não estourar o limite do Firestore
const compressImage = (file) => {
  return new Promise((resolve, reject) => {
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
          if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
        } else {
          if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.6));
      };
      img.onerror = () => {
        reject(new Error("Formato de imagem não suportado pelo navegador. Tente outra foto."));
      };
    };
    reader.onerror = () => reject(new Error("Erro ao ler o arquivo."));
  });
};

function MapEvents({ onZoomChange }) {
  const map = useMapEvents({
    zoomend: () => {
      onZoomChange(map.getZoom());
    }
  });
  return null;
}

export default function MapPage() {
  const [pins, setPins] = useState([]); // Agora é um Array
  const [loading, setLoading] = useState(true);
  const [geoData, setGeoData] = useState(null);
  const [viewingMemory, setViewingMemory] = useState(null);
  const [viewingGroup, setViewingGroup] = useState(null);
  const [currentZoom, setCurrentZoom] = useState(5);
  const [isLocating, setIsLocating] = useState(false);

  // Modal de Criação
  const [selectedState, setSelectedState] = useState(null);
  const [memoryDate, setMemoryDate] = useState("");
  const [memoryNote, setMemoryNote] = useState("");
  const [memoryFile, setMemoryFile] = useState(null);
  const [memoryAuthor, setMemoryAuthor] = useState("both");
  const [isUploading, setIsUploading] = useState(false);

  const statesWithEvents = new Set(roadmapLocations.map(loc => loc.state));

  useEffect(() => {
    const colRef = collection(db, "map_pins");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const loadedPins = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPins(loadedPins);
      setLoading(false);
    });

    fetch("/brazil-states.json")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Erro ao carregar GeoJSON:", err));

    return () => unsubscribe();
  }, []);

  const styleGeoJSON = (feature) => {
    const sigla = feature.properties.sigla;
    const hasManualPin = pins.some(p => p.sigla === sigla);
    const isVisited = statesWithEvents.has(sigla) || hasManualPin;

    return {
      fillColor: isVisited ? "#FF4D6D" : "transparent",
      weight: isVisited ? 2 : 0, 
      opacity: isVisited ? 0.8 : 0,
      color: isVisited ? "#FF4D6D" : "transparent",
      fillOpacity: isVisited ? 0.15 : 0,
      className: "transition-all duration-500 hover:fill-opacity-30 cursor-pointer"
    };
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        // Preenche o formulário com a localização exata do clique e o nome do estado
        setSelectedState({
          sigla: feature.properties.sigla,
          name: feature.properties.name,
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      }
    });
  };

  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await res.json();
            
            let stateName = "Localização Desconhecida";
            let sigla = "BR"; 

            if (data && data.address) {
              stateName = data.address.state || data.address.city || data.address.town || "Localização Atual";
              
              if (geoData) {
                const foundState = geoData.features.find(f => 
                  f.properties.name.toLowerCase() === stateName.toLowerCase() ||
                  stateName.toLowerCase().includes(f.properties.name.toLowerCase())
                );
                if (foundState) {
                  sigla = foundState.properties.sigla;
                  stateName = foundState.properties.name;
                }
              }
            }

            setSelectedState({
              sigla: sigla,
              name: stateName,
              lat: latitude,
              lng: longitude
            });
          } catch (err) {
            console.error("Erro no Nominatim:", err);
            setSelectedState({
              sigla: "BR",
              name: "Localização pelo GPS",
              lat: latitude,
              lng: longitude
            });
          } finally {
            setIsLocating(false);
          }
        },
        (error) => {
          setIsLocating(false);
          alert("Não foi possível obter a localização. Verifique as permissões de GPS.");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert("Geolocalização não é suportada neste navegador.");
    }
  };

  const handleSavePin = async (e) => {
    e.preventDefault();
    if (isUploading || !selectedState) return;
    setIsUploading(true);

    try {
      let photoUrl = null;
      if (memoryFile) {
        photoUrl = await compressImage(memoryFile);
      }

      let formattedDate = "";
      if (memoryDate) {
        const [year, month, day] = memoryDate.split("-");
        formattedDate = `${day}/${month}/${year}`;
      }

      const memoryObj = {
        stateName: selectedState.name,
        sigla: selectedState.sigla,
        lat: selectedState.lat,
        lng: selectedState.lng,
        date: formattedDate,
        note: memoryNote,
        photoUrl: photoUrl,
        author: memoryAuthor,
        createdAt: new Date()
      };

      await addDoc(collection(db, "map_pins"), memoryObj);

      setSelectedState(null);
      setMemoryDate("");
      setMemoryNote("");
      setMemoryFile(null);
      setMemoryAuthor("both");
    } catch (error) {
      console.error("Erro ao salvar pin:", error);
      alert("Erro ao fixar no mapa: " + (error.message || "Desconhecido"));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060608] relative overflow-hidden flex flex-col">
      
      <style>{`
        .leaflet-container {
          background: #060608 !important;
        }
        .custom-photo-icon:hover div {
          transform: scale(1.1) rotate(0deg) !important;
          transition: transform 0.2s ease-out;
          z-index: 1000;
        }
        .leaflet-bar { border: none !important; box-shadow: 0 4px 15px rgba(0,0,0,0.5) !important; }
        .leaflet-control-zoom-in, .leaflet-control-zoom-out {
          background-color: #111116 !important;
          color: white !important;
          border-color: rgba(255,255,255,0.1) !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
      `}</style>

      {/* Header Info */}
      <div className="absolute top-16 left-0 right-0 z-[100] pointer-events-none flex flex-col items-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl"
        >
          <MapIcon className="w-5 h-5 text-sunset-orange" />
          <h1 className="font-display text-xl font-bold text-white tracking-widest uppercase">
            Nosso Mapa
          </h1>
        </motion.div>
        <p className="text-white/60 text-xs mt-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
          {currentZoom < 8 ? "Dê zoom para ver as lembranças ou CLIQUE EM QUALQUER ESTADO para adicionar uma nova!" : "Clique nas fotos para relembrar!"}
        </p>

        {/* Barra de Estatísticas */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 md:gap-4 mt-4 pointer-events-auto"
        >
          <div className="bg-[#111116]/80 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md flex flex-col items-center shadow-lg">
            <span className="text-sunset-orange font-bold text-xl md:text-2xl leading-none">
              {new Set([...roadmapLocations.map(l => l.state), ...pins.map(p => p.sigla)]).size}
            </span>
            <span className="text-white/40 text-[9px] uppercase tracking-widest mt-1">Estados</span>
          </div>
          <div className="bg-[#111116]/80 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md flex flex-col items-center shadow-lg">
            <span className="text-sunset-rose font-bold text-xl md:text-2xl leading-none">1</span>
            <span className="text-white/40 text-[9px] uppercase tracking-widest mt-1">País</span>
          </div>
          <div className="bg-[#111116]/80 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md flex flex-col items-center shadow-lg">
            <span className="text-pink-500 font-bold text-xl md:text-2xl leading-none">
              {roadmapLocations.length + pins.length}
            </span>
            <span className="text-white/40 text-[9px] uppercase tracking-widest mt-1">Lembranças</span>
          </div>
        </motion.div>
      </div>

      {/* MAPA FULL SCREEN */}
      <div className="absolute inset-0 z-0">
        <MapContainer 
          center={[-15, -54]} 
          zoom={5} 
          scrollWheelZoom={true} 
          zoomControl={true}
          className="w-full h-full"
        >
          <MapEvents onZoomChange={setCurrentZoom} />

          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {geoData && (
            <GeoJSON 
              data={geoData} 
              style={styleGeoJSON}
              onEachFeature={onEachFeature}
            />
          )}

          {/* Marcadores Agrupados */}
          {(() => {
            if (currentZoom < 8) return null;
            const allMemories = [];
            roadmapLocations.forEach(loc => {
              if (!loc.photoUrl) return;
              allMemories.push({
                id: loc.id,
                lat: loc.coordinates[1],
                lng: loc.coordinates[0],
                photoUrl: loc.photoUrl,
                date: loc.date,
                note: loc.note || "",
                author: loc.author,
                stateName: loc.locationName || loc.title,
                sigla: loc.state
              });
            });
            pins.forEach(pin => {
              if (!pin.photoUrl) return;
              allMemories.push({
                id: pin.id,
                lat: pin.lat,
                lng: pin.lng,
                photoUrl: pin.photoUrl,
                date: pin.date,
                note: pin.note,
                author: pin.author,
                stateName: pin.stateName,
                sigla: pin.sigla
              });
            });

            const groupedMemories = {};
            allMemories.forEach(mem => {
              const key = `${mem.lat.toFixed(4)},${mem.lng.toFixed(4)}`;
              if (!groupedMemories[key]) groupedMemories[key] = [];
              groupedMemories[key].push(mem);
            });

            return Object.values(groupedMemories).map((group, idx) => {
              const firstMem = group[0];
              return (
                <Marker 
                  key={`group-${idx}`} 
                  position={[firstMem.lat, firstMem.lng]} 
                  icon={createPhotoIcon(firstMem.photoUrl, group.length)}
                  eventHandlers={{
                    click: () => {
                      if (group.length === 1) {
                        setViewingMemory({ 
                          geo: { properties: { name: firstMem.stateName } }, 
                          memory: firstMem 
                        });
                      } else {
                        setViewingGroup(group);
                      }
                    }
                  }}
                />
              );
            });
          })()}

        </MapContainer>
      </div>

      {/* Botão de Localização GPS */}
      <div className="absolute bottom-28 md:bottom-8 right-4 md:right-8 z-[1000]">
        <button 
          onClick={handleGetCurrentLocation}
          disabled={isLocating}
          className="bg-gradient-to-r from-sunset-orange to-sunset-rose text-white px-4 md:px-6 py-3 rounded-full shadow-[0_0_20px_rgba(255,107,107,0.4)] flex items-center justify-center gap-2 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 border border-white/20"
        >
          {isLocating ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Navigation className="w-5 h-5" />
          )}
          <span className="font-bold text-sm">
            {isLocating ? "Buscando..." : "Usar GPS"}
          </span>
        </button>
      </div>

      {/* MODAL DE ADICIONAR NOVA LEMBRANÇA */}
      <AnimatePresence>
        {selectedState && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.form 
              onSubmit={handleSavePin}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111116] border border-white/10 rounded-3xl p-6 max-w-md w-full shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sunset-orange to-sunset-rose" />

              <button type="button" onClick={() => setSelectedState(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-sunset-rose/30 flex items-center justify-center shadow-xl shrink-0">
                  <MapPin className="w-6 h-6 text-sunset-rose" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white leading-tight">
                    {selectedState.name}
                  </h2>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    Adicionar ao Mapa
                  </p>
                </div>
              </div>

              <div className="overflow-y-auto flex-1 pr-2 space-y-4 mb-6 custom-scrollbar">
                
                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> Quem viajou pra cá?
                  </label>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setMemoryAuthor('joao')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'joao' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <img src="/photos/joao.png" className="w-8 h-8 rounded-full object-cover border border-white/10" alt="João" /> 
                       <span className="text-xs font-bold">João</span>
                    </button>
                    <button type="button" onClick={() => setMemoryAuthor('maria')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'maria' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <img src="/photos/maria.png" className="w-8 h-8 rounded-full object-cover border border-white/10" alt="Maria" /> 
                       <span className="text-xs font-bold">Maria</span>
                    </button>
                    <button type="button" onClick={() => setMemoryAuthor('both')} className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${memoryAuthor === 'both' ? 'border-sunset-rose bg-sunset-rose/20 text-white' : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'}`}>
                       <div className="flex -space-x-3">
                         <img src="/photos/joao.png" className="w-8 h-8 rounded-full object-cover border-2 border-[#111116]" alt="João" />
                         <img src="/photos/maria.png" className="w-8 h-8 rounded-full object-cover border-2 border-[#111116]" alt="Maria" />
                       </div> 
                       <span className="text-xs font-bold">Nós!</span>
                    </button>
                  </div>
                </div>

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

                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Título ou Frase
                  </label>
                  <textarea 
                    value={memoryNote}
                    onChange={e => setMemoryNote(e.target.value)}
                    placeholder="Essa viagem foi inesquecível porque..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sunset-rose transition-colors min-h-[80px] resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Foto (Aparecerá no Mapa)
                  </label>
                  
                  <div className="flex gap-2 mb-2">
                    <div className="relative flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                      <Camera className="w-4 h-4 mr-2 text-sunset-orange" />
                      <span className="text-xs md:text-sm font-bold">Tirar Foto</span>
                      <input 
                        type="file" 
                        accept="image/jpeg, image/png, image/webp"
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
                        accept="image/jpeg, image/png, image/webp"
                        onChange={e => setMemoryFile(e.target.files[0])}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {memoryFile && (
                    <div className="mt-2 w-full max-h-[200px] flex justify-center bg-black/20 border border-white/10 rounded-xl overflow-hidden relative">
                      <img src={URL.createObjectURL(memoryFile)} className="h-full max-h-[200px] object-contain" alt="Preview" />
                      <button type="button" onClick={() => setMemoryFile(null)} className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white hover:text-sunset-rose">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

              </div>

              <button 
                type="submit"
                disabled={isUploading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sunset-orange to-sunset-rose text-white font-bold transition-opacity hover:opacity-90 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isUploading ? "Gravando no Mapa..." : <><Check className="w-5 h-5" /> Adicionar ao Mapa!</>}
              </button>

            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal da Polaroid (Visualização) */}
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
              <button onClick={() => setViewingMemory(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20">
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 mb-2 mt-4">
                <MapPin className="w-5 h-5 text-sunset-orange" />
                <h2 className="font-display text-2xl font-bold text-white text-center">
                  {viewingMemory.geo.properties.name}
                </h2>
              </div>
              
              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="text-xs font-semibold tracking-widest text-sunset-rose uppercase text-center">
                  {viewingMemory.memory.date}
                </span>
                
                {viewingMemory.memory.author && (
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/40 text-[9px] uppercase tracking-wider font-bold">Viajantes:</span>
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

              <div className="bg-white p-3 md:p-4 rounded-sm shadow-2xl rotate-2 w-full max-w-[260px] mx-auto z-10 flex flex-col">
                <div className="w-full aspect-square bg-neutral-200 overflow-hidden mb-3 rounded-sm border border-neutral-200 shrink-0">
                  <img src={viewingMemory.memory.photoUrl} alt="Recordação do Mapa" className="w-full h-full object-cover" />
                </div>
                <div className="px-2 text-center pb-2">
                  <p className="font-handwriting text-lg md:text-xl text-neutral-800 leading-snug">
                    {viewingMemory.memory.note}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Seleção de Grupo */}
      <AnimatePresence>
        {viewingGroup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setViewingGroup(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#111116]/95 border border-white/10 rounded-3xl p-6 w-full max-w-sm flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative max-h-[80vh]"
            >
              <button onClick={() => setViewingGroup(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20">
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 mb-6 mt-2 pr-8">
                <MapPin className="w-5 h-5 text-sunset-orange shrink-0" />
                <h2 className="font-display text-xl font-bold text-white">
                  {viewingGroup.length} Memórias em {viewingGroup[0].stateName}
                </h2>
              </div>

              <div className="overflow-y-auto custom-scrollbar flex-1 grid grid-cols-2 gap-3 pb-2">
                {viewingGroup.map((mem, i) => (
                  <div 
                    key={i} 
                    className="cursor-pointer group relative rounded-xl overflow-hidden aspect-square border border-white/10"
                    onClick={() => {
                      setViewingGroup(null);
                      setTimeout(() => {
                        setViewingMemory({ 
                          geo: { properties: { name: mem.stateName } }, 
                          memory: mem 
                        });
                      }, 200);
                    }}
                  >
                    <img src={mem.photoUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Recordação" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-[10px] font-bold">{mem.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
