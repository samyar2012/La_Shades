import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: #ffffff;
`;

const Header = styled(motion.div)`
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  padding: 6rem 2rem 4rem;
  color: #1a1a1a;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackLink = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  color: #4b5563;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  
  &:hover {
    color: #b45309;
  }
`;

const HeaderTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const PrivacyPolicy: React.FC = () => {
  return (
    <PageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header>
        <HeaderContent>
          <BackLink 
            to="/"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </BackLink>
          <HeaderTitle>Privacy Policy</HeaderTitle>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Text>
            At La Shades, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <Text>We collect information that you provide directly to us, including:</Text>
          <List>
            <ListItem>Name and contact information</ListItem>
            <ListItem>Billing and shipping address</ListItem>
            <ListItem>Payment information</ListItem>
            <ListItem>Order history</ListItem>
            <ListItem>Communication preferences</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <Text>We use the information we collect to:</Text>
          <List>
            <ListItem>Process and fulfill your orders</ListItem>
            <ListItem>Communicate with you about your orders</ListItem>
            <ListItem>Send you marketing communications (with your consent)</ListItem>
            <ListItem>Improve our website and services</ListItem>
            <ListItem>Comply with legal obligations</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Information Sharing</SectionTitle>
          <Text>
            We do not sell or rent your personal information to third parties. We may share your information with:
          </Text>
          <List>
            <ListItem>Service providers who assist in our operations</ListItem>
            <ListItem>Payment processors for secure transactions</ListItem>
            <ListItem>Shipping partners to deliver your orders</ListItem>
            <ListItem>Legal authorities when required by law</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Your Rights</SectionTitle>
          <Text>You have the right to:</Text>
          <List>
            <ListItem>Access your personal information</ListItem>
            <ListItem>Correct inaccurate information</ListItem>
            <ListItem>Request deletion of your information</ListItem>
            <ListItem>Opt-out of marketing communications</ListItem>
            <ListItem>File a complaint with supervisory authorities</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Text>
            If you have any questions about this Privacy Policy or our practices, please contact us at:
          </Text>
          <Text>
            Email: LunaDrapes@gmail.com<br />
            Phone: (310) 467-5772
          </Text>
        </Section>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPolicy; 