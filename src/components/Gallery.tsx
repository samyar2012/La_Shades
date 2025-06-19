import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import rollerShade from '../assets/photo_2025-06-01_20-53-17.jpg';
import romanShade from '../assets/photo_2025-06-01_20-53-12.jpg';
import cellularShade from '../assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg';
import motorizedShade from '../assets/moon-i87dB4Kd7nw-unsplash.jpg';
import wovenWood from '../assets/deconovo-JlHYZil96lQ-unsplash.jpg';
import grassWeave from '../assets/jon-tyson-SlpsgiZsSNk-unsplash.jpg';
import juteBlend from '../assets/photo_2025-06-01_20-53-29.jpg';
import customDesign from '../assets/photo_2025-06-01_20-53-26.jpg';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  additionalImages: string[];
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: rollerShade,
      title: 'Modern Roller Shade',
      category: 'residential',
      price: '$299.99',
      description: 'Elegant roller shades perfect for modern living spaces',
      features: [
        'Premium fabric construction',
        'Smooth operation system',
        'Custom sizing available',
        'Multiple color options'
      ],
      additionalImages: [romanShade, cellularShade, motorizedShade]
    },
    {
      id: 2,
      image: romanShade,
      title: 'Classic Roman Shade',
      category: 'residential',
      price: '$349.99',
      description: 'Timeless Roman shades that add sophistication to any room',
      features: [
        'Luxurious fabric options',
        'Custom pleat sizes',
        'Cordless operation available',
        'Perfect light control'
      ],
      additionalImages: [rollerShade, cellularShade, motorizedShade]
    },
    {
      id: 3,
      image: cellularShade,
      title: 'Energy-Efficient Cellular Shade',
      category: 'residential',
      price: '$399.99',
      description: 'Advanced cellular shades for optimal insulation and light control',
      features: [
        'Energy-saving design',
        'Multiple cell sizes',
        'Top-down/bottom-up operation',
        'Premium materials'
      ],
      additionalImages: [rollerShade, romanShade, motorizedShade]
    },
    {
      id: 4,
      image: motorizedShade,
      title: 'Smart Motorized Shade',
      category: 'commercial',
      price: '$599.99',
      description: 'State-of-the-art motorized shades for modern spaces',
      features: [
        'Smart home integration',
        'Remote control operation',
        'Battery or hardwired options',
        'Scheduled automation'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 5,
      image: wovenWood,
      title: 'Natural Woven Wood Shade',
      category: 'commercial',
      price: '$449.99',
      description: 'Eco-friendly woven wood shades for natural aesthetics',
      features: [
        'Sustainable materials',
        'Unique natural patterns',
        'UV protection',
        'Custom sizing'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 6,
      image: grassWeave,
      title: 'Grass Weave Shade',
      category: 'residential',
      price: '$379.99',
      description: 'Organic grass weave shades for a natural look',
      features: [
        'Natural materials',
        'Textured appearance',
        'Light filtering',
        'Eco-friendly'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 7,
      image: juteBlend,
      title: 'Jute Blend Shade',
      category: 'commercial',
      price: '$329.99',
      description: 'Durable jute blend shades for commercial spaces',
      features: [
        'Commercial-grade durability',
        'Natural fiber blend',
        'Easy maintenance',
        'Professional finish'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 8,
      image: customDesign,
      title: 'Custom Design Shade',
      category: 'residential',
      price: '$499.99',
      description: 'Bespoke window treatments tailored to your space',
      features: [
        'Custom design service',
        'Premium materials',
        'Expert consultation',
        'Perfect fit guarantee'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' }
  ];
  
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-16 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our collection of premium window treatments designed to enhance your space.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`mx-2 mb-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/product/${item.id}`}
              className="relative overflow-hidden group h-72 rounded-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{item.price}</p>
                  <p className="text-sm text-gray-200 capitalize">{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" onClick={() => setModalImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors duration-300">
            <X className="h-8 w-8" />
          </button>
          <img
            src={modalImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;