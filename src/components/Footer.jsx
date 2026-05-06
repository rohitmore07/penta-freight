import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#081428] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-orange-brand flex items-center justify-center">
                <span className="text-white font-display text-xl">P</span>
              </div>
              <div>
                <div className="font-display text-lg">
                  <span className="text-white">PENTA</span><span className="text-orange-brand">FREIGHT</span>
                </div>
                <div className="text-[10px] tracking-[0.18em] text-white/50 font-semibold">WE DELIVER GOODWILL</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              India's trusted freight forwarder since 1993. Moving cargo across 150+ countries with precision and care.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-brand flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] font-bold text-white/40 mb-5">SERVICES</div>
            <ul className="space-y-3 text-sm text-white/70">
              {['Air Freight', 'Sea Freight', 'Multi-Modal', 'Project Cargo', 'Custom Broking', 'PentaKuhl'].map((l) => (
                <li key={l}><a href="#services" className="hover:text-orange-brand transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] font-bold text-white/40 mb-5">COMPANY</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-orange-brand transition-colors">Home</Link></li>
              <li><Link to="/industries" className="hover:text-orange-brand transition-colors">Industries</Link></li>
              <li><Link to="/pentakuhl" className="hover:text-orange-brand transition-colors">PentaKuhl</Link></li>
              <li><a href="#careers" className="hover:text-orange-brand transition-colors">Careers</a></li>
              <li><a href="#news" className="hover:text-orange-brand transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] font-bold text-white/40 mb-5">CONTACT</div>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-brand mt-0.5" />
                <span>Penta House, Mumbai, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-brand mt-0.5" />
                <span>+91 22 6140 8900</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-brand mt-0.5" />
                <span>info@pentafreight.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Penta Freight. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
