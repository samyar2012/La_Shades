import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rollerShade from '../assets/photo_2025-06-01_20-53-17.jpg';
import romanShade from '../assets/photo_2025-06-01_20-53-12.jpg';
import cellularShade from '../assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg';
import motorizedShade from '../assets/photo_2025-06-01_20-53-26.jpg';

const ProductsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDivider = styled.div`
  width: 4rem;
  height: 2px;
  background: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
`;

const SectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  
  ${ProductCard}:hover & {
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }
`;

const ProductTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-weight: 300;
`;

const ProductLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  background: white;
  color: #333;
  padding: 0.75rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(0);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Shades',
      description: 'Versatile window coverings that offer both style and functionality for any space.',
      image: rollerShade,
      link: '/collections/shades'
    },
    {
      id: 2,
      title: 'Blinds',
      description: 'Classic window treatments that provide precise light control and timeless appeal.',
      image: romanShade,
      link: '/collections/blinds'
    },
    {
      id: 3,
      title: 'Drapery',
      description: 'Luxurious fabric window treatments that add elegance and sophistication to your home.',
      image: cellularShade,
      link: '/collections/drapery'
    },
    {
      id: 4,
      title: 'Motorized Shades',
      description: 'Smart window treatments that offer convenience and modern living solutions.',
      image: motorizedShade,
      link: '/collections/shades/motorized'
    }
  ];

  return (
    <ProductsSection id="products">
      <Container>
        <SectionHeader>
          <SectionTitle>Our Collection</SectionTitle>
          <SectionDivider />
          <SectionDescription>
            Discover our premium selection of window treatments designed to enhance your living space.
          </SectionDescription>
        </SectionHeader>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductOverlay>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductLink to={product.link}>Learn More</ProductLink>
              </ProductOverlay>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ProductsSection>
  );
};

export default Products;