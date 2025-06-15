import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styled from 'styled-components';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const SectionDivider = styled.div`
  width: 4rem;
  height: 2px;
  background: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
`;

const SectionDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestimonialTrack = styled.div<{ activeIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.activeIndex * 100}%);
`;

const TestimonialCard = styled.div`
  flex: 0 0 100%;
  padding: 0 1rem;
`;

const TestimonialContent = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 3rem;
  }
`;

const TestimonialImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 0;
    margin-right: 2rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialText = styled.div`
  flex: 1;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const StarIcon = styled(Star)<{ filled: boolean }>`
  color: ${props => props.filled ? '#FFD700' : '#E5E7EB'};
  fill: ${props => props.filled ? '#FFD700' : 'none'};
  width: 1.25rem;
  height: 1.25rem;
`;

const TestimonialQuote = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

const TestimonialRole = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #666;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: #666;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #333;
  }
`;

const DotButton = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#333' : '#E5E7EB'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#333' : '#CBD5E1'};
  }
`;

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'The quality of the blinds we received from Luna Drapes exceeded our expectations. The installation was quick and professional, and the team was very helpful in guiding us through the selection process.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mark Williams',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'I\'ve recommended Luna Drapes to many of my clients. Their range of products is impressive, and the quality is consistently excellent. My clients are always pleased with the results.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'We chose Luna Drapes for our office renovation, and they did a fantastic job. The motorized blinds are a perfect addition to our meeting rooms, and the service was impeccable from start to finish.',
      rating: 4
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionDivider />
          <SectionDescription>
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Luna Drapes.
          </SectionDescription>
        </SectionHeader>
        
        <TestimonialSlider>
          <TestimonialTrack activeIndex={activeIndex}>
              {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialContent>
                  <TestimonialImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </TestimonialImage>
                  <TestimonialText>
                    <RatingContainer>
                        {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} filled={i < testimonial.rating} />
                        ))}
                    </RatingContainer>
                    <TestimonialQuote>{testimonial.content}</TestimonialQuote>
                    <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
                    <TestimonialRole>{testimonial.role}</TestimonialRole>
                  </TestimonialText>
                </TestimonialContent>
              </TestimonialCard>
              ))}
          </TestimonialTrack>
          
          <NavigationButtons>
            <NavButton onClick={goToPrev}>
              <ChevronLeft size={24} />
            </NavButton>
            {testimonials.map((_, index) => (
              <DotButton
                key={index}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <NavButton onClick={goToNext}>
              <ChevronRight size={24} />
            </NavButton>
          </NavigationButtons>
        </TestimonialSlider>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;