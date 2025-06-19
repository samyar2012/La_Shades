import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Services from './components/Services';

import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Projects from './pages/Gallery';
import ProductsPage from './pages/ProductsPage';
import Collections from './pages/collections/Collections';
import Blinds from './pages/collections/Blinds';
import Curtains from './pages/collections/Curtains';
import Shades from './pages/collections/Shades';
import Drapery from './pages/collections/Drapery';
import SheerDrapery from './pages/collections/drapery/SheerDrapery';
import BlackoutDrapery from './pages/collections/drapery/BlackoutDrapery';
import DecorativeDrapery from './pages/collections/drapery/DecorativeDrapery';
import ThermalDrapery from './pages/collections/drapery/ThermalDrapery';
import MotorizedDrapery from './pages/collections/drapery/MotorizedDrapery';
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
import QuoteRequest from './components/QuoteRequest';
import HorizontalBlinds from './pages/collections/blinds/HorizontalBlinds';
import VerticalBlinds from './pages/collections/blinds/VerticalBlinds';
import PanelBlinds from './pages/collections/blinds/PanelBlinds';
import MiniBlinds from './pages/collections/blinds/MiniBlinds';
import SheerCurtains from './pages/collections/curtains/SheerCurtains';
import BlackoutCurtains from './pages/collections/curtains/BlackoutCurtains';
import DecorativeCurtains from './pages/collections/curtains/DecorativeCurtains';
import ThermalCurtains from './pages/collections/curtains/ThermalCurtains';
import Finials from './pages/collections/accessories/Finials';
import Valances from './pages/collections/accessories/Valances';
import Tiebacks from './pages/collections/accessories/Tiebacks';
import CurtainRods from './pages/collections/accessories/CurtainRods';
import NotFound from './pages/NotFound';
import FabricDrapery from './pages/collections/drapery/FabricDrapery';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import ShippingPolicy from './pages/legal/ShippingPolicy';
import ReturnPolicy from './pages/legal/ReturnPolicy';
import FAQ from './pages/legal/FAQ';

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
          <Route path="/collections/curtains/sheer" element={<SheerCurtains />} />
          <Route path="/collections/curtains/blackout" element={<BlackoutCurtains />} />
          <Route path="/collections/curtains/decorative" element={<DecorativeCurtains />} />
          <Route path="/collections/curtains/thermal" element={<ThermalCurtains />} />
          <Route path="/collections/shades" element={<Shades />} />
          <Route path="/collections/shades/roller" element={<RollerShades />} />
          <Route path="/collections/shades/roman" element={<RomanShades />} />
          <Route path="/collections/shades/cellular" element={<CellularShades />} />
          <Route path="/collections/shades/woven-wood" element={<WovenWoodShades />} />
          <Route path="/collections/shades/motorized" element={<MotorizedShades />} />
          <Route path="/collections/drapery" element={<Drapery />} />
          <Route path="/collections/drapery/sheer" element={<SheerDrapery />} />
          <Route path="/collections/drapery/blackout" element={<BlackoutDrapery />} />
          <Route path="/collections/drapery/decorative" element={<DecorativeDrapery />} />
          <Route path="/collections/drapery/thermal" element={<ThermalDrapery />} />
          <Route path="/collections/drapery/motorized" element={<MotorizedDrapery />} />
          <Route path="/collections/drapery/fabric" element={<FabricDrapery />} />
          <Route path="/collections/accessories" element={<Accessories />} />
          <Route path="/collections/accessories/finials" element={<Finials />} />
          <Route path="/collections/accessories/valances" element={<Valances />} />
          <Route path="/collections/accessories/tiebacks" element={<Tiebacks />} />
          <Route path="/collections/accessories/curtain-rods" element={<CurtainRods />} />
          <Route path="/services/custom-design" element={<CustomDesign />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/collections/blinds/horizontal-blinds" element={<HorizontalBlinds />} />
          <Route path="/collections/blinds/vertical-blinds" element={<VerticalBlinds />} />
          <Route path="/collections/blinds/panel-blinds" element={<PanelBlinds />} />
          <Route path="/collections/blinds/mini-blinds" element={<MiniBlinds />} />
          <Route path="/collections/curtains/sheer-curtains" element={<SheerCurtains />} />
          <Route path="/collections/curtains/blackout-curtains" element={<BlackoutCurtains />} />
          <Route path="/collections/curtains/decorative-curtains" element={<DecorativeCurtains />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;