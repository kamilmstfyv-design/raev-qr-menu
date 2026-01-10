import React from 'react'
import salatcorba from "../assets/salatcorba.png";
import CategoryCard from '../components/CategoryCard';

function SalatlarSorbalar() {
  const SOUP_SALAD_SUBS = [
  { 
    title: "Salatlar", 
    path: "/salatlar-sorbalar/salatlar", 
    img: salatcorba 
  },
  { 
    title: "Şorbalar", 
    path: "/salatlar-sorbalar/sorbalar", 
    img: salatcorba 
  }
];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 mt-2 pb-56'>
      {SOUP_SALAD_SUBS.map((category , index)=>(
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  )
}

export default SalatlarSorbalar