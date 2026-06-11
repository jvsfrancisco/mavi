import React from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { RefreshCw, X } from 'lucide-react'

export default function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered')
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setNeedRefresh(false)
  }

  if (!needRefresh) return null

  return (
    <div className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[9999] bg-[#111116] border border-white/20 p-4 rounded-2xl shadow-[0_0_40px_rgba(255,77,109,0.3)] w-[90%] max-w-sm flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display font-bold text-white text-lg">Nova versão disponível!</h3>
          <p className="text-white/60 text-sm mt-1">Atualize para ver as novidades e melhorias.</p>
        </div>
        <button onClick={close} className="text-white/40 hover:text-white p-1">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <button 
        onClick={() => updateServiceWorker(true)}
        className="w-full bg-gradient-to-r from-sunset-orange to-sunset-rose text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <RefreshCw className="w-4 h-4" />
        Atualizar Agora
      </button>
    </div>
  )
}
