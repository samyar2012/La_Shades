import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import sheerDraperyImage from '../../../assets/photo_2025-06-01_21-25-59.jpg';
import modernSheerImage from '../../../assets/photo_2025-06-01_21-26-00.jpg';
import premiumSheerImage from '../../../assets/photo_2025-06-01_21-26-01.jpg';

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
              url(${sheerDraperyImage}) center/cover no-repeat;
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
  display: inline-block;
  color: #000;
  text-decoration: none;
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
    background-color: #000;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
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

const SheerDrapery: React.FC = () => {
  const features = [
    {
      title: 'Elegant Light Filtering',
      description: 'Our sheer drapery provides the perfect balance of privacy and natural light, creating a soft, diffused glow in any room.'
    },
    {
      title: 'Versatile Design',
      description: 'Available in a wide range of colors and textures, our sheer drapery complements any interior style from modern to traditional.'
    },
    {
      title: 'Premium Materials',
      description: 'Crafted from high-quality fabrics, our sheer drapery offers durability and beauty while maintaining its delicate appearance.'
    },
    {
      title: 'Easy Maintenance',
      description: 'Designed for easy cleaning and care, our sheer drapery maintains its beauty with minimal effort.'
    },
    {
      title: 'Custom Sizing',
      description: 'Perfect fit for any window with precise measurements and professional installation.'
    },
    {
      title: 'Energy Efficient',
      description: 'Help regulate room temperature and reduce energy costs throughout the year.'
    }
  ];

  const styles = [
    {
      name: 'Classic Sheer',
      description: 'Our Classic Sheer drapery provides timeless elegance with a soft, flowing appearance. Perfect for creating a light, airy atmosphere in any room.',
      image: sheerDraperyImage
    },
    {
      name: 'Modern Sheer',
      description: 'Experience contemporary style with our Modern Sheer drapery. These sophisticated window treatments offer enhanced light control and visual depth.',
      image: modernSheerImage
    },
    {
      name: 'Premium Sheer',
      description: 'Discover our Premium Sheer drapery, featuring high-quality materials and superior craftsmanship for the ultimate in style and performance.',
      image: premiumSheerImage
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
            to="/collections/drapery"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Drapery
          </BackLink>
          <Title variants={titleVariants}>Sheer Drapery</Title>
          <Description variants={descriptionVariants}>
            Experience the perfect blend of elegance and functionality with our premium sheer drapery. From classic to contemporary designs, find the ideal solution for your windows.
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

        <StylesSection variants={stylesVariants}>
          <StylesTitle>Our Sheer Drapery Styles</StylesTitle>
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
                    to={`/quote-request?type=drapery&model=${style.name}`}
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

        <CTASection variants={ctaVariants}>
          <CTATitle>Transform Your Windows</CTATitle>
          <CTADescription>
            Schedule a consultation with our design experts today and discover how our premium sheer drapery can enhance your space.
          </CTADescription>
          <CTALink 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </CTALink>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default SheerDrapery; 