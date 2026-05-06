import React from 'react';
import { stats } from "../data/mock";

const StatsSection = () => {
  return (
    <section className="bg-[#081428] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-white">
              {s.value.replace('+', '')}
              <span className="text-orange-brand">+</span>
            </div>
            <p className="text-white/60 text-sm mt-2 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
