import React, { useEffect, useRef } from 'react';
import { Star, CheckCircle, Trophy, Clock, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      number: "4.9/5",
      label: "Customer Rating"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      number: "12+",
      label: "Industry Awards"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "8,500+",
      label: "Projects Completed"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "15+",
      label: "Years of Excellence"
    }
  ];

  const services = [
    {
      title: "Custom Blinds",
      description: "Tailored solutions for every window style",
      image: "https://placehold.co/600x800/e9d5ff/1e293b?text=Custom+Blinds"
    },
    {
      title: "Designer Shades",
      description: "Modern designs for contemporary homes",
      image: "https://placehold.co/600x800/e9d5ff/1e293b?text=Designer+Shades"
    },
    {
      title: "Smart Solutions",
      description: "Automated window treatments for modern living",
      image: "https://placehold.co/600x800/e9d5ff/1e293b?text=Smart+Solutions"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/e9d5ff/1e293b?text=Luxury+Interior)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateY(0)',
            height: '120%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Crafting Perfect
                <span className="text-amber-400"> Light</span> & 
                <span className="text-amber-400"> Shade</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                For over 15 years, we've been transforming spaces with elegant window solutions that blend style, functionality, and innovation.
              </p>
              <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="bg-white py-16 -mt-20 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4 text-amber-500">
                  {achievement.icon}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Journey of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Luna Drapes began with a simple vision: to create perfect harmony between light and shade in every home. Today, we're proud to be Southern California's premier provider of custom window treatments.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedication to quality craftsmanship and exceptional service has earned us the trust of thousands of homeowners and numerous industry accolades.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="w-8 h-8 text-amber-500" />
                <p className="text-gray-900 font-medium">
                  Loved by 8,500+ happy customers
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/800x600/e9d5ff/1e293b?text=Luna+Drapes+Showroom" 
                alt="Luna Drapes Showroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <Sparkles className="w-8 h-8 mb-2" />
                <p className="text-2xl font-bold">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            Elevate Your Space
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/e9d5ff/1e293b?text=Luxury+Living)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Ready to Transform Your Windows?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Book a free consultation with our design experts and discover the perfect window treatments for your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/gallery"
              className="bg-white text-amber-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About; 