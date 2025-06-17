import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import fabricDraperyImage from '../../../assets/photo_2025-06-01_21-25-59.jpg';
import classicFabricImage from '../../../assets/photo_2025-06-01_21-26-00.jpg';
import modernFabricImage from '../../../assets/photo_2025-06-01_21-26-01.jpg';

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
              url(${fabricDraperyImage}) center/cover no-repeat;
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

const BackLink = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  color: white;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(-5px);
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

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: normal;
`;

const FeatureDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const StylesSection = styled(motion.div)`
  margin: 4rem 0;
`;

const StylesTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
`;

const StylesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyleCard = styled(motion.div)`
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
  }
`;

const StyleImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.3s ease;

  ${StyleCard}:hover & {
    transform: scale(1.05);
  }
`;

const StyleContent = styled.div`
  padding: 2rem;
`;

const StyleName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: normal;
`;

const StyleDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FabricDrapery: React.FC = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <BackLink to="/collections/drapery">
            <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} />
            Back to Drapery Collection
          </BackLink>
          <Title
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Fabric Drapery
          </Title>
          <Description
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover our exquisite collection of fabric drapery, where timeless elegance meets modern sophistication.
            Each piece is crafted with premium materials and attention to detail.
          </Description>
        </Container>
      </Header>

      <Container>
        <FeaturesGrid
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FeatureCard>
            <FeatureTitle>Premium Materials</FeatureTitle>
            <FeatureDescription>
              Our fabric drapery is crafted from the finest materials, ensuring durability and luxurious feel.
              Choose from a wide range of high-quality fabrics that suit your style and needs.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Custom Design</FeatureTitle>
            <FeatureDescription>
              Every piece of fabric drapery can be customized to your specifications.
              From fabric selection to pleat styles, create the perfect look for your space.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Expert Craftsmanship</FeatureTitle>
            <FeatureDescription>
              Our skilled artisans pay meticulous attention to detail, ensuring each drape
              is perfectly constructed and finished to the highest standards.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>

        <StylesSection
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <StylesTitle>Featured Styles</StylesTitle>
          <StylesGrid>
            <StyleCard>
              <StyleImage src={classicFabricImage} alt="Classic Fabric Drapery" />
              <StyleContent>
                <StyleName>Classic Elegance</StyleName>
                <StyleDescription>
                  Timeless designs that bring sophistication to any room. Perfect for traditional
                  and formal spaces, these drapes feature rich textures and elegant pleating.
                </StyleDescription>
              </StyleContent>
            </StyleCard>

            <StyleCard>
              <StyleImage src={modernFabricImage} alt="Modern Fabric Drapery" />
              <StyleContent>
                <StyleName>Modern Minimalist</StyleName>
                <StyleDescription>
                  Clean lines and contemporary designs for the modern home. These drapes
                  feature sleek silhouettes and innovative fabric treatments.
                </StyleDescription>
              </StyleContent>
            </StyleCard>
          </StylesGrid>
        </StylesSection>
      </Container>
    </PageContainer>
  );
};

export default FabricDrapery; 