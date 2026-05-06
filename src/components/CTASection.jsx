import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    // The id="contact" here allows the Header's /#contact link to find this spot
    <section id="contact" className="relative py-24 bg-[#0F1F3D] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1611224105559-42ab1fd35151?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxjYXJnbyUyMHNoaXBwaW5nJTIwY29udGFpbmVyc3xlbnwwfHx8fDE3Nzc5OTIyOTB8MA&ixlib=rb-4.1.0&q=85"
          alt="Cargo Containers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F3D] via-[#0F1F3D]/90 to-[#0F1F3D]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">LET'S MOVE YOUR CARGO</div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.1] mb-6">
            Ready to ship smarter? Let's deliver goodwill together.
          </h2>
          <p className="text-white/70 leading-relaxed max-w-xl">
            Tell us about your shipment and our logistics strategists will come back to you within 2 business hours with a tailored solution.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {/* Changed href to #contact-form to stay within this section */}
            <a href="#contact-form" className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-orange-brand text-white">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+912261408900" className="btn-outline-white border border-white/30 text-white hover:bg-white/10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-colors">
              <Phone className="w-4 h-4" />
              +91 22 6140 8900
            </a>
          </div>
        </div>

        <div id="contact-form">
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Quote request received. We will be in touch shortly.'); 
            }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="font-display text-2xl text-[#0F1F3D] mb-6">Get a quick quote</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 outline-none text-sm" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 outline-none text-sm" />
              <input placeholder="Company" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 outline-none text-sm" />
              <select className="px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 outline-none text-sm bg-white text-gray-700">
                <option>Service required</option>
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Multi-Modal</option>
                <option>Project Cargo</option>
                <option>Cold Chain</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your shipment" rows={3} className="w-full mt-4 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 outline-none text-sm resize-none" />
            <button type="submit" className="btn-orange w-full mt-5 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 bg-orange-brand text-white hover:bg-opacity-90 transition-all">
              Submit Request <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;