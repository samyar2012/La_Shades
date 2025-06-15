import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import { Star, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react'
import rollerShade from '../assets/photo_2025-06-01_20-53-17.jpg';
import romanShade from '../assets/photo_2025-06-01_20-53-12.jpg';
import cellularShade from '../assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg';
import motorizedShade from '../assets/moon-i87dB4Kd7nw-unsplash.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Discover Our Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard 
              title="Elegant Curtains" 
              description="Luxurious drapes for timeless style"
              imageUrl={rollerShade}
            />
            <CategoryCard 
              title="Modern Blinds" 
              description="Contemporary solutions for light control"
              imageUrl={romanShade}
            />
            <CategoryCard 
              title="Roman Shades" 
              description="Soft fabric folds with classic appeal"
              imageUrl={cellularShade}
            />
            <CategoryCard 
              title="Custom Solutions" 
              description="Tailored to your unique windows"
              imageUrl={motorizedShade}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Why Choose Luna Drapes</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            With years of experience and a commitment to excellence, we deliver window treatments that transform your space.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="h-10 w-10 text-[#0a1e2e]" />}
              title="Quality Guarantee" 
              description="All our products are crafted from premium materials, ensuring longevity and lasting beauty."
            />
            <FeatureCard 
              icon={<TrendingUp className="h-10 w-10 text-[#0a1e2e]" />}
              title="Custom Design" 
              description="Our expert consultants help you select the perfect window treatments to match your style."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="h-10 w-10 text-[#0a1e2e]" />}
              title="Professional Installation" 
              description="Our skilled technicians ensure your window treatments are installed perfectly."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Luna Drapes transformed our living room with beautiful custom curtains. The quality and attention to detail exceeded our expectations."
              author="Sarah Johnson"
              rating={5}
            />
            <TestimonialCard 
              quote="The team at Luna Drapes was amazing from start to finish. Their expertise helped us choose the perfect blinds for our home office."
              author="Michael Torres"
              rating={5}
            />
            <TestimonialCard 
              quote="The motorized shades were installed perfectly. Highly recommend Luna Drapes."
              author="Emily Parker"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
    </div>
  )
}

// Component for category cards
const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to="/shop" 
          className="text-[#0a1e2e] font-semibold hover:underline inline-flex items-center"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  )
}

// Component for feature cards
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Component for testimonial cards
const TestimonialCard = ({ quote, author, rating }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <p className="font-semibold">{author}</p>
    </div>
  )
}

export default Home