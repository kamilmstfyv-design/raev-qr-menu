import React from 'react'
import { MAIN_CATEGORIES } from '../data/constants'
import CategoryCard from '../components/CategoryCard'

function Home() {
  console.log('Home component rendering', MAIN_CATEGORIES);
  
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 mt-2 pb-56 bg-[#0F1E29] min-h-screen'>
      {MAIN_CATEGORIES && MAIN_CATEGORIES.length > 0 ? (
        MAIN_CATEGORIES.map((category , index)=>(
          <CategoryCard key={index} {...category} />
        ))
      ) : (
        <div className="col-span-full text-center text-white text-2xl p-10">
          Kateqoriyalar yüklənir...
        </div>
      )}
    </main>
  )
}

export default Home