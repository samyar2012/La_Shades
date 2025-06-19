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

const TermsOfService: React.FC = () => {
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
          <HeaderTitle>Terms of Service</HeaderTitle>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Agreement to Terms</SectionTitle>
          <Text>
            By accessing and using La Shades' website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Use License</SectionTitle>
          <Text>
            Permission is granted to temporarily access the materials (information or software) on La Shades' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </Text>
          <List>
            <ListItem>Modify or copy the materials</ListItem>
            <ListItem>Use the materials for any commercial purpose</ListItem>
            <ListItem>Attempt to decompile or reverse engineer any software contained on the website</ListItem>
            <ListItem>Remove any copyright or other proprietary notations from the materials</ListItem>
            <ListItem>Transfer the materials to another person or "mirror" the materials on any other server</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Product Information</SectionTitle>
          <Text>
            We strive to display our products as accurately as possible. However, we cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right to discontinue any product at any time.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Pricing and Payment</SectionTitle>
          <Text>
            All prices are subject to change without notice. We reserve the right to modify or discontinue any product without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Limitation of Liability</SectionTitle>
          <Text>
            In no event shall La Shades or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on La Shades' website.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Revisions and Errata</SectionTitle>
          <Text>
            The materials appearing on La Shades' website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Text>
            If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService; 