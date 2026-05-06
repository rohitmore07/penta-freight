import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// 1. Move your data arrays to the top, outside the component
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services', dropdown: true },
  { label: 'Industries', to: '/industries' },
  { label: 'Pentakuhl ❄️', to: '/pentakuhl' },
  { label: 'Contact', to: '/#contact' },
];

const serviceLinks = [
  'Air Freight',
  'Sea Freight',
  'Multi-Modal Transport',
  'Project Cargo',
  'Custom Broking',
  'Transit Warehouse & Fleet',
];

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/'); 
      }} 
      className="flex items-center gap-3 border-none bg-transparent p-0 text-left cursor-pointer"
    >
      <div className="w-11 h-11 rounded-lg bg-[#0F1F3D] flex items-center justify-center">
        <span className="text-white font-display text-xl">P</span>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg tracking-tight">
          <span className="text-[#0F1F3D]">PENTA</span>
          <span className="text-orange-brand">FREIGHT</span>
        </div>
        <div className="text-[10px] tracking-[0.18em] text-gray-500 mt-0.5 font-semibold">
          WE DELIVER GOODWILL
        </div>
      </div>
    </button>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    setMobileOpen(false);
    setServicesOpen(false);

    if (to === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/'); 
      return;
    }

    if (to.startsWith('/#')) {
      const id = to.split('#')[1];
      if (location.pathname === '/') {
        navigate(to);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(to);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-9">
          {/* navItems is now accessible here */}
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setServicesOpen(true)}
              onMouseLeave={() => item.dropdown && setServicesOpen(false)}
            >
              {item.to.startsWith('/#') || item.to === '/' ? (
                <button
                  onClick={() => handleNavClick(item.to)}
                  className={`nav-link flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                    location.pathname === '/' && location.hash === item.to.replace('/', '') 
                      ? 'text-orange-brand' 
                      : (location.pathname === '/' && !location.hash && item.to === '/') 
                        ? 'text-orange-brand' 
                        : 'text-[#0F1F3D]'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={`nav-link flex items-center gap-1 text-[15px] font-semibold ${
                    location.pathname === item.to ? 'text-orange-brand' : 'text-[#0F1F3D]'
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* DROPDOWN */}
              {item.dropdown && servicesOpen && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 w-64">
                    {serviceLinks.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleNavClick('/#services')}
                        className="w-full text-left block px-4 py-2.5 text-sm text-[#0F1F3D] hover:bg-orange-50 hover:text-orange-brand rounded-lg transition-colors font-medium"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('/#contact')}
            className="hidden lg:inline-flex btn-orange px-6 py-3 rounded-full font-semibold text-sm bg-orange-brand text-white hover:bg-opacity-90 transition-all"
          >
            Get a Quote
          </button>

          <button
            className="lg:hidden p-2 text-[#0F1F3D]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.to.startsWith('/#') || item.to === '/') {
                    handleNavClick(item.to);
                  } else {
                    setMobileOpen(false);
                    navigate(item.to);
                  }
                }}
                className={`font-semibold py-2 text-left ${
                   location.pathname === item.to ? 'text-orange-brand' : 'text-[#0F1F3D]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;