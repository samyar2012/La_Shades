import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import curtainsImage from '../../../assets/photo_2025-06-01_20-53-26.jpg';

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
              url(${curtainsImage}) center/cover no-repeat;
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

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-4px);
  }

  svg {
    margin-right: 0.5rem;
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  font-weight: normal;
`;

const FeatureDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
`;

const StylesSection = styled(motion.section)`
  padding: 4rem 0;
  background: white;
`;

const StylesTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  font-weight: normal;
`;

const StylesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
  padding: 1.5rem;
`;

const StyleName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: normal;
`;

const StyleDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const StyleLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #1a1a1a;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #1a1a1a;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const CTASection = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${curtainsImage}) center/cover no-repeat fixed;
  color: white;
`;

const CTATitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const CTADescription = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTALink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const DecorativeCurtains: React.FC = () => {
  const features = [
    {
      title: 'Artistic Designs',
      description: 'Our decorative curtains feature unique patterns and designs that add character to any space.'
    },
    {
      title: 'Premium Materials',
      description: 'Crafted from high-quality fabrics with intricate details and luxurious finishes.'
    },
    {
      title: 'Custom Patterns',
      description: 'Choose from a wide range of patterns or create your own custom design.'
    },
    {
      title: 'Versatile Style',
      description: 'Perfect for adding a decorative touch to any room in your home.'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Each curtain is carefully crafted with attention to detail and quality.'
    },
    {
      title: 'Easy Maintenance',
      description: 'Designed for easy cleaning while maintaining their beautiful appearance.'
    }
  ];

  const styles = [
    {
      name: 'Floral Patterns',
      description: 'Elegant floral designs that bring nature\'s beauty into your home.',
      image: curtainsImage,
      link: '/contact'
    },
    {
      name: 'Geometric Designs',
      description: 'Modern geometric patterns for a contemporary look.',
      image: curtainsImage,
      link: '/contact'
    },
    {
      name: 'Embroidered Details',
      description: 'Luxurious curtains with intricate embroidered patterns.',
      image: curtainsImage,
      link: '/contact'
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
          <BackLink to="/collections/curtains">
            <ArrowLeft size={20} />
            Back to Curtains
          </BackLink>
          <Title variants={titleVariants}>Decorative Curtains</Title>
          <Description variants={descriptionVariants}>
            Transform your space with our collection of decorative curtains, featuring unique patterns and luxurious designs.
          </Description>
        </Container>
      </Header>

      <Container>
        <FeaturesGrid variants={gridVariants}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <StylesSection>
          <Container>
            <StylesTitle>Our Styles</StylesTitle>
            <StylesGrid variants={gridVariants}>
              {styles.map((style) => (
                <StyleCard
                  key={style.name}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                >
                  <StyleImage src={style.image} alt={style.name} />
                  <StyleContent>
                    <StyleName>{style.name}</StyleName>
                    <StyleDescription>{style.description}</StyleDescription>
                    <StyleLink to={style.link}>Request Quote</StyleLink>
                  </StyleContent>
                </StyleCard>
              ))}
            </StylesGrid>
          </Container>
        </StylesSection>

        <CTASection>
          <Container>
            <CTATitle>Ready to Transform Your Space?</CTATitle>
            <CTADescription>
              Schedule a consultation with our design experts to find the perfect decorative curtains for your home.
            </CTADescription>
            <CTALink to="/contact">Schedule Consultation</CTALink>
          </Container>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default DecorativeCurtains; 