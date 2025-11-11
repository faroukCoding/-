
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-brand-blue bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-amiri font-bold mb-4 animate-fade-in-down text-3d-hero">
          نصنع قادة المستقبل
        </h1>
        <p className="text-lg md:text-2xl font-cairo max-w-3xl mx-auto mb-8 animate-fade-in-up">
          في مدرسة الفجر الدولية، نؤمن بأن التعليم هو رحلة لاكتشاف الذات وبناء الشخصية.
        </p>
        <div className="space-x-4 space-x-reverse animate-fade-in-up animation-delay-300">
          <a href="#admissions" className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105">
            انضم إلينا
          </a>
          <a href="#about" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-lg transform hover:scale-105">
            اكتشف المزيد
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default Hero;