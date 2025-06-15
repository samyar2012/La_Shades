import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import blindsImage from '../../assets/photo_2025-06-01_20-53-29.jpg';
import curtainsImage from '../../assets/photo_2025-06-01_20-53-26.jpg';
import shadesImage from '../../assets/photo_2025-06-01_20-53-17.jpg';
import accessoriesImage from '../../assets/photo_2025-06-01_20-53-12.jpg';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Header = styled(motion.div)`
  position: relative;
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${blindsImage}) center/cover no-repeat;
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
  text-decoration: none;
  color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
  }
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  ${CollectionCard}:hover & {
    transform: scale(1.05);
  }
`;

const CollectionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
`;

const CollectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: normal;
`;

const CollectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CollectionLink = styled.span`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  ${CollectionCard}:hover &::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Collections: React.FC = () => {
  const collections = [
    {
      title: 'Blinds',
      description: 'Discover our premium collection of horizontal, vertical, panel, and mini blinds.',
      image: blindsImage,
      link: '/collections/blinds'
    },
    {
      title: 'Curtains',
      description: 'Explore our elegant selection of curtains and draperies for every style.',
      image: curtainsImage,
      link: '/collections/curtains'
    },
    {
      title: 'Shades',
      description: 'Browse our sophisticated range of roller, roman, cellular, and woven wood shades.',
      image: shadesImage,
      link: '/collections/shades'
    },
    {
      title: 'Accessories',
      description: 'Complete your window treatments with our selection of premium accessories.',
      image: accessoriesImage,
      link: '/collections/accessories'
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
          <Title variants={titleVariants}>Our Collections</Title>
          <Description variants={descriptionVariants}>
            Explore our premium selection of window treatments, from classic blinds to elegant curtains and sophisticated shades.
          </Description>
        </Container>
      </Header>

      <Container>
        <CollectionsGrid variants={gridVariants}>
          {collections.map((collection) => (
            <CollectionCard
              key={collection.title}
              to={collection.link}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <CollectionImage src={collection.image} alt={collection.title} />
              <CollectionOverlay>
                <CollectionTitle>{collection.title}</CollectionTitle>
                <CollectionDescription>{collection.description}</CollectionDescription>
                <CollectionLink>Explore Collection</CollectionLink>
              </CollectionOverlay>
            </CollectionCard>
          ))}
        </CollectionsGrid>
      </Container>
    </PageContainer>
  );
};

export default Collections; 