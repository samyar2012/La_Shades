import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Projects from './pages/Projects';
import ProductsPage from './pages/ProductsPage';
import Collections from './pages/collections/Collections';
import Blinds from './pages/collections/Blinds';
import Curtains from './pages/collections/Curtains';
import Shades from './pages/collections/Shades';
import RollerShades from './pages/collections/shades/RollerShades';
import RomanShades from './pages/collections/shades/RomanShades';
import CellularShades from './pages/collections/shades/CellularShades';
import WovenWoodShades from './pages/collections/shades/WovenWoodShades';
import MotorizedShades from './pages/collections/shades/MotorizedShades';
import Accessories from './pages/collections/Accessories';
import CustomDesign from './pages/services/CustomDesign';
import Installation from './pages/services/Installation';
import Consultation from './pages/services/Consultation';
import ScrollToTop from './components/ScrollToTop';
import CTA_Section from './components/CTA_Section';

import HorizontalBlinds from './pages/collections/blinds/HorizontalBlinds';
import VerticalBlinds from './pages/collections/blinds/VerticalBlinds';
import PanelBlinds from './pages/collections/blinds/PanelBlinds';
import MiniBlinds from './pages/collections/blinds/MiniBlinds';

function App() {
  useEffect(() => {
    document.title = 'Luna Drapes - Premium Blinds & Curtains';
    
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.removeAttribute('data-default');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Products />
              <Services />

              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/blinds" element={<Blinds />} />
          <Route path="/collections/curtains" element={<Curtains />} />
          <Route path="/collections/shades" element={<Shades />} />
          <Route path="/collections/shades/roller" element={<RollerShades />} />
          <Route path="/collections/shades/roman" element={<RomanShades />} />
          <Route path="/collections/shades/cellular" element={<CellularShades />} />
          <Route path="/collections/shades/woven-wood" element={<WovenWoodShades />} />
          <Route path="/collections/shades/motorized" element={<MotorizedShades />} />
          <Route path="/collections/accessories" element={<Accessories />} />
          <Route path="/services/custom-design" element={<CustomDesign />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/collections/blinds/horizontal-blinds" element={<HorizontalBlinds />} />
          <Route path="/collections/blinds/vertical-blinds" element={<VerticalBlinds />} />
          <Route path="/collections/blinds/panel-blinds" element={<PanelBlinds />} />
          <Route path="/collections/blinds/mini-blinds" element={<MiniBlinds />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;