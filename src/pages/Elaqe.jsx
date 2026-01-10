import React from 'react';

const Elaqe = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+994775208490';
  };

  return (
    <div className="min-h-screen bg-[#0B1720] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bizimlə <span className="text-emerald-500 border-b-2 border-emerald-500">Əlaqə</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlayın. Bizi sosial media hesablarımızdan izləyin!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Telefon */}
          <div className="bg-[#13232e] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 shadow-xl transition-all duration-300 cursor-pointer group" onClick={handlePhoneClick}>
            <div className="bg-[#0B1720] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Telefon</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-semibold hover:text-emerald-400 transition-colors">
              +994 77 5208490
            </p>
            <p className="text-gray-500 text-sm mt-2">Zəng etmək üçün klikləyin</p>
          </div>

          {/* Instagram */}
          <div className="bg-[#13232e] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 shadow-xl transition-all duration-300 cursor-pointer group">
            <a 
              href="https://www.instagram.com/raev.restoraunt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-[#0B1720] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Instagram</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                @raev.restoraunt
              </p>
              <p className="text-gray-500 text-sm mt-2">Bizi izləyin</p>
            </a>
          </div>

          {/* TikTok */}
          <div className="bg-[#13232e] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 shadow-xl transition-all duration-300 cursor-pointer group">
            <a 
              href="https://www.tiktok.com/@raev.coffeedesert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-[#0B1720] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M9 18V5l12-2v13"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">TikTok</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                @raev.coffeedesert
              </p>
              <p className="text-gray-500 text-sm mt-2">Desert və kofe məhsullarımızı izləyin</p>
            </a>
          </div>
        </div>

        {/* Ünvan */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-gradient-to-br from-[#13232e] to-[#0B1720] p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="bg-[#0B1720] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold mb-2">Ünvan</h3>
            <p className="text-gray-400 leading-relaxed">
              Lənkəran, Azərbaycan
            </p>
          </div>
        </div>

        {/* Əlavə Məlumat */}
        <div className="mt-12 text-center">
          <div className="bg-[#13232e] p-6 rounded-2xl border border-white/5">
            <p className="text-gray-400 mb-4">
              Sifariş vermək və ya rezervasiya etmək istəyirsiniz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+994775208490"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              >
                📞 Zəng Edin
              </a>
              <a 
                href="https://wa.me/994775208490"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elaqe;
