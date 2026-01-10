import React from 'react'

function ProductCard({ name, price, img }) {
  return (
    <div 
      className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02] my-1 "
    >
      {/* Məhsulun Arxa fon şəkli */}
      <img 
        src={img || 'https://placehold.co/600x400?text=Food'} 
        alt={name}
        style={{ objectPosition: '50% 90%' }}
        className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Qaraltma (Overlay) */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-300" />

      {/* Qiymət - Sağ yuxarı küncdə kiçik etiket */}
      <div className="absolute bottom-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full font-bold shadow-md z-10 text-sm">
        {price} AZN
      </div>

      {/* Məhsulun Adı - Mərkəzdə */}
      <div className="absolute inset-0 flex items-bottom justify-start p-4">
        <h2 className="text-white text-xl md:text-2xl font-bold text-center tracking-wide uppercase drop-shadow-lg">
          {name}
        </h2>
      </div>
    </div>
  )
}

export default ProductCard