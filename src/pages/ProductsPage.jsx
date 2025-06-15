import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      name: 'Blinds',
      description: 'Premium window blinds for every style and need',
      image: '/src/assets/photo_2025-06-01_20-53-17.jpg',
      link: '/collections/blinds'
    },
    {
      name: 'Curtains',
      description: 'Elegant curtains and drapes to transform your space',
      image: '/src/assets/photo_2025-06-01_20-53-12.jpg',
      link: '/collections/curtains'
    },
    {
      name: 'Shades',
      description: 'Modern window shades for contemporary living',
      image: '/src/assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg',
      link: '/collections/shades'
    },
    {
      name: 'Accessories',
      description: 'Complete your window treatments with our premium accessories',
      image: '/src/assets/photo_2025-06-01_21-25-46.jpg',
      link: '/collections/accessories'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-amber-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-amber-100 hover:text-white mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Our Products
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Discover our comprehensive collection of premium window treatments, designed to enhance your space with style and functionality.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative h-[400px] overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{category.name}</h3>
                <p className="text-amber-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Why Choose Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">Crafted from the finest materials, our products are built to last and maintain their beauty.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-600">Every product can be customized to fit your specific needs and preferences.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-serif font-bold mb-3">Expert Installation</h3>
              <p className="text-gray-600">Professional installation services ensure perfect fit and optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 