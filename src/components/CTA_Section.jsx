import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CTASection = styled(motion.section)`
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
  }
`;

const Video = styled(motion.video)`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background: #b45309;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #92400e;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const CTA_Section = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.3 }
    }
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.4 }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <CTASection
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <VideoBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Video 
          autoPlay 
          muted 
          loop 
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/src/assets/shades-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoBackground>
      <Container variants={contentVariants}>
        <Title variants={titleVariants}>Ready to Transform Your Windows?</Title>
        <Description variants={descriptionVariants}>
          Schedule a consultation with our experts or browse our collection to find the perfect window treatments for your home.
        </Description>
        <ButtonContainer>
          <PrimaryButton 
            to="/consultation"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Free Consultation
          </PrimaryButton>
          <SecondaryButton 
            to="/Projects"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Shop Collection
          </SecondaryButton>
        </ButtonContainer>
      </Container>
    </CTASection>
  )
}

export default CTA_Section