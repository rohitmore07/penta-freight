import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  Thermometer,
  Snowflake,
  ShieldCheck,
  PackageCheck,
  Truck,
  MapPin,
  Menu,
  X
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Mock data                                                                 */
/* -------------------------------------------------------------------------- */
const SERIES = [
  {
    id: "s4",
    label: "SERIES 4",
    range: "15°C – 25°C",
    usage: "Covers a controlled room temperature range.",
    ideal:
      "Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.",
  },
  {
    id: "s22",
    label: "SERIES 22",
    range: "2°C – 8°C",
    usage: "Refrigerated range for biologics and vaccines.",
    ideal:
      "Ideal for most vaccines, insulin, and temperature-sensitive biologics that require a consistent cold chain.",
  },
  {
    id: "s20m",
    label: "SERIES 20M",
    range: "-20°C range",
    usage: "Frozen range for clinical trial samples and frozen biologics.",
    ideal:
      "Used for products that must remain frozen throughout transit, including certain reagents and blood products.",
  },
  {
    id: "s50m",
    label: "SERIES 50M",
    range: "-50°C & below",
    usage: "Deep-freeze range for advanced therapies.",
    ideal:
      "Ideal for mRNA vaccines, cell & gene therapies and other ultra-low temperature biologics.",
  },
];

const FAQS = [
  {
    q: "What is Penta Kuhl?",
    a: "Penta Kuhl is the temperature-controlled packaging division of Penta Freight, offering validated, passive cold-chain shipping solutions for pharmaceuticals, biotech, food and sensitive industrial products.",
  },
  {
    q: "Which products are you an authorized distributor for?",
    a: "We are authorized distributors for Pelican BioThermal™ products in India including the full range of Crēdo™ parcel and pallet shippers.",
  },
  {
    q: "Do you offer both single-use and reusable shippers?",
    a: "Yes. We offer single-use shippers for one-way shipments and reusable, durable shippers backed by a full network management programme to handle returns, cleaning and redeployment.",
  },
  {
    q: "What temperature ranges can you maintain?",
    a: "Our series cover controlled room temperature (15–25°C), refrigerated (2–8°C), frozen (-20°C) and deep-frozen (-50°C and below) ranges for durations ranging from 48 hours up to 120+ hours.",
  },
  {
    q: "Can you customise a solution for my supply chain?",
    a: "Absolutely. Our team performs a route-based thermal assessment, selects the right payload & series, and provides training for your dispatch teams end-to-end.",
  },
  {
    q: "How do I request a quote?",
    a: "Simply click ‘Contact Us Today’ and our cold-chain strategists will respond within two business hours with a tailored proposal.",
  },
];

const INDIA_OFFICES = [
  {
    city: "Mumbai",
    address:
      "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
    phone: "+91 22-6222-6222",
  },
  {
    city: "Ahmedabad",
    address:
      "D21 The Address, True Value, West Gate, SG highway, Ahmedabad 380 009",
    phone: "+91 7940227900",
  },
  {
    city: "Bengaluru",
    address:
      "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017",
    phone: "+91 80-4112-5590",
  },
  {
    city: "Chennai",
    address:
      "Flat no. A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114",
    phone: "+91-44-22241462 / 1464",
  },
  {
    city: "Delhi",
    address:
      "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037",
    phone: "+91 11-4078-2222",
  },
  {
    city: "Hyderabad",
    address:
      "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana",
    phone: "+91 40-2400-4048",
  },
  {
    city: "Kolkata",
    address:
      "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal",
    phone: "+91 33-2514-7089",
  },
];

const MARQUEE_1 = [
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
];

/* -------------------------------------------------------------------------- */
/*  Small reusable bits                                                       */
/* -------------------------------------------------------------------------- */
const EyebrowTag = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200">
    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
    <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
      {children}
    </span>
  </div>
);

const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={
      "inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-sm " +
      className
    }
  >
    {children}
  </button>
);

const GhostButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={
      "inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 " +
      className
    }
  >
    {children}
  </button>
);

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
const Hero = () => (
  <section className="relative min-h-[88vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1754073169072-d3b22589514e"
        alt="Temperature-controlled cargo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F3D]/95 via-[#0F1F3D]/80 to-[#0F1F3D]/40" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
      <div className="text-xs tracking-[0.22em] text-orange-brand font-bold mb-4">
            PENTAKUHL
          </div>
      <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] max-w-3xl">
        Ensuring Safe Transport <br className="hidden md:block" />
        for{" "}
        <span className="text-orange-400">Temperature-Sensitive</span> Products
      </h1>
      <p className="text-white/70 leading-relaxed max-w-2xl mt-5">
        Explore our frequently asked questions to gain clarity about Penta
        Kuhl's services and features built for pharmaceuticals,
        biotechnology and perishables.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <PrimaryButton>
          Explore <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
        <GhostButton>Download Brochure</GhostButton>
      </div>

      {/* quick stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
        {[
          { k: "30+", v: "Years of Goodwill" },
          { k: "150+", v: "Countries Served" },
          { k: "4", v: "Temperature Series" },
          { k: "24/7", v: "Cold-Chain Support" },
        ].map((s) => (
          <div key={s.v}>
            <div className="text-3xl md:text-4xl font-black text-white">
              {s.k}
            </div>
            <div className="mt-1 text-xs md:text-sm text-slate-300 tracking-wide">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*  About Penta Kuhl                                                          */
/* -------------------------------------------------------------------------- */
const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1"
            alt="Pharmaceutical warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-6 bg-white rounded-2xl shadow-xl p-5 w-56 border border-slate-100">
          <div className="flex items-center gap-2 text-orange-500">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest">
              AUTHORIZED
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-[#0A2540] leading-snug">
            Distributor for Pelican BioThermal™ products
          </p>
        </div>
      </div>

      <div>
        <EyebrowTag>About Pentakuhl</EyebrowTag>
        <h2 className="mt-6 font-black tracking-tight text-[#0A2540] text-4xl md:text-5xl leading-[1.05]">
          Durable packaging that <br />
          holds the{" "}
          <span className="text-orange-500">right temperature</span>, mile after
          mile.
        </h2>
        <p className="mt-6 text-slate-600 leading-relaxed">
          At Pentakuhl, we specialize in providing durable, effective packaging
          solutions that maintain temperature stability during transit,
          protecting your valuable products. Our innovative designs cater to
          various industries, including pharmaceuticals, food and
          biotechnology.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          As authorized distributors for Pelican BioThermal™ products in India,
          we bring world-class passive cold-chain technology to every shipment
          from single-use parcel shippers to re-deployable pallet systems.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[
            { icon: Thermometer, label: "Validated thermal performance" },
            { icon: PackageCheck, label: "Single-use & reusable options" },
            { icon: Snowflake, label: "–50°C to +25°C coverage" },
            { icon: Truck, label: "Parcel & pallet shippers" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
            >
              <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 grid place-items-center shrink-0">
                <f.icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-semibold text-[#0A2540] pt-1">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <PrimaryButton>
            Read more <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*  Shipper block (Parcel / Pallet)                                           */
/* -------------------------------------------------------------------------- */
const ShipperBlock = ({ id, reverse, eyebrow, title, copy, image, ctaText }) => {
  const [tab, setTab] = useState("single");
  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={
            "grid lg:grid-cols-2 gap-12 items-center " +
            (reverse ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <div>
            <EyebrowTag>{eyebrow}</EyebrowTag>
            <h3 className="mt-5 font-black tracking-tight text-[#0A2540] text-3xl md:text-5xl leading-[1.05]">
              {title}
            </h3>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-xl">
              {copy}
            </p>

            {/* Tabs */}
            <div className="mt-8 inline-flex p-1 bg-white rounded-full border border-slate-200 shadow-sm">
              <button
                onClick={() => setTab("single")}
                className={
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors " +
                  (tab === "single"
                    ? "bg-[#0A2540] text-white"
                    : "text-slate-600 hover:text-[#0A2540]")
                }
              >
                Single Use
              </button>
              <button
                onClick={() => setTab("reusable")}
                className={
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors " +
                  (tab === "reusable"
                    ? "bg-[#0A2540] text-white"
                    : "text-slate-600 hover:text-[#0A2540]")
                }
              >
                Reusable
              </button>
            </div>

            <div className="mt-6 p-5 bg-white rounded-2xl border border-slate-100">
              {tab === "single" ? (
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Cost-effective for one-way and low-volume lanes.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Ready-to-ship kits with pre-qualified payloads.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Recyclable components and minimal returns logistics.
                  </li>
                </ul>
              ) : (
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Up to 120+ hours of thermal protection.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Full network management - reverse logistics included.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    Lowest total cost per shipment at scale.
                  </li>
                </ul>
              )}
            </div>

            <div className="mt-8">
              <PrimaryButton>
                {ctaText} <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-5 left-5 bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-[#0A2540]">
                Thermally validated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Series Guide                                                              */
/* -------------------------------------------------------------------------- */
const SeriesGuide = () => {
  const [active, setActive] = useState(SERIES[0].id);
  const current = SERIES.find((s) => s.id === active);

  return (
    <section id="series" className="py-24 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <EyebrowTag>Series Guide</EyebrowTag>
          <h2 className="mt-6 font-black text-white tracking-tight text-4xl md:text-5xl leading-[1.05]">
            Temperature-controlled packaging <br />
            for every{" "}
            <span className="text-orange-400">thermal requirement</span>.
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            This guide outlines temperature-controlled packaging solutions
            designed for the safe transport and storage of sensitive products,
            like vaccines and biologics, across various thermal conditions
            from refrigerated to deep-freeze.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Tabs list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {SERIES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={
                  "text-left px-5 py-4 rounded-2xl border transition-all duration-200 whitespace-nowrap lg:whitespace-normal " +
                  (active === s.id
                    ? "bg-orange-500 border-orange-500 text-white shadow-lg"
                    : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10")
                }
              >
                <div className="text-[11px] tracking-[0.2em] font-semibold opacity-80">
                  COLD-CHAIN
                </div>
                <div className="mt-1 font-black text-xl">{s.label}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-orange-400">
              <Thermometer className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest">
                {current.label}
              </span>
            </div>
            <div className="mt-4 text-5xl md:text-6xl font-black text-white tracking-tight">
              {current.range}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-orange-400 tracking-widest">
                  USAGE & APPLICATIONS
                </div>
                <p className="mt-3 text-slate-200 leading-relaxed">
                  {current.usage}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-bold text-orange-400 tracking-widest">
                  IDEAL FOR
                </div>
                <p className="mt-3 text-slate-200 leading-relaxed">
                  {current.ideal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Marquee                                                                   */
/* -------------------------------------------------------------------------- */
const Marquee = ({ items, reverse = false, theme = "light" }) => {
  const base =
    theme === "light"
      ? "bg-white border-y border-slate-100 text-[#0A2540]"
      : "bg-orange-500 text-white";
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-6 ${base}`}>
      <div
        className={`flex gap-12 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-2xl md:text-4xl font-black tracking-tight">
              {t}
            </span>
            <span className="w-2 h-2 rounded-full bg-current opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */
const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <EyebrowTag>FAQ</EyebrowTag>
          <h2 className="mt-6 font-black tracking-tight text-[#0A2540] text-4xl md:text-5xl leading-[1.05]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our frequently asked questions to gain clarity about Penta
            Kuhl's services and features.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={
                  "rounded-2xl border transition-all duration-200 " +
                  (isOpen
                    ? "border-orange-200 bg-orange-50/60 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300")
                }
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                >
                  <span className="font-semibold text-[#0A2540] text-base md:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={
                      "w-9 h-9 shrink-0 rounded-full grid place-items-center transition-colors " +
                      (isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-[#0A2540]")
                    }
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={
                    "grid transition-all duration-300 ease-in-out " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */
const CtaBand = () => (
  <section id="contact" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1609143739217-01b60dad1c67"
        alt="Cold storage"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A2540]/90" />
    </div>
    <div className="relative max-w-5xl mx-auto px-6 text-center">
      <EyebrowTag>Let's talk cold chain</EyebrowTag>
      <h2 className="mt-6 font-black text-white tracking-tight text-4xl md:text-6xl leading-[1.05]">
        Protecting What <span className="text-orange-400">Matters Most</span>
      </h2>
      <p className="mt-5 max-w-2xl mx-auto text-slate-200 leading-relaxed">
        Get in touch to ensure safe and temperature-stable transit for your
        sensitive products. Our cold-chain strategists will get back within 2
        business hours.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <PrimaryButton>
          Contact Us Today <ArrowRight className="w-4 h-4" />
        </PrimaryButton>
        <GhostButton>
          <Phone className="w-4 h-4" /> +91 22 6140 8900
        </GhostButton>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*  Offices                                                                   */
/* -------------------------------------------------------------------------- */
const OfficeCard = ({ city, address, phone }) => (
  <div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-lg transition-all duration-200">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 grid place-items-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
        <MapPin className="w-5 h-5" />
      </div>
      <h4 className="text-xl font-black text-[#0A2540] tracking-tight">
        {city}
      </h4>
    </div>
    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{address}</p>
    <a
      href={`tel:${phone.replace(/\s|-|\//g, "")}`}
      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
    >
      <Phone className="w-3.5 h-3.5" />
      {phone}
    </a>
  </div>
);

const Offices = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <EyebrowTag>Our Network</EyebrowTag>

      <div className="mt-6">
        <h2 className="font-black tracking-tight text-[#0A2540] text-4xl md:text-5xl leading-[1.05]">
          Our India <span className="text-orange-500">Offices</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl">
          We operate across major Indian cities to ensure strong cold-chain logistics coverage nationwide.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDIA_OFFICES.map((office) => (
          <OfficeCard
            key={office.city}
            city={office.city}
            address={office.address}
            phone={office.phone}
          />
        ))}
      </div>
    </div>
  </section>
);

export default function PentakuhlPage() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <ShipperBlock
        id="parcel"
        eyebrow="Parcel Shippers"
        title={
          <>
            Parcel Shippers for{" "}
            <span className="text-orange-500">time-critical</span> cargo.
          </>
        }
        copy="We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping from single-use passive systems to fully reusable, validated boxes."
        image="https://images.unsplash.com/photo-1762049213265-675d3e57fe5a"
        ctaText="Parcel Shippers"
      />

      <Marquee items={MARQUEE_1} theme="light" />

      <ShipperBlock
        id="pallet"
        reverse
        eyebrow="Product Solutions · Pallet Shippers"
        title={
          <>
            Pallet Shippers for{" "}
            <span className="text-orange-500">bulk cold-chain</span>{" "}
            movements.
          </>
        }
        copy="We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently with validated thermal performance across intercontinental lanes."
        image="https://images.unsplash.com/photo-1662320154145-7263e998e7a2"
        ctaText="Pallet Shippers"
      />

      <SeriesGuide />
      <FAQ />
      <CtaBand />
      <Offices />
      <CTASection />
      <Footer />
    </div>
  );
}