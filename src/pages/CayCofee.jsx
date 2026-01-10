import React from 'react'
import CategoryCard from '../components/CategoryCard'
import caycofeImg from "../assets/caycofe.png";

function CayCofee() {
  const BEVERAGE_SUBS = [
  { title: "Kofelər", path: "/cay-kofe/coffee",img: caycofeImg},
  { title: "Çaylar", path: "/cay-kofe/cay",img: caycofeImg},
  { title: "Kombo Menular", path: "/cay-kofe/kombo",img: caycofeImg }
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-2 pb-56'>
      {BEVERAGE_SUBS.map((category , index)=>(
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  )
}

export default CayCofee