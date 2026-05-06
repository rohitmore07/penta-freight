import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { certifications } from "../data/mock";

const items = [
  'Lufthansa Cargo Premium Partner',
  'ISO 9001:2015 Certified Operations',
  'FIATA & IATA Accredited Agent',
  'AEO-Authorized Economic Operator',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1702136502735-5a3bd3597fe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxwb3J0JTIwY3JhbmVzfGVufDB8fHx8MTc3Nzk5MjI5OHww&ixlib=rb-4.1.0&q=85"
                alt="Cargo port"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 md:left-12 bg-[#0F1F3D] rounded-2xl p-6 shadow-2xl w-[240px]">
              <div className="font-display text-5xl text-white">30<span className="text-orange-brand">+</span></div>
              <p className="text-white/80 text-sm mt-2 leading-snug">Years of delivering goodwill across continents.</p>
            </div>
            <div className="absolute -bottom-4 left-[260px] w-20 h-20 border-2 border-dashed border-orange-brand/50 rounded-full hidden md:block" />
          </div>

          <div>
            <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">ABOUT PENTA FREIGHT</div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.1] mb-6">
              Three decades of moving India's cargo with trust at the core.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in Mumbai in 1993, Penta Freight has grown into one of India's most respected freight forwarders. From a two-person office to a 500-strong organization with branches across every major Indian city, our story is written in every shipment we've delivered with care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Our tagline <span className="font-semibold text-[#0F1F3D]">“We Deliver Goodwill”</span> isn't a marketing line, it's the standard we hold every team member to, every single day.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {items.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-brand shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0F1F3D] font-medium">{t}</span>
                </div>
              ))}
            </div>

            <a href="#about" className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm">
              Our Story <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-4 gap-3 mt-10">
              {certifications.map((c) => (
                <div key={c.label} className="border border-gray-200 rounded-xl px-4 py-3 bg-white hover:border-orange-brand/40 transition-colors">
                  <div className="font-display text-[#0F1F3D] text-sm">{c.label}</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
