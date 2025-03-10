// HeroSection.jsx
import React from 'react';

const HeroSection = ({ imageUrl, title, subtitle }) => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className='absolute inset-0 bg-black opacity-60 z-10'></div>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="relative z-20 px-4 flex items-center justify-center h-full text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 relative">
            <span className="text-white capitalize">{title}</span>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-white"></div>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;