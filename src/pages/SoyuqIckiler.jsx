import React from 'react'
import soyuqicki from "../assets/soyuqicki.png";
import freshickilerbg from "../assets/freshlerbg.png";
import milkshakebg from "../assets/milkshakebg.png";
import CategoryCard from '../components/CategoryCard';

function SoyuqIckiler() {
  const COLD_DRINK_SUBS = [
  { 
    title: "Fresh İçkilər", 
    path: "/soyuq-ickiler/fresh", 
    img: freshickilerbg // Bu şəkli yuxarıda import etməyi unutma
  },
  { 
    title: "Limonadlar", 
    path: "/soyuq-ickiler/limonadlar", 
    img: soyuqicki 
  },
  { 
    title: "Milkshakelər", 
    path: "/soyuq-ickiler/milkshakeler", 
    img: milkshakebg 
  }
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-2 pb-56'>
      {COLD_DRINK_SUBS.map((category , index)=>(
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  )
}

export default SoyuqIckiler