import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyPentaSection from '../components/WhyPentaSection';
import StatsSection from '../components/StatsSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CarriersSection from '../components/CarriersSection';
import NewsSection from '../components/NewsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <main>
        <Hero />
        
        {/* Added IDs to match Header links */}
        <div id="about">
          <AboutSection />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <WhyPentaSection />
        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CarriersSection />
        <NewsSection />

        <div id="contact">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;