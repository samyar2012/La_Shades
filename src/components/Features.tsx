import React from 'react';
import { Clock, Award, PenTool } from 'lucide-react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Divider = styled(motion.div)`
  width: 4rem;
  height: 0.25rem;
  background: #b45309;
  margin: 1rem auto;
`;

const Description = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #b45309;
`;

const FeatureTitle = styled(motion.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  color: #4b5563;
  line-height: 1.6;
`;

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Fast Delivery',
      description: 'Custom-made blinds and curtains delivered to your door in as fast as 7 days.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Only the finest materials sourced from trusted suppliers worldwide.'
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Expert Installation',
      description: 'Professional installation by our team of certified technicians.'
    },
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

  const gridVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const sectionProps: HTMLMotionProps<"section"> = {
    id: "features",
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: containerVariants,
    style: { padding: '4rem 2rem', background: '#f8f9fa' }
  };

  return (
    <motion.section {...sectionProps}>
      <Container>
        <Header variants={headerVariants}>
          <Title>Why Choose Luna Drapes</Title>
          <Divider />
          <Description>
            We're committed to providing exceptional service and products that transform your living spaces.
          </Description>
        </Header>
        
        <FeaturesGrid variants={gridVariants}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <IconWrapper
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </motion.section>
  );
};

export default Features;