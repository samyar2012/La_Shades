import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import ConsultationBanner from '../components/ConsultationBanner';
import VideoGallery from '../components/VideoGallery';

const Home = () => {
  return (
    //done
    <main className="home">
      <section className="hero-section">
        <Hero />
      </section>
      {/* done */}
      <section className="features-section">
        <Features />
      </section>
      {/* done */}

      <section className="products-section">
        <Products />
      </section>
      {/* done */}
      <section className="services-section">
        <Services />
      </section>

      <section className="video-gallery-section">
        <VideoGallery />
      </section>

      <section className="consultation-section">
        <ConsultationBanner />
      </section>
      
      <section className="testimonials-section">
        <Testimonials />
      </section>
      
      <section className="newsletter-section">
        <Newsletter />
      </section>
    </main>
  );
};

export default Home; 