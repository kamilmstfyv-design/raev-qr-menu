import React from 'react';
import { menuData } from '../data/menuData'; // Siyahını bütöv gətiririk
import ProductCard from '../components/ProductCard';

function Cay() {
  // menuData içindən "cay" slug-ı olan obyekti tapırıq
  const cayCategory = menuData.find(item => item.slug === "cay");

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-6 text-center uppercase text-white">Çaylar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {cayCategory?.items.map((item) => (
          <ProductCard 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            img={item.img} 
          />
        ))}
      </div>
    </div>
  );
}

export default Cay;