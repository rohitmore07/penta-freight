import React, { useEffect, useState } from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { heroSlides } from "../data/mock";


const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === active ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081428]/85 via-[#0F1F3D]/55 to-[#0F1F3D]/20" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div key={active} className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-brand" />
              <span className="text-xs tracking-[0.2em] font-semibold">{heroSlides[active].eyebrow}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">{heroSlides[active].title}</h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-8">{heroSlides[active].description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold">
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline-white inline-flex items-center px-7 py-3.5 rounded-full font-semibold">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-orange-brand' : 'w-5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Track Shipment card */}
      <div className="hidden md:flex absolute bottom-10 right-10 z-10">
        <div className="bg-white/95 backdrop-blur rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-4 min-w-[280px]">
          <div className="w-11 h-11 rounded-xl bg-orange-brand/10 flex items-center justify-center">
            <Truck className="w-5 h-5 text-orange-brand" />
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] font-bold text-gray-500">TRACK YOUR SHIPMENT</div>
            <div className="text-sm font-semibold text-[#0F1F3D] mt-0.5">Real-time visibility</div>
          </div>
          <a href="#track" className="ml-auto text-orange-brand font-semibold text-sm hover:underline">Track Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
