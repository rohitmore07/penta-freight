import React from 'react';
import { carriers } from "../data/mock";

const CarriersSection = () => {
  const loop = [...carriers, ...carriers];
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs tracking-[0.22em] text-gray-500 font-bold text-center mb-10">
          GLOBAL CARRIER &amp; NETWORK PARTNERS
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center gap-14 animate-marquee" style={{ width: 'max-content' }}>
            {loop.map((c, i) => (
              <div key={i} className="font-display text-xl md:text-2xl text-gray-400 hover:text-[#0F1F3D] transition-colors whitespace-nowrap tracking-wide">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarriersSection;
