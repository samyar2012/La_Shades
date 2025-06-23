import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Images for each product type
import motorizedShadesImg from '../../assets/classic_Motorized.png';
import motorizedDraperyImg from '../../assets/Motorized-shades.jpg';
import motorizedBlindsImg from '../../assets/Classic_Roller.png'; // Placeholder, update if you have a better image

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
`;

const Section = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 0 6vw;
  box-sizing: border-box;
  background: transparent;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 80vh;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

const SectionImage = styled.img`
  width: 45vw;
  max-width: 600px;
  min-width: 280px;
  height: 60vh;
  min-height: 220px;
  max-height: 500px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  @media (max-width: 900px) {
    width: 90vw;
    height: 30vh;
    margin-bottom: 2rem;
  }
`;

const SectionContent = styled.div`
  flex: 1;
  padding: 0 3vw;
  @media (max-width: 900px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;
`;

const RequestQuoteButton = styled(motion(Link))`
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 0.375rem;
  display: inline-block;
  margin-top: 1rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const PageIntro = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto 7rem auto;
  padding-top: 7rem;
`;

const IntroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #222;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const IntroSubtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MotorizedProducts: React.FC = () => {
  return (
    <PageContainer>
      <PageIntro>
        <IntroTitle>Our Motorized Collection</IntroTitle>
        <IntroSubtitle>
          Discover the ultimate in convenience, style, and smart living. Explore our range of motorized window treatments—blinds, shades, and drapery—designed for effortless control and modern luxury in every room.
        </IntroSubtitle>
      </PageIntro>
      <Section>
        <SectionImage src={motorizedBlindsImg} alt="Motorized Blinds" />
        <SectionContent>
          <SectionTitle>Motorized Blinds</SectionTitle>
          <SectionDescription>
            Enjoy effortless control and modern convenience with our motorized blinds. Perfect for hard-to-reach windows and smart home integration. Upgrade your blinds with motorized operation for smooth, quiet, and precise control. Integrate with your smart home system for ultimate convenience.
          </SectionDescription>
          <RequestQuoteButton to="/quote-request?type=blinds&model=Motorized Blinds">
            Request a Quote
          </RequestQuoteButton>
        </SectionContent>
      </Section>
      <Section reverse>
        <SectionImage src={motorizedShadesImg} alt="Motorized Shades" />
        <SectionContent>
          <SectionTitle>Motorized Shades</SectionTitle>
          <SectionDescription>
            Discover the perfect blend of style and technology with our motorized shades. Choose from classic, modern, and premium options for every room. Control your shades with a remote, app, or voice command. Enjoy energy efficiency, privacy, and light control at the touch of a button.
          </SectionDescription>
          <RequestQuoteButton to="/quote-request?type=shades&model=Motorized Shades">
            Request a Quote
          </RequestQuoteButton>
        </SectionContent>
      </Section>
      <Section>
        <SectionImage src={motorizedDraperyImg} alt="Motorized Drapery" />
        <SectionContent>
          <SectionTitle>Motorized Drapery</SectionTitle>
          <SectionDescription>
            Transform your space with the elegance and ease of motorized drapery. Enjoy smart control, premium fabrics, and seamless operation. Integrate your drapery with smart home systems for automated schedules, voice control, and effortless luxury.
          </SectionDescription>
          <RequestQuoteButton to="/quote-request?type=drapery&model=Motorized Drapery">
            Request a Quote
          </RequestQuoteButton>
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default MotorizedProducts; 
