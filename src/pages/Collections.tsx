import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blindsImage from '../assets/photo_2025-06-01_21-25-55.jpg';
import curtainsImage from '../assets/photo_2025-06-01_21-25-56.jpg';
import draperyImage from '../assets/photo_2025-06-01_21-25-57.jpg';
import shadesImage from '../assets/photo_2025-06-01_21-25-58.jpg';
import accessoriesImage from '../assets/photo_2025-06-01_21-25-59.jpg';

const CollectionsContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${draperyImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CollectionsGrid = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CollectionCard = styled(Link)`
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CollectionOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: background 0.3s ease;
`;

const CollectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const CollectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 1.6;
`;

const Collections: React.FC = () => {
  const collections = [
    {
      id: 1,
      title: 'Blinds',
      description: 'Discover our premium selection of blinds, offering both style and functionality.',
      image: blindsImage,
      link: '/collections/blinds'
    },
    {
      id: 2,
      title: 'Curtains',
      description: 'Elegant and versatile curtains to enhance your living spaces.',
      image: curtainsImage,
      link: '/collections/curtains'
    },
    {
      id: 3,
      title: 'Drapery',
      description: 'Luxurious drapery solutions for a sophisticated window treatment.',
      image: draperyImage,
      link: '/collections/drapery'
    },
    {
      id: 4,
      title: 'Shades',
      description: 'Modern and stylish shades for perfect light control and privacy.',
      image: shadesImage,
      link: '/collections/shades'
    },
    {
      id: 5,
      title: 'Accessories',
      description: 'Complete your window treatments with our selection of premium accessories.',
      image: accessoriesImage,
      link: '/collections/accessories'
    }
  ];

  return (
    <CollectionsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our Collections</HeroTitle>
          <HeroDescription>
            Explore our comprehensive range of window treatments, each designed to bring elegance and functionality to your space.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <CollectionsGrid>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} to={collection.link}>
            <CollectionImage src={collection.image} alt={collection.title} />
            <CollectionOverlay className="overlay">
              <CollectionTitle>{collection.title}</CollectionTitle>
              <CollectionDescription>{collection.description}</CollectionDescription>
            </CollectionOverlay>
          </CollectionCard>
        ))}
      </CollectionsGrid>
    </CollectionsContainer>
  );
};

export default Collections; 