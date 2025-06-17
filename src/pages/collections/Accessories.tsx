import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rod from '../../assets/photo_2025-06-01_21-25-55.jpg';
import finial from '../../assets/photo_2025-06-01_21-25-57.jpg';
import bracket from '../../assets/photo_2025-06-01_21-26-00.jpg';
import tieback from '../../assets/photo_2025-06-01_20-53-26.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Header = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('/src/assets/photo_2025-06-01_20-53-17.jpg') center/cover no-repeat;
  padding: 2rem;
  text-align: center;
  color: white;
  margin: 0;
`;

const Container = styled.div`
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

const Title = styled.h1`
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

const Description = styled.p`
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

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CollectionCard = styled(Link)`
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

const CTASection = styled.div`
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
  
  &:hover {
    background-color: #000;
    color: white;
  }
`;

const Accessories: React.FC = () => {
  const collections = [
    {
      name: 'Curtain Rods',
      description: 'Elegant curtain rods that provide the perfect foundation for your window treatments. Available in various styles and finishes.',
      image: rod,
      path: '/collections/accessories/curtain-rods'
    },
    {
      name: 'Finials',
      description: 'Decorative finials that add the perfect finishing touch to your curtain rods. Choose from a variety of designs and materials.',
      image: finial,
      path: '/collections/accessories/finials'
    },
    {
      name: 'Valances',
      description: 'Add the perfect finishing touch to your windows with our collection of premium valances. Our valances combine functionality with elegant design.',
      image: bracket,
      path: '/collections/accessories/valances'
    },
    {
      name: 'Tiebacks',
      description: 'Beautiful tiebacks that hold your curtains in place while adding a decorative element. Perfect for creating elegant window displays.',
      image: tieback,
      path: '/collections/accessories/tiebacks'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <Container>
          <Title>Our Accessories Collection</Title>
          <Description>
            Discover our premium collection of window treatment accessories, designed to enhance your space with style and functionality.
          </Description>
        </Container>
      </Header>

      <Container>
        <CollectionsGrid>
          {collections.map((collection) => (
            <CollectionCard key={collection.name} to={collection.path}>
              <CollectionImage src={collection.image} alt={collection.name} />
              <CollectionContent>
                <CollectionTitle>{collection.name}</CollectionTitle>
                <CollectionDescription>{collection.description}</CollectionDescription>
              </CollectionContent>
            </CollectionCard>
                  ))}
        </CollectionsGrid>

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
    </PageContainer>
  );
};

export default Accessories; 