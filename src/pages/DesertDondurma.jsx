import React from 'react'
import desertdondurma from "../assets/desertdondurma.png";
import CategoryCard from '../components/CategoryCard';
function DesertDondurma() {
  const DESSERT_SUBS = [
  { 
    title: "Desertlər", 
    path: "/desert-dondurma/desert", 
    img: desertdondurma 
  },
  { 
    title: "Dondurmalar", 
    path: "/desert-dondurma/dondurma", 
    img: desertdondurma 
  },
  { 
    title: "Kruasanlar", 
    path: "/desert-dondurma/kruasan", 
    img: desertdondurma 
  }
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-2 pb-56'>
      {DESSERT_SUBS.map((category , index)=>(
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  )
}

export default DesertDondurma