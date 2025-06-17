import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import rollerShade from '../assets/photo_2025-06-01_21-25-51.jpg';
import romanShade from '../assets/photo_2025-06-01_21-25-53.jpg';
import cellularShade from '../assets/photo_2025-06-01_21-25-54.jpg';
import motorizedShade from '../assets/photo_2025-06-01_21-25-55.jpg';
import motorizedShade2 from '../assets/photo_2025-06-01_21-25-55 (2).jpg';
import elegantDrapes from '../assets/photo_2025-06-01_21-25-56.jpg';
import sheerCurtains from '../assets/photo_2025-06-01_21-25-57.jpg';
import sheerCurtains2 from '../assets/photo_2025-06-01_21-25-57 (2).jpg';
import blackoutCurtains from '../assets/photo_2025-06-01_21-25-58.jpg';
import wovenWood from '../assets/photo_2025-06-01_21-25-59.jpg';
import wovenWood2 from '../assets/photo_2025-06-01_21-25-59 (2).jpg';
import modernLiving from '../assets/photo_2025-06-01_21-26-00.jpg';
import modernLiving2 from '../assets/photo_2025-06-01_21-26-00 (2).jpg';
import luxurySuite from '../assets/photo_2025-06-01_21-26-01.jpg';
import officeSpace from '../assets/photo_2025-06-01_21-26-02.jpg';
import officeSpace2 from '../assets/photo_2025-06-01_21-26-02 (2).jpg';
import installation1 from '../assets/photo_2025-06-01_20-53-12.jpg';
import installation2 from '../assets/photo_2025-06-01_20-53-17.jpg';
import installation3 from '../assets/photo_2025-06-01_20-53-26.jpg';
import installation4 from '../assets/photo_2025-06-01_20-53-29.jpg';
import modernInterior from '../assets/mitchell-luo--_HeBmTRRmg-unsplash.jpg';
import elegantSpace from '../assets/anais-murith-u2kV8mqvdtc-unsplash.jpg';
import kimberleyInterior from '../assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg';
import moonInterior from '../assets/moon-i87dB4Kd7nw-unsplash.jpg';
import dimasInterior from '../assets/dimas-anggara-VIk1nwibgNE-unsplash.jpg';
import deconovoInterior from '../assets/deconovo-JlHYZil96lQ-unsplash.jpg';
import jonInterior from '../assets/jon-tyson-SlpsgiZsSNk-unsplash.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  background-color: #b45309;
  color: white;
  padding: 2rem 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #fef3c7;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductGallery = styled.div`
  position: relative;
`;

const MainImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.div`
  padding: 1rem 0;
`;

const ProductTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  color: #b45309;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #4b5563;

  svg {
    margin-right: 0.5rem;
    color: #b45309;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const PrimaryButton = styled.button`
  background-color: #b45309;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #92400e;
  }
`;

const SecondaryButton = styled.button`
  background-color: white;
  color: #b45309;
  padding: 1rem 2rem;
  border: 2px solid #b45309;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fef3c7;
  }
