import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import classicRoller from '../../../assets/photo_2025-06-01_20-53-29.jpg';
import solarRoller from '../../../assets/photo_2025-06-01_20-53-26.jpg';
import blackoutRoller from '../../../assets/photo_2025-06-01_20-53-17.jpg';

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
              url(${classicRoller}) center/cover no-repeat;
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

const RequestQuoteButton = styled(motion(Link))`
  font-family: 'Montserrat', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }
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
  text-decoration: none;
  
  &:hover {
    background-color: #000;
    color: white;
  }
`;

const HeroButton = styled(motion(Link))`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const RollerShades: React.FC = () => {
  const features = [
    {
      title: 'Sleek Design',
      description: 'Contemporary design with minimalist aesthetics for modern living spaces.'
    },
    {
      title: 'Advanced Operation',
      description: 'Smooth chain or spring mechanisms for effortless control of your shades.'
    },
    {
      title: 'Premium Materials',
      description: 'High-quality fabrics with extensive pattern options to match your style.'
    },
    {
      title: 'Versatile Style',
      description: 'Adaptable design that complements any interior style and window type.'
    },
    {
      title: 'Light Control',
      description: 'Multiple opacity levels for precise control of natural light in your space.'
    },
    {
      title: 'Custom Options',
      description: 'Tailored sizing and mounting solutions for your specific requirements.'
    }
  ];

  const styles = [
    {
      name: 'Classic Roller',
      description: 'Our Classic Roller shades offer timeless elegance with smooth operation and versatile design. Perfect for any room in your home.',
      image: classicRoller
    },
    {
      name: 'Solar Roller',
      description: 'Experience superior sun protection with our Solar Roller shades. These innovative window treatments filter harmful UV rays while maintaining your view.',
      image: solarRoller
    },
    {
      name: 'Blackout Roller',
      description: 'Create the perfect environment for rest and relaxation with our Blackout Roller shades. These premium window treatments provide complete light control and privacy.',
      image: blackoutRoller
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

  const stylesVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const styleCardVariants = {
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
          <BackLink 
            to="/collections/shades"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Shades
          </BackLink>
          <Title variants={titleVariants}>Roller Shades</Title>
          <Description variants={descriptionVariants}>
            Discover the perfect blend of style and functionality with our roller shades. 
            From classic designs to innovative solar and blackout options, find the ideal solution for your windows.
          </Description>
          <HeroButton
            to="/quote-request?type=shades&model=Roller Shades"
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

        <StylesSection variants={stylesVariants}>
          <StylesTitle>Available Styles</StylesTitle>
          <StylesGrid>
            {styles.map((style) => (
              <StyleCard
                key={style.name}
                variants={styleCardVariants}
                whileHover={{ y: -10 }}
              >
                <StyleImage src={style.image} alt={style.name} />
                <StyleContent>
                  <StyleName>{style.name}</StyleName>
                  <StyleDescription>{style.description}</StyleDescription>
                  <RequestQuoteButton
                    to={`/quote-request?type=shades&model=${encodeURIComponent(style.name)}`}
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

export default RollerShades; 