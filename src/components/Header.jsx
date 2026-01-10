import React from 'react'
import logo from '../assets/logo.JPG'
import { Link } from 'react-router-dom' // Import etməyi unutma!

function Header() {
  return (
    <header className='flex justify-between items-center py-4 border-b-2 border-emerald-500/50 bg-[#0B1720]'>
      <div className='ml-5 mt-2'>
        <Link to="/">
          <img src={logo} alt="Logo" className='logo-style rounded-full w-12 h-12 object-cover' />
        </Link>
      </div>

      <nav>
        <ul className='flex gap-6 mr-5'>
          <li>
            <Link to="/" className='text-white font-bold hover:text-emerald-400 transition-colors'>
              Ana Səhifə
            </Link>
          </li>
          <li>
            <Link to="/ne-ucun-biz" className='text-white font-bold hover:text-emerald-400 transition-colors'>
              Nə üçün biz?
            </Link>
          </li>
          <li>
            <Link to="/elaqe" className='text-white font-bold hover:text-emerald-400 transition-colors'>
              Əlaqə
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header