import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AccessoriesImg from '../../assets/Acsessori_img (2).jpg';
import AccessoriesImg2 from '../../assets/Acsessori_img (3).jpg';
import AccessoriesImg3 from '../../assets/Acsessori_img (5).jpg';
import AccessoriesImg4 from '../../assets/Acsessori_img.jpg';
import heroImage from '../../assets/Acsessori_img_Hero.jpg';

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
              url(${heroImage}) center/cover no-repeat;
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

const AccessoriesSection = styled(motion.div)`
  margin: 4rem 0;
`;

const AccessoriesTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
`;

const AccessoriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AccessoryCard = styled(motion.div)`
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

const AccessoryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.3s ease;

  ${AccessoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const AccessoryContent = styled.div`
  padding: 2rem;
`;

const AccessoryName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: normal;
`;

const AccessoryDescription = styled.p`
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

const Accessories: React.FC = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'All our accessories are crafted from the finest materials, ensuring durability and lasting beauty for your window treatments.'
    },
    {
      title: 'Versatile Design',
      description: 'Our accessories complement any interior style, from classic to contemporary, providing the perfect finishing touch.'
    },
    {
      title: 'Easy Installation',
      description: 'Designed for simple installation, our accessories come with all necessary hardware and detailed instructions.'
    },
    {
      title: 'Custom Options',
      description: 'Available in various finishes, sizes, and styles to perfectly match your existing décor and window treatments.'
    },
    {
      title: 'Professional Finish',
      description: 'Add a polished, professional look to your windows with our carefully selected collection of accessories.'
    },
    {
      title: 'Long-lasting Beauty',
      description: 'Built to withstand daily use while maintaining their elegant appearance for years to come.'
    }
  ];

  const accessories = [
    {
      name: 'Curtain Rods',
      description: 'Elegant curtain rods that provide the perfect foundation for your window treatments. Available in various styles and finishes including classic, modern, and decorative designs. Our rods are crafted from premium materials and come in multiple diameters to accommodate different curtain weights.',
      image: AccessoriesImg
    },
    {
      name: 'Finials',
      description: 'Decorative finials that add the perfect finishing touch to your curtain rods. Choose from a variety of designs including classic, contemporary, and ornate styles. Available in materials like brass, nickel, bronze, and wood to complement any décor.',
      image: AccessoriesImg2
    },
    {
      name: 'Valances',
      description: 'Add the perfect finishing touch to your windows with our collection of premium valances. Our valances combine functionality with elegant design, helping to conceal hardware while adding visual interest. Available in various styles and fabrics.',
      image: AccessoriesImg3
    },
    {
      name: 'Tiebacks',
      description: 'Beautiful tiebacks that hold your curtains in place while adding a decorative element. Perfect for creating elegant window displays and allowing natural light to flow into your space. Available in fabric, metal, and decorative designs.',
      image: AccessoriesImg4
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

  const accessoriesVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const accessoryCardVariants = {
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
            to="/collections"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Collections
          </BackLink>
          <Title variants={titleVariants}>Window Treatment Accessories</Title>
          <Description variants={descriptionVariants}>
            Complete your window treatments with our premium collection of accessories. From elegant curtain rods to decorative finials, find everything you need to create the perfect finishing touch.
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

        <AccessoriesSection variants={accessoriesVariants}>
          <AccessoriesTitle>Our Accessories Collection</AccessoriesTitle>
          <AccessoriesGrid>
            {accessories.map((accessory) => (
              <AccessoryCard
                key={accessory.name}
                variants={accessoryCardVariants}
                whileHover={{ y: -10 }}
              >
                <AccessoryImage src={accessory.image} alt={accessory.name} />
                <AccessoryContent>
                  <AccessoryName>{accessory.name}</AccessoryName>
                  <AccessoryDescription>{accessory.description}</AccessoryDescription>
                  <RequestQuoteButton
                    to={`/quote-request?type=accessories&model=${accessory.name}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Quote
                  </RequestQuoteButton>
                </AccessoryContent>
              </AccessoryCard>
            ))}
          </AccessoriesGrid>
        </AccessoriesSection>

        <CTASection variants={ctaVariants}>
          <CTATitle>Complete Your Window Treatment</CTATitle>
          <CTADescription>
            Schedule a consultation with our design experts today and discover how our premium accessories can enhance your window treatments.
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

export default Accessories; 