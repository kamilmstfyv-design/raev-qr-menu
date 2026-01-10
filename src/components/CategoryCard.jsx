import React from 'react'
import { useNavigate } from 'react-router-dom';

function CategoryCard({ title, path, img }) {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(path)}
      className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-lg transition-transform duration-300 hover:scale-[1.02] my-1"
    >
      {/* Arxa fon şəkli */}
      <img 
        src={img || 'https://via.placeholder.com/400x300?text=Menu'} 
        alt={title}
        style={{ objectPosition: '50% 80%' }}
        className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Qaraltma (Overlay) - Yazının oxunması üçün */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Kateqoriya Adı */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold text-center tracking-wide uppercase drop-shadow-lg">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default CategoryCard