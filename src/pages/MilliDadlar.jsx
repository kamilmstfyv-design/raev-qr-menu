import React from 'react'
import milliyemekler from "../assets/milliyemekler.png";
import CategoryCard from '../components/CategoryCard';

function MilliDadlar() {
  const NATIONAL_SUBS = [
  { 
    title: "Xəmir Yeməkləri", 
    path: "/milli-dadlar/xemir-yemekleri", 
    img: milliyemekler 
  },
  { 
    title: "Qutablar", 
    path: "/milli-dadlar/qutablar", 
    img: milliyemekler 
  }
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-2 pb-56'>
      {NATIONAL_SUBS.map((category , index)=>(
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  )
}

export default MilliDadlar