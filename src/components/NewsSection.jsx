import React from 'react';
import { ArrowRight } from 'lucide-react';
import { news } from "../data/mock";

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">NEWS &amp; INSIGHTS</div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.05]">
              From the warehouse floor to the C-suite.
            </h2>
          </div>
          <a href="#news" className="inline-flex items-center gap-2 text-sm font-bold text-[#0F1F3D] hover:text-orange-brand">
            All News <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article key={n.title} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
              <div className="h-52 overflow-hidden">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] mb-4">
                  <span className="text-orange-brand">{n.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-gray-500">{n.date}</span>
                </div>
                <h3 className="font-display text-lg text-[#0F1F3D] leading-snug mb-3 group-hover:text-orange-brand transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{n.desc}</p>
                <a href="#news" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#0F1F3D] hover:text-orange-brand">
                  READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
