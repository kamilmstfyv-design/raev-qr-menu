import React from 'react';

const WhyUs = () => {
  const features = [
    {
      id: 1,
      title: "Yüksek Keyfiyyət",
      // SVG ikon birbaşa kodun içindədir
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 15l-2 5l-2-5h4z"/><circle cx="12" cy="7" r="4"/><path d="M12 11v4"/></svg>,
      text: "Bizim üçün keyfiyyət hər şeydən öndə gəlir. İstifadə etdiyimiz hər bir məhsul ciddi laboratoriya və dad testlərindən keçir."
    },
    {
      id: 2,
      title: "Təbii Məhsullar",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C10 14.5 10.5 13 12 13s2 1.5 1.85 2c-.15.5-1.5 1-3.85 1-3.23 0-5 2.36-5 5.36"/></svg>,
      text: "Süfrənizə gələn hər bir təam yerli fermerlərdən alınan ən təzə və təbii inqrediyentlərlə hazırlanır."
    },
    {
      id: 3,
      title: "Sürətli Xidmət",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      text: "Zamanınızın dəyərini bilirik. Sifarişləriniz peşəkar komandamız tərəfindən ən qısa zamanda və isti şəkildə təqdim olunur."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1720] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nə üçün <span className="text-emerald-500 border-b-2 border-emerald-500">Biz?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sizi məmnun etmək üçün hər bir detala xüsusi diqqət yetiririk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#13232e] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="bg-[#0B1720] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;