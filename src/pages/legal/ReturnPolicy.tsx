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

const ReturnPolicy: React.FC = () => {
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
          <HeaderTitle>Return Policy</HeaderTitle>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Return Window</SectionTitle>
          <Text>
            We accept returns within 30 days of delivery for standard products. Custom orders are not eligible for returns unless they arrive damaged or defective.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Return Conditions</SectionTitle>
          <Text>
            To be eligible for a return, your item must be:
          </Text>
          <List>
            <ListItem>Unused and in the same condition that you received it</ListItem>
            <ListItem>In the original packaging</ListItem>
            <ListItem>Accompanied by the original receipt or proof of purchase</ListItem>
            <ListItem>Not a custom-made or special order item</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Return Process</SectionTitle>
          <Text>
            To initiate a return, please follow these steps:
          </Text>
          <List>
            <ListItem>Contact our customer service team to request a return authorization</ListItem>
            <ListItem>Package the item securely in its original packaging</ListItem>
            <ListItem>Include the return authorization number on the outside of the package</ListItem>
            <ListItem>Ship the item using a trackable shipping method</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Refunds</SectionTitle>
          <Text>
            Once we receive your return, we will inspect it and notify you of the status of your refund. If approved, your refund will be processed within 5-7 business days using your original payment method. Please note that shipping costs are non-refundable.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Damaged or Defective Items</SectionTitle>
          <Text>
            If you receive a damaged or defective item, please:
          </Text>
          <List>
            <ListItem>Document the damage with photos</ListItem>
            <ListItem>Contact us within 48 hours of delivery</ListItem>
            <ListItem>Keep all original packaging and materials</ListItem>
          </List>
          <Text>
            We will arrange for a replacement or refund at no additional cost to you.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Exchanges</SectionTitle>
          <Text>
            We offer exchanges for different sizes or colors of the same product, subject to availability. Please contact our customer service team to arrange an exchange.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Text>
            For any questions about our return policy, please contact us at:
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

export default ReturnPolicy; 