import React from 'react'
import kruasanbg from "../assets/producimgs/kruasan.png";
import dondurmabg from "../assets/dondurmabg.png";
import desertbg from "../assets/desertbg.png";
import CategoryCard from '../components/CategoryCard';
function DesertDondurma() {
  const DESSERT_SUBS = [
  { 
    title: "Desertlər", 
    path: "/desert-dondurma/desert", 
    img: desertbg 
  },
  { 
    title: "Dondurmalar", 
    path: "/desert-dondurma/dondurma", 
    img: dondurmabg 
  },
  { 
    title: "Kruasanlar", 
    path: "/desert-dondurma/kruasan", 
    img: kruasanbg 
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