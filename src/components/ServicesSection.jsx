import React from 'react';
import { Plane, Ship, Truck, Package, FileCheck2, Warehouse, Snowflake, ArrowUpRight } from 'lucide-react';
import { services } from "../data/mock";

const iconMap = { Plane, Ship, Truck, Package, FileCheck2, Warehouse, Snowflake };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">WHAT WE DO</div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.05]">
              End-to-end freight solutions,<br />
              <span className="text-orange-brand">built for every mode.</span>
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed md:text-right">
            From time-critical air freight to heavy-lift project cargo, we engineer logistics around your supply chain never the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Package;
            return (
              <div key={s.title} className="service-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative h-52">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0F1F3D]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="font-display text-xl text-white">{s.title}</h3>
                    <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#0F1F3D]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                  <a href="#services" className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[#0F1F3D] hover:text-orange-brand transition-colors">
                    LEARN MORE
                    <span className="w-8 h-px bg-current" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
