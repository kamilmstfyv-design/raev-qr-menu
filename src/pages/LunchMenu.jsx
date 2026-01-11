import React from 'react'

function LunchMenu() {
  // Əgər öz şəkil linkin varsa bura yapışdır, yoxdursa aşağıdakı placeholder qalacaq
  const menuImage = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1000";

  return (
    // Ekranın ortasında daha yaxşı görünməsi üçün 'max-w' və 'mx-auto' əlavə etdim
    <div className="max-w-4xl mx-auto px-4 py-6 h-screen"> 
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Arxa fon şəkli */}
        <img 
          src={menuImage} 
          alt="Günün Menyusu"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Qaraltma (Overlay) */}
        <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300" />

        {/* Qiymət Etiketi */}
        <div className="absolute top-2 right-1 bg-orange-600 text-white px-3 py-2 rounded-full font-bold shadow-xl z-10 text-SM">
          6.00 AZN
        </div>

        {/* Menyudakı elementlərin siyahısı */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
          <h3 className="text-orange-400 font-black uppercase text-sm md:text-base mb-4 tracking-[0.2em] drop-shadow-md">
            Günün Menyusu
          </h3>
          
          <div className="space-y-2 md:space-y-4 w-full max-w-xs">
            <p className="text-xl md:text-2xl font-semibold border-b border-white/20 pb-1">Günün şorbası</p>
            <p className="text-xl md:text-2xl font-semibold border-b border-white/20 pb-1">Günün ana yeməyi</p>
            <p className="text-xl md:text-2xl font-semibold border-b border-white/20 pb-1">Günün salatı</p>
            <p className="text-xl md:text-2xl font-semibold pb-1">İçki</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LunchMenu