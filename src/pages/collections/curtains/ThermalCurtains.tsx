import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import curtainsImage from '../../../assets/11.jpg';
import classicThermalImage from '../../../assets/12.jpg';
import modernThermalImage from '../../../assets/13.jpg';
import luxuryThermalImage from '../../../assets/14.jpg';

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

const ThermalCurtains: React.FC = () => {
  const features = [
    {
      title: 'Energy Efficiency',
      description: 'Our thermal curtains help regulate room temperature by blocking heat transfer through windows.'
    },
    {
      title: 'Premium Insulation',
      description: 'Multiple layers of specialized fabric provide superior thermal protection and energy savings.'
    },
    {
      title: 'UV Protection',
      description: 'Built-in UV blocking technology helps protect your furniture and flooring from sun damage.'
    },
    {
      title: 'Noise Reduction',
      description: 'The dense fabric construction helps reduce outside noise for a more peaceful environment.'
    },
    {
      title: 'Custom Sizing',
      description: 'Available in various sizes to perfectly fit your windows and maximize energy efficiency.'
    },
    {
      title: 'Easy Maintenance',
      description: 'Machine washable and wrinkle-resistant fabrics make cleaning and care simple.'
    }
  ];

  const styles = [
    {
      name: 'Classic Thermal',
      description: 'Traditional designs with superior insulation properties and elegant styling.',
      image: classicThermalImage,
      link: '/contact'
    },
    {
      name: 'Modern Thermal',
      description: 'Contemporary styles with clean lines and advanced thermal technology.',
      image: modernThermalImage,
      link: '/contact'
    },
    {
      name: 'Luxury Thermal',
      description: 'Premium designs combining thermal efficiency with sophisticated aesthetics.',
      image: luxuryThermalImage,
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
          <Title variants={titleVariants}>Thermal Curtains</Title>
          <Description variants={descriptionVariants}>
            Experience the perfect blend of style and functionality with our premium thermal curtains. 
            Designed with advanced insulation technology, our thermal curtains help regulate room 
            temperature while reducing energy costs. The multi-layered construction provides superior 
            thermal protection, UV blocking, and noise reduction, all while maintaining elegant aesthetics 
            that complement any decor.
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
            <CTATitle>Ready to Save Energy?</CTATitle>
            <CTADescription>
              Schedule a consultation with our design experts to find the perfect thermal curtains for your home.
            </CTADescription>
            <CTALink to="/contact">Schedule Consultation</CTALink>
          </Container>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default ThermalCurtains; 