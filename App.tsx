
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Academics from './components/Academics';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="bg-brand-light font-cairo text-brand-gray" dir="rtl">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Academics />
        <Testimonials />
        <Admissions />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;