`;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const headerVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string>('');

  const getProductData = (productId: string) => {
    const products = {
      '1': {
        title: 'Modern Roller Shade',
        price: '$299.99',
        description: 'Elegant roller shades perfect for modern living spaces',
        features: [
          'Premium fabric construction',
          'Smooth operation system',
          'Custom sizing available',
          'Multiple color options'
        ],
        image: rollerShade,
        additionalImages: [romanShade, cellularShade, motorizedShade]
      },
      '2': {
        title: 'Classic Roman Shade',
        price: '$349.99',
        description: 'Timeless Roman shades that add sophistication to any room',
        features: [
          'Luxurious fabric options',
          'Custom pleat sizes',
          'Cordless operation available',
          'Perfect light control'
        ],
        image: romanShade,
        additionalImages: [rollerShade, cellularShade, motorizedShade]
      },
      '3': {
        title: 'Energy-Efficient Cellular Shade',
        price: '$399.99',
        description: 'Advanced cellular shades for optimal insulation and light control',
        features: [
          'Energy-saving design',
          'Multiple cell sizes',
          'Top-down/bottom-up operation',
          'Premium materials'
        ],
        image: cellularShade,
        additionalImages: [rollerShade, romanShade, motorizedShade]
      },
      '4': {
        title: 'Smart Motorized Shade',
        price: '$599.99',
        description: 'State-of-the-art motorized shades for modern spaces',
        features: [
          'Smart home integration',
          'Remote control operation',
          'Battery or hardwired options',
          'Scheduled automation'
        ],
        image: motorizedShade,
        additionalImages: [rollerShade, romanShade, cellularShade]
      },
      '5': {
        title: 'Smart Home Control',
        price: '$549.99',
        description: 'Advanced motorized shades with remote control',
        features: [
          'Smart home integration',
          'Remote control operation',
          'Battery or hardwired options',
          'Scheduled automation'
        ],
        image: motorizedShade2,
        additionalImages: [rollerShade, romanShade, cellularShade]
      },
      '6': {
        title: 'Elegant Dining Room',
        price: '$449.99',
        description: 'Floor-to-ceiling drapes creating a sophisticated atmosphere',
        features: [
          'Premium fabric selection',
          'Custom sizing',
          'Multiple pleat styles',
          'Lining options'
        ],
        image: elegantDrapes,
        additionalImages: [sheerCurtains, blackoutCurtains, wovenWood]
      },
      '7': {
        title: 'Restaurant Interior',
        price: '$299.99',
        description: 'Sheer curtains adding softness to a modern restaurant space',
        features: [
          'Light filtering',
          'Soft drape',
          'Multiple colors',
          'Easy care'
        ],
        image: sheerCurtains,
        additionalImages: [elegantDrapes, blackoutCurtains, wovenWood]
      },
      '8': {
        title: 'Modern Cafe',
        price: '$279.99',
        description: 'Contemporary sheer curtains for a cozy cafe atmosphere',
        features: [
          'Light filtering',
          'Soft drape',
          'Multiple colors',
          'Easy care'
        ],
        image: sheerCurtains2,
        additionalImages: [elegantDrapes, blackoutCurtains, wovenWood]
      },
      '9': {
        title: 'Home Theater',
        price: '$399.99',
        description: 'Blackout curtains for the perfect home theater experience',
        features: [
          '100% light blocking',
          'Energy efficient',
          'Noise reduction',
          'Multiple colors'
        ],
        image: blackoutCurtains,
        additionalImages: [elegantDrapes, sheerCurtains, wovenWood]
      },
      '10': {
        title: 'Natural Living Space',
        price: '$349.99',
        description: 'Woven wood shades bringing natural elements indoors',
        features: [
          'Natural materials',
          'Unique patterns',
          'Light filtering',
          'Custom sizing'
        ],
        image: wovenWood,
        additionalImages: [elegantDrapes, sheerCurtains, blackoutCurtains]
      },
      '11': {
        title: 'Organic Design',
        price: '$379.99',
        description: 'Natural woven wood shades for an organic aesthetic',
        features: [
          'Natural materials',
          'Unique patterns',
          'Light filtering',
          'Custom sizing'
        ],
        image: wovenWood2,
        additionalImages: [elegantDrapes, sheerCurtains, blackoutCurtains]
      },
      '12': {
        title: 'Modern Apartment',
        price: '$499.99',
        description: 'Contemporary window treatments in a modern apartment setting',
        features: [
          'Modern design',
          'Premium materials',
          'Custom sizing',
          'Professional installation'
        ],
        image: modernLiving,
        additionalImages: [modernLiving2, luxurySuite, officeSpace]
      },
      '13': {
        title: 'Corporate Space',
        price: '$799.99',
        description: 'Professional window treatments for corporate environments',
        features: [
          'Commercial-grade materials',
          'Light control',
          'Energy efficiency',
          'Professional installation'
        ],
        image: officeSpace,
        additionalImages: [modernLiving, luxurySuite, officeSpace2]
      },
      '14': {
        title: 'Professional Installation',
        price: 'Contact for Quote',
        description: 'Expert installation of custom window treatments',
        features: [
          'Expert installation',
          'Quality assurance',
          'Clean installation',
          'Post-installation support'
        ],
        image: installation1,
        additionalImages: [installation2, installation3, installation4]
      },
      '15': {
        title: 'Precision Fitting',
        price: 'Contact for Quote',
        description: 'Precise measurement and fitting of window treatments',
        features: [
          'Precise measurements',
          'Quality assurance',
          'Clean installation',
          'Post-installation support'
        ],
        image: installation2,
        additionalImages: [installation1, installation3, installation4]
      },
      '16': {
        title: 'Quality Installation',
        price: 'Contact for Quote',
        description: 'Professional installation ensuring perfect fit and function',
        features: [
          'Professional installation',
          'Quality assurance',
          'Clean installation',
          'Post-installation support'
        ],
        image: installation3,
        additionalImages: [installation1, installation2, installation4]
      },
      '17': {
        title: 'Expert Setup',
        price: 'Contact for Quote',
        description: 'Skilled installation of premium window treatments',
        features: [
          'Expert installation',
          'Quality assurance',
          'Clean installation',
          'Post-installation support'
        ],
        image: installation4,
        additionalImages: [installation1, installation2, installation3]
      },
      '18': {
        title: 'Modern Interior Design',
        price: 'View Only',
        description: 'Contemporary window treatment inspiration for modern homes',
        features: [
          'Design inspiration',
          'Modern aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: modernInterior,
        additionalImages: [elegantSpace, kimberleyInterior, moonInterior]
      },
      '19': {
        title: 'Elegant Living Space',
        price: 'View Only',
        description: 'Inspiration for elegant window treatment solutions',
        features: [
          'Design inspiration',
          'Elegant aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: elegantSpace,
        additionalImages: [modernInterior, kimberleyInterior, moonInterior]
      },
      '20': {
        title: 'Stylish Interior',
        price: 'View Only',
        description: 'Stylish window treatment ideas for modern interiors',
        features: [
          'Design inspiration',
          'Modern aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: kimberleyInterior,
        additionalImages: [modernInterior, elegantSpace, moonInterior]
      },
      '21': {
        title: 'Natural Light Design',
        price: 'View Only',
        description: 'Design inspiration for maximizing natural light',
        features: [
          'Design inspiration',
          'Light optimization',
          'Space planning',
          'Style guidance'
        ],
        image: moonInterior,
        additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
      },
      '22': {
        title: 'Contemporary Style',
        price: 'View Only',
        description: 'Contemporary window treatment inspiration',
        features: [
          'Design inspiration',
          'Contemporary aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: dimasInterior,
        additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
      },
      '23': {
        title: 'Modern Elegance',
        price: 'View Only',
        description: 'Elegant window treatment ideas for modern spaces',
        features: [
          'Design inspiration',
          'Modern aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: deconovoInterior,
        additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
      },
      '24': {
        title: 'Design Inspiration',
        price: 'View Only',
        description: 'Creative window treatment inspiration for your space',
        features: [
          'Design inspiration',
          'Creative aesthetics',
          'Space planning',
          'Style guidance'
        ],
        image: jonInterior,
        additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
      }
    };

    return products[productId as keyof typeof products] || products['1'];
  };

  const product = getProductData(id || '1');

  return (
    <PageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header variants={headerVariants}>
        <HeaderContent>
          <BackLink 
            to="/projects"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </BackLink>
        </HeaderContent>
      </Header>

      <ProductContainer>
        <ProductGallery>
          <MainImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.title} />
          </MainImage>
        </ProductGallery>

        <ProductInfo>
          <ProductTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {product.title}
          </ProductTitle>

          <ProductPrice
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {product.price}
          </ProductPrice>

          <ProductDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {product.description}
          </ProductDescription>

          <FeaturesList
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {product.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeaturesList>

          <ActionButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SecondaryButton
              as={Link}
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </SecondaryButton>
          </ActionButtons>
        </ProductInfo>
      </ProductContainer>
    </PageContainer>
  );
};

export default ProductDetail; 