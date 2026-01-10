import React from 'react'
import { menuData } from '../data/menuData' // Məlumat bazasını import edirik
import ProductCard from '../components/ProductCard'

function Coffee() {
  // 1. menuData içindən slug-ı "coffee" olan obyekti tapırıq
  const categoryData = menuData.find(item => item.slug === "coffee");

  // 2. Əgər data tapılsa, onun içindəki 'items' massivini götürürük
  const products = categoryData ? categoryData.items : [];

  return (
    <div className="p-4  mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest text-white">
        Kofelər
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              img={item.img} // Əgər şəklin yoxdursa ProductCard-da placeholder çıxacaq
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            Bu kateqoriyada hələ ki məhsul yoxdur.
          </div>
        )}
      </div>
    </div>
  )
}

export default Coffee;