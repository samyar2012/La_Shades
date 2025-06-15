import React, { useState } from 'react';
import { X } from 'lucide-react';
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
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: rollerShade,
      title: 'Modern Living Room',
      category: 'residential'
    },
    {
      id: 2,
      image: romanShade,
      title: 'Elegant Dining Area',
      category: 'residential'
    },
    {
      id: 3,
      image: cellularShade,
      title: 'Minimalist Bedroom',
      category: 'residential'
    },
    {
      id: 4,
      image: motorizedShade,
      title: 'Corporate Office',
      category: 'commercial'
    },
    {
      id: 5,
      image: wovenWood,
      title: 'Hotel Suite',
      category: 'commercial'
    },
    {
      id: 6,
      image: grassWeave,
      title: 'Cozy Kitchen',
      category: 'residential'
    },
    {
      id: 7,
      image: juteBlend,
      title: 'Restaurant Interior',
      category: 'commercial'
    },
    {
      id: 8,
      image: customDesign,
      title: 'Luxury Bathroom',
      category: 'residential'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' }
  ];
  
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-16 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our portfolio of stunning installations that have transformed spaces across residential and commercial properties.
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
            <div 
              key={item.id} 
              className="relative overflow-hidden group h-72 rounded-lg cursor-pointer"
              onClick={() => setModalImage(item.image)}
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
                  <p className="text-sm text-gray-200 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
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