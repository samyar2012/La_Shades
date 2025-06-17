import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  position: relative;
  z-index: 1;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 8rem;
  color: #f59e0b;
  margin: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: #f59e0b;
  }

  @media (max-width: 640px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin: 2rem 0;
  font-weight: 500;
  position: relative;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  color: #4b5563;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const HomeButton = styled(motion(Link))`
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Description>
        <HomeButton
          to="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Return to Home</span>
        </HomeButton>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFound; 