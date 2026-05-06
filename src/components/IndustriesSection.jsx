import React from 'react';
import { Link } from 'react-router-dom';
import { industries } from "../data/mock";


const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">INDUSTRIES WE SERVE</div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.1]">
              Logistics expertise across verticals that move the world.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <Link to="/industries" key={ind.id} className="industry-card relative rounded-2xl overflow-hidden h-[340px] block group">
              <img src={ind.image} alt={ind.name} className="industry-img absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D] via-[#0F1F3D]/70 to-[#0F1F3D]/10" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="text-xs tracking-[0.22em] text-orange-brand font-bold">{ind.id} / 04</div>
                <div>
                  <h3 className="font-display text-2xl text-white leading-tight mb-3">{ind.name}</h3>
                  <p className="text-white/75 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
