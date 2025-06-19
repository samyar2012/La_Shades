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

const ShippingPolicy: React.FC = () => {
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
          <HeaderTitle>Shipping Policy</HeaderTitle>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Shipping Methods</SectionTitle>
          <Text>
            We offer several shipping options to ensure your window treatments arrive safely and on time:
          </Text>
          <List>
            <ListItem>Standard Shipping (5-7 business days)</ListItem>
            <ListItem>Express Shipping (2-3 business days)</ListItem>
            <ListItem>White Glove Delivery (for custom orders)</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Processing Time</SectionTitle>
          <Text>
            All orders are processed within 1-2 business days after receiving your order confirmation. Custom orders may require additional processing time, which will be communicated during the ordering process.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Shipping Costs</SectionTitle>
          <Text>
            Shipping costs are calculated based on the following factors:
          </Text>
          <List>
            <ListItem>Product weight and dimensions</ListItem>
            <ListItem>Shipping destination</ListItem>
            <ListItem>Selected shipping method</ListItem>
            <ListItem>Special handling requirements</ListItem>
          </List>
          <Text>
            Free shipping is available for orders over $500 within the continental United States.
          </Text>
        </Section>

        <Section>
          <SectionTitle>International Shipping</SectionTitle>
          <Text>
            We currently ship to the following countries:
          </Text>
          <List>
            <ListItem>United States (including Alaska and Hawaii)</ListItem>
            <ListItem>Canada</ListItem>
            <ListItem>Mexico</ListItem>
          </List>
          <Text>
            International shipping rates and delivery times vary by destination. Additional customs fees and import duties may apply and are the responsibility of the recipient.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Order Tracking</SectionTitle>
          <Text>
            Once your order ships, you will receive a tracking number via email. You can track your order's status through our website or the carrier's tracking system.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Delivery Issues</SectionTitle>
          <Text>
            If you experience any issues with your delivery, please contact our customer service team within 48 hours of the delivery date. We will work with the shipping carrier to resolve any problems.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Text>
            For any questions about our shipping policy, please contact us at:
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

export default ShippingPolicy; 