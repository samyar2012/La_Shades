import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
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

const FAQItem = styled(motion.div)`
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`;

const Question = styled(motion.button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  text-align: left;
  
  &:hover {
    color: #b45309;
  }
`;

const Answer = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  padding: 0 0 1.5rem;
`;

const ChevronIcon = styled(motion(ChevronDown))`
  color: #4b5563;
  transition: transform 0.3s ease;
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I measure my windows for window treatments?",
    answer: "We recommend measuring the width and height of your window frame in three places (top, middle, and bottom) to ensure accuracy. For inside mount treatments, measure the inside of the window frame. For outside mount treatments, measure the area you want to cover. Our website provides detailed measuring guides for each product type."
  },
  {
    question: "What is the difference between inside and outside mount?",
    answer: "Inside mount window treatments are installed within the window frame, while outside mount treatments are installed on the wall or molding above the window. Inside mount provides a cleaner look but requires precise measurements, while outside mount can make windows appear larger and is more forgiving with measurements."
  },
  {
    question: "How long does it take to receive custom window treatments?",
    answer: "Custom window treatments typically take 2-4 weeks to manufacture and ship. This timeline may vary depending on the complexity of the order and current production volume. We'll provide you with an estimated delivery date when you place your order."
  },
  {
    question: "Do you offer installation services?",
    answer: "Yes, we offer professional installation services in select areas. Our experienced installers ensure proper fitting and operation of your window treatments. Installation fees vary based on the type and number of treatments. Contact us for a quote in your area."
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a 5-year warranty on our window treatments, covering manufacturing defects and material flaws. The warranty does not cover normal wear and tear, improper installation, or damage from misuse. Please refer to our warranty documentation for complete details."
  },
  {
    question: "How do I clean and maintain my window treatments?",
    answer: "Cleaning methods vary by product type. Most fabric treatments can be vacuumed with a brush attachment or spot cleaned. Blinds and shades can be dusted with a microfiber cloth or vacuumed. We provide specific cleaning instructions with each product. Regular maintenance helps extend the life of your window treatments."
  },
  {
    question: "Can I return custom window treatments?",
    answer: "Custom window treatments are made to your specifications and cannot be returned unless they arrive damaged or defective. We recommend ordering samples before placing a custom order to ensure you're satisfied with the color, texture, and material."
  },
  {
    question: "Do you offer samples?",
    answer: "Yes, we offer sample swatches of our fabrics and materials. Samples are available for a small fee, which is credited toward your purchase. You can order samples through our website or by contacting our customer service team."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. For large orders, we also offer financing options through our partner lenders."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation through our website, by phone, or by visiting our showroom. Our design consultants will help you choose the perfect window treatments for your space, taking into account your style preferences, functional needs, and budget."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <HeaderTitle>Frequently Asked Questions</HeaderTitle>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          {faqData.map((faq, index) => (
            <FAQItem key={index}>
              <Question
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {faq.question}
                <ChevronIcon
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Question>
              <AnimatePresence>
                {openIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>Still Have Questions?</SectionTitle>
          <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
            For any questions about our products or services, please contact us at:
            Email: LunaDrapes@gmail.com<br />
            Phone: (310) 467-5772
            <br />
            Hours: Monday - Friday, 9am - 5pm EST
          </p>
        </Section>
      </Content>
    </PageContainer>
  );
};

export default FAQ; 