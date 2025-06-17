import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import thermalDraperyImage from '../../../assets/photo_2025-06-01_21-26-02.jpg';
import modernThermalImage from '../../../assets/photo_2025-06-01_21-26-02 (2).jpg';
import premiumThermalImage from '../../../assets/photo_2025-06-01_21-26-01.jpg';

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
              url(${thermalDraperyImage}) center/cover no-repeat;
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

const HeroButton = styled(motion(Link))`
  display: inline-block;
  background: white;
  color: #333;
  padding: 1rem 2rem;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #666;
  line-height: 1.6;
`;

const StylesSection = styled(motion.div)`
  padding: 4rem 0;
`;

const StylesTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const StylesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StyleCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyleImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const StyleContent = styled.div`
  padding: 2rem;
`;

const StyleName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const StyleDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const RequestQuoteButton = styled(motion(Link))`
  display: inline-block;
  background: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  border-radius: 4px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #444;
  }
`;

const ThermalDrapery: React.FC = () => {
  const features = [
    {
      title: 'Energy Efficiency',
      description: 'Our thermal drapery features advanced insulation properties that help regulate room temperature and reduce energy costs.'
    },
    {
      title: 'Comfort Control',
      description: 'Experience optimal comfort with our thermal drapery that blocks drafts and maintains consistent room temperature.'
    },
    {
      title: 'UV Protection',
      description: 'Premium thermal drapery provides protection against harmful UV rays while maintaining natural light control.'
    }
  ];

  const styles = [
    {
      name: 'Classic Thermal',
      description: 'Our Classic Thermal drapery combines traditional elegance with modern insulation technology for optimal energy efficiency.',
      image: thermalDraperyImage
    },
    {
      name: 'Modern Thermal',
      description: 'Experience contemporary style with our Modern Thermal drapery. These sophisticated window treatments offer superior temperature control with sleek design.',
      image: modernThermalImage
    },
    {
      name: 'Premium Thermal',
      description: 'Discover our Premium Thermal drapery, featuring advanced insulation technology and luxurious materials for maximum energy efficiency.',
      image: premiumThermalImage
    }
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const headerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const gridVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const stylesGridVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
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
          <BackLink to="/collections/drapery" variants={titleVariants}>
            <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} />
            Back to Drapery
          </BackLink>
          <Title variants={titleVariants}>Thermal Drapery</Title>
          <Description variants={descriptionVariants}>
            Enhance your home's energy efficiency with our Thermal Drapery. 
            Experience optimal comfort and temperature control.
          </Description>
          <HeroButton
            to="/quote-request?type=drapery&model=Thermal Drapery"
            variants={descriptionVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </HeroButton>
        </Container>
      </Header>

      <Container>
        <FeaturesGrid variants={gridVariants}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} variants={cardVariants}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <StylesSection variants={stylesGridVariants}>
          <StylesTitle>Available Styles</StylesTitle>
          <StylesGrid>
            {styles.map((style) => (
              <StyleCard key={style.name} variants={cardVariants}>
                <StyleImage src={style.image} alt={style.name} />
                <StyleContent>
                  <StyleName>{style.name}</StyleName>
                  <StyleDescription>{style.description}</StyleDescription>
                  <RequestQuoteButton
                    to={`/quote-request?type=drapery&model=${encodeURIComponent(style.name)}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Quote
                  </RequestQuoteButton>
                </StyleContent>
              </StyleCard>
            ))}
          </StylesGrid>
        </StylesSection>
      </Container>
    </PageContainer>
  );
};

export default ThermalDrapery; 