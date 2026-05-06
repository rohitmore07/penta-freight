import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from "../data/mock";

const TestimonialsSection = () => {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);
  const t = testimonials[i];

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">CLIENT VOICES</div>
          <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.05] mb-6">
            Trusted by 500+ of India's most respected companies.
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            From Fortune 500 multinationals to ambitious startups, they all come for the logistics and they stay for the goodwill.
          </p>
          <div className="flex items-center gap-3 mt-10">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-[#0F1F3D]/15 flex items-center justify-center text-[#0F1F3D] hover:bg-[#0F1F3D] hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-[#0F1F3D] text-white flex items-center justify-center hover:bg-orange-brand transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="ml-4 text-xs tracking-[0.22em] font-bold text-gray-500">0{i + 1} / 0{total}</div>
          </div>
        </div>

        <div className="relative bg-white rounded-3xl p-10 shadow-[0_20px_60px_-30px_rgba(15,31,61,0.25)]">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-orange-brand/15 fill-orange-brand/15" />
          <p className="font-display text-2xl text-[#0F1F3D] leading-snug mb-8 relative z-10" style={{ fontWeight: 600 }}>
            “{t.quote}”
          </p>
          <div className="h-px bg-gray-100 mb-6" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0F1F3D] text-white flex items-center justify-center font-bold text-sm">
              {t.initials}
            </div>
            <div>
              <div className="font-semibold text-[#0F1F3D]">{t.name}</div>
              <div className="text-sm text-gray-500">{t.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
