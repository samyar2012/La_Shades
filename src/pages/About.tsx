import React, { useEffect } from 'react';
import { Star, Users, Award, Heart, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import aboutImage1 from '../assets/Quality_Craftsmanship.jpg';
import aboutImage2 from '../assets/Customer_Satisfaction.jpg';
import aboutImage3 from '../assets/Innovation.jpg';
import heroImage from '../assets/anais-murith-u2kV8mqvdtc-unsplash.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const HeroSection = styled.div`
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
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
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

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled.a`
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
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const SecondaryButton = styled.a`
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
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StatsSection = styled.div`
  max-width: 1200px;
  margin: -4rem auto 0;
  padding: 0 1rem;
  position: relative;
  z-index: 2;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: scale(1.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);

  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const StatIcon = styled.div`
  color: white;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Montserrat', sans-serif;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1rem;

  @media (min-width: 640px) {
    padding: 6rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
  color: #333;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #333;
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ValueItem = styled.div<{ isReversed?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: ${props => props.isReversed ? 'row-reverse' : 'row'};
  }
`;

const ValueImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
  border: 1px solid rgba(245, 158, 11, 0.1);

  &:hover {
    transform: scale(1.05);
    border-color: rgba(245, 158, 11, 0.2);
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const ValueContent = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const ValueTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.875rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
`;

const ServicesSection = styled(Section)`
  background: rgba(0, 0, 0, 0.02);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-0.5rem);
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  color: #333;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #666;
  line-height: 1.6;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProcessCard = styled.div`
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const ProcessContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.1);

  &:hover {
    border-color: rgba(245, 158, 11, 0.2);
  }
`;

const ProcessStep = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const ProcessTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #666;
  line-height: 1.6;
`;

const ProcessConnector = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 2rem;
    height: 2px;
    background: #333;
  }
`;

const CTASection = styled.div`
  background: #333;
  color: white;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const CTADescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  color: #333;
  border-radius: 0.375rem;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);



  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We take pride in delivering the highest quality window treatments, crafted with precision and attention to detail.',
      image: aboutImage1
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality.',
      image: aboutImage2
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of trends and technology to offer you the latest in window treatment solutions.',
      image: aboutImage3
    }
  ];

  const services = [
    {
      title: 'Custom Design',
      description: 'Our expert designers work with you to create the perfect window treatment solution for your space.',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: 'Professional Installation',
      description: 'Our skilled technicians ensure your window treatments are installed perfectly and efficiently.',
      icon: <CheckCircle2 className="h-8 w-8" />
    },
    {
      title: 'Quality Guarantee',
      description: 'We stand behind our products with a comprehensive warranty and satisfaction guarantee.',
      icon: <ShieldCheck className="h-8 w-8" />
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Schedule a free consultation with our design experts to discuss your needs and preferences.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers will create a custom solution tailored to your space and style.'
    },
    {
      step: '03',
      title: 'Production',
      description: 'Your window treatments are crafted with precision using premium materials.'
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Our professional installers ensure perfect placement and functionality.'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <div data-aos="fade-up" data-aos-delay="200">
            <HeroTitle data-aos="fade-up" data-aos-delay="400">
              Crafting Elegance in Every Window
            </HeroTitle>
            <HeroDescription data-aos="fade-up" data-aos-delay="600">
            Luna Drapes is dedicated to enhancing your living spaces with our premium window treatments, combining timeless elegance and practical functionality to create the perfect ambiance for homes nationwide.
            </HeroDescription>
            <ButtonGroup data-aos="fade-up" data-aos-delay="800">
              <PrimaryButton href="/contact">
                Schedule Consultation
              </PrimaryButton>
              <SecondaryButton href="/collections">
                View Collections
              </SecondaryButton>
            </ButtonGroup>
          </div>
        </HeroContent>
      </HeroSection>



      <Section>
        <SectionTitle data-aos="fade-up">Our Values</SectionTitle>
        <ValuesContainer>
          {values.map((value, index) => (
            <ValueItem
              key={value.title}
              isReversed={index % 2 !== 0}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 200}
            >
              <ValueImage src={value.image} alt={value.title} />
              <ValueContent>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueContent>
            </ValueItem>
          ))}
        </ValuesContainer>
      </Section>

      <ServicesSection>
        <SectionTitle data-aos="fade-up">Our Services</SectionTitle>
        <ServicesGrid>
            {services.map((service, index) => (
            <ServiceCard
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
            ))}
        </ServicesGrid>
      </ServicesSection>

      <Section>
        <SectionTitle data-aos="fade-up">Our Process</SectionTitle>
        <ProcessGrid>
          {process.map((step, index) => (
            <ProcessCard
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <ProcessContent>
                <ProcessStep>{step.step}</ProcessStep>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.description}</ProcessDescription>
              </ProcessContent>
              {step.step !== '04' && <ProcessConnector />}
            </ProcessCard>
          ))}
        </ProcessGrid>
      </Section>

      <CTASection>
        <CTAContainer>
          <CTATitle data-aos="fade-up">
            Ready to Transform Your Space?
          </CTATitle>
          <CTADescription data-aos="fade-up" data-aos-delay="200">
            Schedule a free consultation with our design experts and discover how we can enhance your home.
          </CTADescription>
          <CTAButton
            href="/contact"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Schedule Free Consultation
          </CTAButton>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default About; 