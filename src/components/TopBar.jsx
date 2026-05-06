import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#081428] text-white text-xs tracking-wide hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+912261408900" className="flex items-center gap-2 text-white/80 hover:text-orange-brand transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 22 6140 8900</span>
          </a>
          <a href="mailto:info@pentafreight.com" className="flex items-center gap-2 text-white/80 hover:text-orange-brand transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@pentafreight.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#careers" className="text-white/80 hover:text-orange-brand transition-colors font-medium">CAREERS</a>
          <a href="#news" className="text-white/80 hover:text-orange-brand transition-colors font-medium">NEWS</a>
          <a href="#track" className="text-white/80 hover:text-orange-brand transition-colors font-medium">TRACK SHIPMENT</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
