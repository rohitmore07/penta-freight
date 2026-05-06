import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industries } from "../data/mock";

const highlights = {
  'Pharmaceutical & Healthcare': ['GDP-compliant cold chain', '2–8°C, 15–25°C validated lanes', 'Temperature excursion alerts', 'Dedicated pharma desk 24/7'],
  'Automotive & Engineering': ['JIT parts logistics', 'Heavy-lift & ODC project cargo', 'Bonded warehousing', 'Dedicated fleet across India'],
  'Retail & E-commerce': ['Seasonal peak scaling', 'SKU-level visibility', 'First & last-mile network', 'Returns management'],
  'Perishables & Food': ['Reefer ocean freight', 'Cold chain integrity', 'Phyto-sanitary paperwork', 'Airport-to-airport cold corridors'],
};

const IndustriesPage = () => {

  // ✅ FORCE SCROLL TO TOP (IMPORTANT FIX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <TopBar />
      <Header />

      {/* HERO */}
      <section className="relative bg-[#0F1F3D] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1702136502735-5a3bd3597fe7?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F3D] to-[#0F1F3D]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">
            INDUSTRIES
          </div>

          <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] max-w-3xl">
            Logistics built for the industries that move the world.
          </h1>

          <p className="text-white/70 leading-relaxed max-w-2xl mt-5">
            From validated cold-chain for pharma to just-in-time parts logistics for automotive, we shape our operations around the specific demands of each vertical we serve.
          </p>

          <div className="flex items-center gap-2 text-xs tracking-[0.18em] font-bold text-white/60 mt-10">
            <Link to="/" className="hover:text-orange-brand">
              HOME
            </Link>
            <span>/</span>
            <span className="text-orange-brand">INDUSTRIES</span>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {industries.map((ind, i) => (
            <div
              key={ind.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-[460px] object-cover"
                  />
                </div>

                <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-xs tracking-[0.22em] font-bold text-orange-brand">
                    {ind.id} / 04
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-4xl md:text-5xl text-[#0F1F3D] leading-[1.1] mb-5">
                  {ind.name}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-7">
                  {ind.desc} We bring three decades of forwarding expertise, certified handling and a coast-to-coast network to every shipment in this vertical.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {(highlights[ind.name] || []).map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-brand mt-0.5 shrink-0" />
                      <span className="text-sm text-[#0F1F3D] font-medium">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                >
                  Discuss your requirement <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default IndustriesPage;