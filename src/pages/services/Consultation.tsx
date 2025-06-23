import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import consultationImage from '../../assets/Conslotion.png';

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
              url(${consultationImage}) center/cover no-repeat;
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

const ProcessGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  padding: 6rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProcessCard = styled(motion.div)`
  position: relative;
  padding: 0 2rem;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: #000;
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateX(10px);

    &::before {
      opacity: 1;
      width: 4px;
    }
  }
`;

const ProcessNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.03);
  position: absolute;
  top: -2rem;
  left: 0;
  line-height: 1;
  transition: all 0.3s ease;
`;

const ProcessTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #000;
  font-weight: normal;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: #000;
    transition: all 0.3s ease;
  }
`;

const ProcessDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #333;
  line-height: 1.8;
  position: relative;
  z-index: 1;
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

const Consultation: React.FC = () => {
  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We begin with a detailed discussion of your needs, preferences, and vision for your space.'
    },
    {
      title: 'Space Assessment',
      description: 'Our experts will evaluate your windows and provide recommendations for optimal solutions.'
    },
    {
      title: 'Design Selection',
      description: 'Choose from our curated collection of premium window treatments that match your style.'
    },
    {
      title: 'Custom Measurements',
      description: 'Precise measurements are taken to ensure a perfect fit for your windows.'
    },
    {
      title: 'Professional Installation',
      description: 'Our skilled team handles the installation with care and attention to detail.'
    },
    {
      title: 'Final Inspection',
      description: 'We conduct a thorough quality check to ensure your complete satisfaction.'
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
            to="/" 
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
              Back to home
          </BackLink>
          <Title variants={titleVariants}>Design Consultation</Title>
          <Description variants={descriptionVariants}>
            Experience our personalized design consultation service, where our experts guide you through the process of selecting the perfect window treatments for your space. We combine professional expertise with your unique style to create a solution that exceeds your expectations.
          </Description>
        </Container>
      </Header>

      <Container>
        <ProcessGrid variants={gridVariants}>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.title}
              variants={cardVariants}
              whileHover={{ x: 10 }}
            >
              <ProcessNumber>{index + 1}</ProcessNumber>
              <ProcessTitle>{step.title}</ProcessTitle>
              <ProcessDescription>{step.description}</ProcessDescription>
            </ProcessCard>
          ))}
        </ProcessGrid>

        <CTASection variants={ctaVariants}>
          <CTATitle>Start Your Design Journey</CTATitle>
          <CTADescription>
            Ready to transform your space? Schedule a consultation with our design experts today and take the first step towards creating your perfect window treatment solution.
          </CTADescription>
          <CTALink 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Consultation
          </CTALink>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default Consultation; 