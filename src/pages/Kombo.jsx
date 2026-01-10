import React from 'react';
import { menuData } from '../data/menuData'; // Bütün menu datasını gətiririk
import ProductCard from '../components/ProductCard';

function Kombo() {
  // menuData içindən slug-ı "kombo" olanı tapırıq
  const komboCategory = menuData.find(item => item.slug === "kombo");

  return (
    // max-w-[1400px]-ə əlavə edirik
    <div className="p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-white">
        Kombo Menular
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {komboCategory?.items && komboCategory.items.length > 0 ? (
          komboCategory.items.map((item) => (
            <ProductCard 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              // img={item.img} // Şəkil varsa bura əlavə olunacaq
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 italic">
            Bu bölmədə hələ ki kombo təklifi yoxdur.
          </div>
        )}
      </div>
    </div>
  );
}

export default Kombo;