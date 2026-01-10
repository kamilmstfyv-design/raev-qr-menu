import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import CayCofee from './pages/CayCofee'
import SoyuqIckiler from './pages/SoyuqIckiler'
import DesertDondurma from './pages/DesertDondurma'
import SalatlarSorbalar from './pages/SalatlarSorbalar'
import MilliDadlar from './pages/MilliDadlar'
import LunchMenu from './pages/LunchMenu'
import Coffee from './pages/Coffee'
import Cay from './pages/Cay'
import Kombo from './pages/Kombo'
import Fresh from './pages/Fresh'
import Limonadlar from './pages/Limonadlar'
import Milkshakeler from './pages/Milkshakeler'
import Kruasan from './pages/Kruasan'
import Dondurma from './pages/Dondurma'
import Desert from './pages/Desert'
import Salatlar from './pages/Salatlar'
import Sorbalar from './pages/Sorbalar'
import Qutablar from './pages/Qutablar'
import Yemekleri from './pages/Yemekleri'
import WhyUs from './pages/WhyUs'
import Elaqe from './pages/Elaqe'

function App() {
  console.log('App component rendering');

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<PageNotFound />}/>

        {/* bura kateqoriyalara daxil olanda olan yapini qurmaq ucundur */}
        <Route path='/cay-kofe' element={<CayCofee />}/>
        <Route path='/soyuq-ickiler' element={<SoyuqIckiler />}/>
        <Route path='/desert-dondurma' element={<DesertDondurma />}/>
        <Route path='/salatlar-sorbalar' element={<SalatlarSorbalar />}/>
        <Route path='/milli-dadlar' element={<MilliDadlar />}/>
        <Route path='/lunch-menu' element={<LunchMenu />}/>

        {/*cay-kofe kateqoriyasinda olan urunler */}
        <Route path='/cay-kofe/coffee' element={<Coffee />}/>
        <Route path='/cay-kofe/cay' element={<Cay />}/>
        <Route path='/cay-kofe/kombo' element={<Kombo />}/>

        {/*soyuq-ickiler kateqoriyasinda olan urunler */}
        <Route path='/soyuq-ickiler/fresh' element={<Fresh />}/>
        <Route path='/soyuq-ickiler/limonadlar' element={<Limonadlar />}/>
        <Route path='/soyuq-ickiler/milkshakeler' element={<Milkshakeler />}/>

        {/*desert-dondurma kateqoriyasinda olan urunler */}
        <Route path='/desert-dondurma/desert' element={<Desert />}/>
        <Route path='/desert-dondurma/dondurma' element={<Dondurma />}/>
        <Route path='/desert-dondurma/kruasan' element={<Kruasan />}/>

        {/*desert-dondurma kateqoriyasinda olan urunler */}
        <Route path='/salatlar-sorbalar/salatlar' element={<Salatlar />}/>
        <Route path='/salatlar-sorbalar/sorbalar' element={<Sorbalar />}/>

        {/*desert-dondurma kateqoriyasinda olan urunler */}
        <Route path='/milli-dadlar/xemir-yemekleri' element={<Yemekleri />}/>
        <Route path='/milli-dadlar/qutablar' element={<Qutablar />}/>

        {/*niye biz */}
        <Route path='/ne-ucun-biz' element={<WhyUs />}/>
        <Route path='/elaqe' element={<Elaqe />}/>
      </Routes>
    </div>
  )
}

export default App
