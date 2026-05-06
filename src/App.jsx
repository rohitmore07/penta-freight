import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndustriesPage from './pages/IndustriesPage';
import PentakuhlPage from './pages/PentakuhlPage';

// --- NEW COMPONENT: Scroll Controller ---
const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash (e.g., #about), wait for the page to render then scroll
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Delay ensures the DOM is fully loaded before trying to scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If navigating to a new page without a hash, start at the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* The Scroll Controller must live inside BrowserRouter */}
        <ScrollToSection />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/pentakuhl" element={<PentakuhlPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;