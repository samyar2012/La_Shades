import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroIMG from '../../assets/Hero_Shade.png'
import rollerShadeImage from '../../assets/Classic_Roller.png';
import romanShadeImage from '../../assets/Modern_Roman.png';
import cellularShadeImage from '../../assets/Modern_celluar.png';
import motorizedShadeImage from '../../assets/Premium_motorized.png';

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
              url(${HeroIMG}) center/cover no-repeat;
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
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 1;
  z-index: 2;
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

const Shades: React.FC = () => {
  const collections = [
    {
      name: 'Roller Shades',
      description: 'Clean and modern roller shades that offer smooth operation and excellent light control.',
      image: rollerShadeImage,
      path: '/collections/shades/roller'
    },
    {
      name: 'Roman Shades',
      description: 'Elegant roman shades that combine classic style with modern functionality.',
      image: romanShadeImage,
      path: '/collections/shades/roman'
    },
    {
      name: 'Cellular Shades',
      description: 'Energy-efficient cellular shades that provide excellent insulation and light control.',
      image: cellularShadeImage,
      path: '/collections/shades/cellular'
    },
    {
      name: 'Motorized Shades',
      description: 'Smart motorized shades that offer convenience and modern living solutions.',
      image: motorizedShadeImage,
      path: '/collections/shades/motorized'
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

  const gridVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
            Discover our premium collection of window shades, designed to enhance your space with style, functionality, and comfort.
          </Description>
        </Container>
      </Header>

      <ProductsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Our Collection</SectionTitle>
            <SectionDivider />
            <SectionDescription>
              Explore our curated selection of premium window shades, each designed to bring elegance and functionality to your space.
            </SectionDescription>
          </SectionHeader>

          <ProductsGrid>
            {collections.map((collection) => (
              <ProductCard key={collection.name}>
                <ProductImage src={collection.image} alt={collection.name} />
                <ProductOverlay>
                  <ProductTitle>{collection.name}</ProductTitle>
                  <ProductDescription>{collection.description}</ProductDescription>
                  <ProductLink to="/quote-request">Request a Quote</ProductLink>
                </ProductOverlay>
              </ProductCard>
            ))}
          </ProductsGrid>

          <CTASection>
            <CTATitle>Ready to Transform Your Windows?</CTATitle>
            <CTADescription>
              Schedule a free consultation with our design experts and discover the perfect window treatments for your space.
            </CTADescription>
            <CTALink to="/contact">
              Schedule Free Consultation
            </CTALink>
          </CTASection>
        </Container>
      </ProductsSection>
    </PageContainer>
  );
};

export default Shades; 