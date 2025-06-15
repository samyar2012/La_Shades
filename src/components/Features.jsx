import React from 'react';
import styled from 'styled-components';
import { Clock, Award, PenTool as Tool } from 'lucide-react';

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: #333;
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
  font-weight: 300;
`;

const Feature = ({ icon, title, description }) => {
  return (
    <FeatureCard>
      <IconWrapper>{icon}</IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
};

const Features = () => {
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
      icon: <Tool className="h-6 w-6" />,
      title: 'Expert Installation',
      description: 'Professional installation by our team of professionals.'
    },
  ];

  return (
    <FeaturesSection id="features">
      <Container>
        <SectionTitle>Why Choose Luna Shades</SectionTitle>
        <SectionSubtitle>
          We're committed to providing exceptional service and products that transform your living spaces.
        </SectionSubtitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;