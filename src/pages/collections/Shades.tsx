import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import rollerShade from '../../assets/photo_2025-06-01_21-25-59 (2).jpg';
import romanShade from '../../assets/photo_2025-06-01_21-26-00 (2).jpg';
import cellularShade from '../../assets/photo_2025-06-01_21-26-01.jpg';
import wovenWoodShade from '../../assets/photo_2025-06-01_21-26-02 (2).jpg';
import motorizedShade from '../../assets/moon-i87dB4Kd7nw-unsplash.jpg';

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
              url('/src/assets/justin-schuler-pY58mAGvGJo-unsplash.jpg') center/cover no-repeat;
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

const CollectionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CollectionCard = styled(motion(Link))`
  position: relative;
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
  }
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CollectionCard}:hover & {
    transform: scale(1.05);
  }
`;

const CollectionContent = styled.div`
  padding: 1.5rem;
  color: #000;
`;

const CollectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #000;
  font-weight: normal;
`;

const CollectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const CTASection = styled(motion.div)`
  text-align: center;
  margin: 8rem auto;
  max-width: 800px;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const CTADescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

const CTALink = styled(motion(Link))`
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
  
  &:hover {
    background-color: #000;
    color: white;
  }
`;

const Shades: React.FC = () => {
  const collections = [
    {
      name: 'Roller Shades',
      description: 'Modern and sleek roller shades that offer excellent light control and privacy. Perfect for contemporary spaces.',
      image: rollerShade,
      path: '/collections/shades/roller'
    },
    {
      name: 'Roman Shades',
      description: 'Elegant Roman shades that combine classic style with modern functionality. Ideal for creating a sophisticated look.',
      image: romanShade,
      path: '/collections/shades/roman'
    },
    {
      name: 'Cellular Shades',
      description: 'Energy-efficient cellular shades that provide excellent insulation and light control. Perfect for temperature regulation.',
      image: cellularShade,
      path: '/collections/shades/cellular'
    },
    {
      name: 'Woven Wood Shades',
      description: 'Natural woven wood shades that bring warmth and texture to your space. Perfect for creating an organic, earthy feel.',
      image: wovenWoodShade,
      path: '/collections/shades/woven-wood'
    },
    {
      name: 'Motorized Shades',
      description: 'Smart and convenient motorized shades that combine luxury with cutting-edge technology. Perfect for modern living.',
      image: motorizedShade,
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

  const ctaVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.6 }
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
          <Title variants={titleVariants}>Our Shades Collection</Title>
          <Description variants={descriptionVariants}>
            Discover our premium collection of window shades, designed to enhance your space with style, functionality, and comfort.
          </Description>
        </Container>
      </Header>

      <Container>
        <CollectionsGrid variants={gridVariants}>
          {collections.map((collection) => (
            <CollectionCard
              key={collection.name}
              to={collection.path}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CollectionImage src={collection.image} alt={collection.name} />
              <CollectionContent>
                <CollectionTitle>{collection.name}</CollectionTitle>
                <CollectionDescription>{collection.description}</CollectionDescription>
              </CollectionContent>
            </CollectionCard>
          ))}
        </CollectionsGrid>

        <CTASection variants={ctaVariants}>
          <CTATitle>Ready to Transform Your Windows?</CTATitle>
          <CTADescription>
            Schedule a free consultation with our design experts and discover the perfect window treatments for your space.
          </CTADescription>
          <CTALink 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </CTALink>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default Shades; 