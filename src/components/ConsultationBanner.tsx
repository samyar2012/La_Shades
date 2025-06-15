import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import consultationBg from '../assets/photo_2025-06-01_20-53-17.jpg';

const ConsultationBanner: React.FC = () => {
  return (
    <div className="relative bg-amber-700 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${consultationBg})`
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Transform Your Space with Expert Design
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation with our design experts and discover how our premium window treatments can enhance your home.
          </p>
          <Link
            to="/contact"
            className="group/button relative inline-flex items-center bg-white text-amber-700 px-8 py-3 text-sm font-semibold overflow-hidden transition-all duration-300 text-center uppercase tracking-wider hover:bg-amber-50"
          >
            <span className="relative z-10 flex items-center">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/button:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-amber-50 transform scale-x-0 group-hover/button:scale-x-100 transition-transform origin-left duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner; 