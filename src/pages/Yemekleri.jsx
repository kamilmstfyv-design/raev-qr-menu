import React from 'react';
import { menuData } from '../data/menuData'; 
import ProductCard from '../components/ProductCard';

function Desert() {
  // menuData içindən slug-ı "desert" olanı tapırıq
  const xemirCategory = menuData.find(item => item.slug === "xemir-yemekleri");

  return (
    // max-w-[1400px]-ə əlavə edirik
    <div className="p-4  mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-white">
        Xəmir Yeməkləri
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {xemirCategory?.items && xemirCategory.items.length > 0 ? (
          xemirCategory.items.map((item) => (
            <ProductCard 
              key={item.id} 
              name={item.name} 
              price={item.price} 
               img={item.img} 
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 italic">
            Bu bölmədə hələ ki məhsul yoxdur.
          </div>
        )}
      </div>
    </div>
  );
}

export default Desert;