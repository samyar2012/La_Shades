import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';
import customDesign from '../assets/Custom-desgin.png';
import installation from '../assets/proffesinal-instalation.png';
import consultation from '../assets/Conslotion.png';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;  
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDivider = styled(motion.div)`
  width: 4rem;
  height: 2px;
  background: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
`;

const SectionDescription = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 px 4px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
`;

const ServiceImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ServiceOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 1;
  z-index: 2;
`;

const ServiceTitle = styled(motion.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);
`;

const ServiceDescription = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.10);
`;

const ServiceLink = styled(motion(Link))`
  font-family: 'Montserrat', sans-serif;
  background: white;
  color: #333;
  padding: 0.75rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(0);
    }
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Design',
      description: 'Transform your space with our bespoke window treatment designs, tailored to your unique style and requirements.',
      image: customDesign,
      link: '/services/custom-design'
    },
    {
      id: 2,
      title: 'Professional Installation',
      description: 'Experience flawless installation of your window treatments by our certified professionals.',
      image: installation,
      link: '/services/installation'
    },
    {
      id: 3,
      title: 'Consultation & Measurement',
      description: 'Get expert guidance and precise measurements for your window treatments, ensuring a perfect fit and optimal design.',
      image: consultation,
      link: '/services/consultation'
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const headerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.4 }
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

  const sectionProps: HTMLMotionProps<"section"> = {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: containerVariants
  };

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader variants={headerVariants}>
          <SectionTitle variants={titleVariants}>Our Services</SectionTitle>
          <SectionDivider />
          <SectionDescription variants={subtitleVariants}>
            Experience our comprehensive range of services, from custom design to professional installation.
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid variants={gridVariants}>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage 
                src={service.image} 
                alt={service.title}
              />
              <ServiceOverlay>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink 
                  to={service.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </ServiceLink>
              </ServiceOverlay>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;