import React from 'react';
import { Users, BadgeCheck, DollarSign, Building2, ShieldCheck, Globe } from 'lucide-react';
import { whyUS } from "../data/mock";

const iconMap = { Users, BadgeCheck, DollarSign, Building2, ShieldCheck, Globe };

const WhyPentaSection = () => {
  return (
    <section className="relative py-24 bg-[#0F1F3D] overflow-hidden">
      <div className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-orange-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">WHY PENTA FREIGHT</div>
        <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.1] max-w-3xl mb-14">
          Six reasons the world's most demanding shippers trust us.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUS.map((w) => {
            const Icon = iconMap[w.icon] || Users;
            return (
              <div key={w.title} className="group rounded-2xl p-7 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-orange-brand/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-display text-xl mb-3">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPentaSection;
