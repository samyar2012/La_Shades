import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import sheerDraperyImage from '../../assets/photo_2025-06-01_21-26-01.jpg';
import blackoutDraperyImage from '../../assets/photo_2025-06-01_21-26-02.jpg';
import decorativeDraperyImage from '../../assets/photo_2025-06-01_21-26-02 (2).jpg';
import motorizedDraperyImage from '../../assets/photo_2025-06-01_20-53-26.jpg';
import fabricDraperyImage from '../../assets/photo_2025-06-01_21-25-59.jpg';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Header = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${sheerDraperyImage}) center/cover no-repeat;
  padding: 2rem;
  text-align: center;
  color: white;
  margin: 0;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1px;
  color: white;
  font-weight: normal;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
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

const ProductsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductsGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const ProductCard = styled.div`
  position: relative;
  height: 400px;
  width: 280px;
  flex-shrink: 0;
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

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &.prev {
    left: -20px;
  }

  &.next {
    right: -20px;
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
  }

  &.prev::before {
    transform: rotate(-135deg);
    margin-left: 4px;
  }

  &.next::before {
    transform: rotate(45deg);
    margin-right: 4px;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin: 8rem auto 4rem;
  max-width: 800px;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
  border-radius: 8px;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const CTADescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

const CTALink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  
  &:hover {
    background-color: #000;
    color: white;
  }
`;

const Drapery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280 + 24; // card width + gap
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const products = [
    {
      id: 1,
      title: 'Sheer Drapery',
      description: 'Light and airy window treatments that provide privacy while maintaining natural light.',
      image: sheerDraperyImage,
      link: '/collections/drapery/sheer'
    },
    {
      id: 2,
      title: 'Blackout Drapery',
      description: 'Complete light control and privacy with our premium blackout drapery collection.',
      image: blackoutDraperyImage,
      link: '/collections/drapery/blackout'
    },
    {
      id: 3,
      title: 'Decorative Drapery',
      description: 'Elegant and stylish drapery designs that add sophistication to any room.',
      image: decorativeDraperyImage,
      link: '/collections/drapery/decorative'
    },
    {
      id: 4,
      title: 'Motorized Drapery',
      description: 'Smart and convenient drapery solutions with automated control systems.',
      image: motorizedDraperyImage,
      link: '/collections/drapery/motorized'
    },
    {
      id: 5,
      title: 'Fabric Drapery',
      description: 'Luxurious fabric drapery options that combine style and functionality for your windows.',
      image: fabricDraperyImage,
      link: '/collections/drapery/fabric'
    }
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const headerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <PageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header variants={headerVariants}>
        <Container>
          <Title variants={titleVariants}>Our Collection</Title>
          <Description variants={descriptionVariants}>
            Discover our premium collection of drapery treatments, designed to enhance your space with elegance and sophistication.
          </Description>
        </Container>
      </Header>

      <ProductsSection>
        <Container>
          <ProductsContainer>
            <NavigationButton className="prev" onClick={() => scroll('left')} />
            <ProductsGrid ref={scrollRef}>
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
            <NavigationButton className="next" onClick={() => scroll('right')} />
          </ProductsContainer>

          <CTASection>
            <CTATitle>Ready to Transform Your Windows?</CTATitle>
            <CTADescription>
              Schedule a free consultation with our design experts and discover the perfect window treatments for your space.
            </CTADescription>
            <CTALink to="/contact">Schedule Free Consultation</CTALink>
          </CTASection>
        </Container>
      </ProductsSection>
    </PageContainer>
  );
};

export default Drapery; 