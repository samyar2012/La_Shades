import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import rollerShade from '../assets/photo_2025-06-01_21-25-51.jpg';
import romanShade from '../assets/photo_2025-06-01_21-25-53.jpg';
import cellularShade from '../assets/photo_2025-06-01_21-25-54.jpg';
import motorizedShade from '../assets/photo_2025-06-01_21-25-55.jpg';
import motorizedShade2 from '../assets/photo_2025-06-01_21-25-55 (2).jpg';
import elegantDrapes from '../assets/photo_2025-06-01_21-25-56.jpg';
import sheerCurtains from '../assets/photo_2025-06-01_21-25-57.jpg';
import sheerCurtains2 from '../assets/photo_2025-06-01_21-25-57 (2).jpg';
import blackoutCurtains from '../assets/photo_2025-06-01_21-25-58.jpg';
import wovenWood from '../assets/photo_2025-06-01_21-25-59.jpg';
import wovenWood2 from '../assets/photo_2025-06-01_21-25-59 (2).jpg';
import modernLiving from '../assets/photo_2025-06-01_21-26-00.jpg';
import modernLiving2 from '../assets/photo_2025-06-01_21-26-00 (2).jpg';
import luxurySuite from '../assets/photo_2025-06-01_21-26-01.jpg';
import officeSpace from '../assets/photo_2025-06-01_21-26-02.jpg';
import officeSpace2 from '../assets/photo_2025-06-01_21-26-02 (2).jpg';
import installation1 from '../assets/photo_2025-06-01_20-53-12.jpg';
import installation2 from '../assets/photo_2025-06-01_20-53-17.jpg';
import installation3 from '../assets/photo_2025-06-01_20-53-26.jpg';
import installation4 from '../assets/photo_2025-06-01_20-53-29.jpg';
import modernInterior from '../assets/mitchell-luo--_HeBmTRRmg-unsplash.jpg';
import elegantSpace from '../assets/anais-murith-u2kV8mqvdtc-unsplash.jpg';
import kimberleyInterior from '../assets/kimberley-alpuerto-gYCj5LrI9wI-unsplash.jpg';
import moonInterior from '../assets/moon-i87dB4Kd7nw-unsplash.jpg';
import dimasInterior from '../assets/dimas-anggara-VIk1nwibgNE-unsplash.jpg';
import deconovoInterior from '../assets/deconovo-JlHYZil96lQ-unsplash.jpg';
import jonInterior from '../assets/jon-tyson-SlpsgiZsSNk-unsplash.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: string;
  features: string[];
  additionalImages: string[];
}

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

const HeaderSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 300;
  color: #4b5563;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MainContent = styled(motion.div)`
  display: flex;
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
  background: #ffffff;
`;

const Sidebar = styled(motion.div)`
  width: 280px;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
  border: 1px solid #e5e7eb;
`;

const SearchContainer = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled(motion.input).attrs({ as: 'input' })`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #b45309;
    box-shadow: 0 0 0 2px rgba(180, 83, 9, 0.1);
    background: #ffffff;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  width: 1rem;
  height: 1rem;
`;

const FilterSection = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const FilterTitle = styled(motion.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FilterGroup = styled(motion.div)`
  margin-bottom: 1rem;
`;

const FilterLabel = styled(motion.label)`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FilterSelect = styled(motion.select).attrs({ as: 'select' })`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #1a1a1a;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #b45309;
    box-shadow: 0 0 0 2px rgba(180, 83, 9, 0.1);
    background: #ffffff;
  }
`;

const ProjectsGrid = styled(motion.div)`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled(motion.div)`
  position: relative;
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled(motion.div)`
  padding: 1.5rem;
`;

const ProjectTitle = styled(motion.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  color: #4b5563;
  line-height: 1.6;
  font-weight: 300;
  font-size: 0.875rem;
`;

const CTASection = styled(motion.div)`
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid #e5e7eb;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const CTAText = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  padding: 1rem 2rem;
  background: #b45309;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #92400e;
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Roller Shade',
      category: 'residential',
      image: rollerShade,
      description: 'Elegant roller shades perfect for modern living spaces',
      price: '$299.99',
      features: [
        'Premium fabric construction',
        'Smooth operation system',
        'Custom sizing available',
        'Multiple color options'
      ],
      additionalImages: [romanShade, cellularShade, motorizedShade]
    },
    {
      id: 2,
      title: 'Classic Roman Shade',
      category: 'residential',
      image: romanShade,
      description: 'Timeless Roman shades that add sophistication to any room',
      price: '$349.99',
      features: [
        'Luxurious fabric options',
        'Custom pleat sizes',
        'Cordless operation available',
        'Perfect light control'
      ],
      additionalImages: [rollerShade, cellularShade, motorizedShade]
    },
    {
      id: 3,
      title: 'Energy-Efficient Cellular Shade',
      category: 'residential',
      image: cellularShade,
      description: 'Advanced cellular shades for optimal insulation and light control',
      price: '$399.99',
      features: [
        'Energy-saving design',
        'Multiple cell sizes',
        'Top-down/bottom-up operation',
        'Premium materials'
      ],
      additionalImages: [rollerShade, romanShade, motorizedShade]
    },
    {
      id: 4,
      title: 'Smart Motorized Shade',
      category: 'commercial',
      image: motorizedShade,
      description: 'State-of-the-art motorized shades for modern spaces',
      price: '$599.99',
      features: [
        'Smart home integration',
        'Remote control operation',
        'Battery or hardwired options',
        'Scheduled automation'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 5,
      title: 'Smart Home Control',
      category: 'residential',
      image: motorizedShade2,
      description: 'Advanced motorized shades with remote control',
      price: '$549.99',
      features: [
        'Smart home integration',
        'Remote control operation',
        'Battery or hardwired options',
        'Scheduled automation'
      ],
      additionalImages: [rollerShade, romanShade, cellularShade]
    },
    {
      id: 6,
      title: 'Elegant Dining Room',
      category: 'residential',
      image: elegantDrapes,
      description: 'Floor-to-ceiling drapes creating a sophisticated atmosphere',
      price: '$449.99',
      features: [
        'Premium fabric selection',
        'Custom sizing',
        'Multiple pleat styles',
        'Lining options'
      ],
      additionalImages: [sheerCurtains, blackoutCurtains, wovenWood]
    },
    {
      id: 7,
      title: 'Restaurant Interior',
      category: 'commercial',
      image: sheerCurtains,
      description: 'Sheer curtains adding softness to a modern restaurant space',
      price: '$299.99',
      features: [
        'Light filtering',
        'Soft drape',
        'Multiple colors',
        'Easy care'
      ],
      additionalImages: [elegantDrapes, blackoutCurtains, wovenWood]
    },
    {
      id: 8,
      title: 'Modern Cafe',
      category: 'commercial',
      image: sheerCurtains2,
      description: 'Contemporary sheer curtains for a cozy cafe atmosphere',
      price: '$279.99',
      features: [
        'Light filtering',
        'Soft drape',
        'Multiple colors',
        'Easy care'
      ],
      additionalImages: [elegantDrapes, blackoutCurtains, wovenWood]
    },
    {
      id: 9,
      title: 'Home Theater',
      category: 'residential',
      image: blackoutCurtains,
      description: 'Blackout curtains for the perfect home theater experience',
      price: '$399.99',
      features: [
        '100% light blocking',
        'Energy efficient',
        'Noise reduction',
        'Multiple colors'
      ],
      additionalImages: [elegantDrapes, sheerCurtains, wovenWood]
    },
    {
      id: 10,
      title: 'Natural Living Space',
      category: 'residential',
      image: wovenWood,
      description: 'Woven wood shades bringing natural elements indoors',
      price: '$349.99',
      features: [
        'Natural materials',
        'Unique patterns',
        'Light filtering',
        'Custom sizing'
      ],
      additionalImages: [elegantDrapes, sheerCurtains, blackoutCurtains]
    },
    {
      id: 11,
      title: 'Organic Design',
      category: 'residential',
      image: wovenWood2,
      description: 'Natural woven wood shades for an organic aesthetic',
      price: '$379.99',
      features: [
        'Natural materials',
        'Unique patterns',
        'Light filtering',
        'Custom sizing'
      ],
      additionalImages: [elegantDrapes, sheerCurtains, blackoutCurtains]
    },
    {
      id: 12,
      title: 'Modern Apartment',
      category: 'residential',
      image: modernLiving,
      description: 'Contemporary window treatments in a modern apartment setting',
      price: '$499.99',
      features: [
        'Modern design',
        'Premium materials',
        'Custom sizing',
        'Professional installation'
      ],
      additionalImages: [modernLiving2, luxurySuite, officeSpace]
    },
    {
      id: 13,
      title: 'Corporate Space',
      category: 'commercial',
      image: officeSpace,
      description: 'Professional window treatments for corporate environments',
      price: '$799.99',
      features: [
        'Commercial-grade materials',
        'Light control',
        'Energy efficiency',
        'Professional installation'
      ],
      additionalImages: [modernLiving, luxurySuite, officeSpace2]
    },
    {
      id: 14,
      title: 'Professional Installation',
      category: 'installation',
      image: installation1,
      description: 'Expert installation of custom window treatments',
      price: 'Contact for Quote',
      features: [
        'Expert installation',
        'Quality assurance',
        'Clean installation',
        'Post-installation support'
      ],
      additionalImages: [installation2, installation3, installation4]
    },
    {
      id: 15,
      title: 'Precision Fitting',
      category: 'installation',
      image: installation2,
      description: 'Precise measurement and fitting of window treatments',
      price: 'Contact for Quote',
      features: [
        'Precise measurements',
        'Quality assurance',
        'Clean installation',
        'Post-installation support'
      ],
      additionalImages: [installation1, installation3, installation4]
    },
    {
      id: 16,
      title: 'Quality Installation',
      category: 'installation',
      image: installation3,
      description: 'Professional installation ensuring perfect fit and function',
      price: 'Contact for Quote',
      features: [
        'Professional installation',
        'Quality assurance',
        'Clean installation',
        'Post-installation support'
      ],
      additionalImages: [installation1, installation2, installation4]
    },
    {
      id: 17,
      title: 'Expert Setup',
      category: 'installation',
      image: installation4,
      description: 'Skilled installation of premium window treatments',
      price: 'Contact for Quote',
      features: [
        'Expert installation',
        'Quality assurance',
        'Clean installation',
        'Post-installation support'
      ],
      additionalImages: [installation1, installation2, installation3]
    },
    {
      id: 18,
      title: 'Modern Interior Design',
      category: 'inspiration',
      image: modernInterior,
      description: 'Contemporary window treatment inspiration for modern homes',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Modern aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [elegantSpace, kimberleyInterior, moonInterior]
    },
    {
      id: 19,
      title: 'Elegant Living Space',
      category: 'inspiration',
      image: elegantSpace,
      description: 'Inspiration for elegant window treatment solutions',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Elegant aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, kimberleyInterior, moonInterior]
    },
    {
      id: 20,
      title: 'Stylish Interior',
      category: 'inspiration',
      image: kimberleyInterior,
      description: 'Stylish window treatment ideas for modern interiors',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Modern aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, elegantSpace, moonInterior]
    },
    {
      id: 21,
      title: 'Natural Light Design',
      category: 'inspiration',
      image: moonInterior,
      description: 'Design inspiration for maximizing natural light',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Light optimization',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
    },
    {
      id: 22,
      title: 'Contemporary Style',
      category: 'inspiration',
      image: dimasInterior,
      description: 'Contemporary window treatment inspiration',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Contemporary aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
    },
    {
      id: 23,
      title: 'Modern Elegance',
      category: 'inspiration',
      image: deconovoInterior,
      description: 'Elegant window treatment ideas for modern spaces',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Modern aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
    },
    {
      id: 24,
      title: 'Design Inspiration',
      category: 'inspiration',
      image: jonInterior,
      description: 'Creative window treatment inspiration for your space',
      price: 'View Only',
      features: [
        'Design inspiration',
        'Creative aesthetics',
        'Space planning',
        'Style guidance'
      ],
      additionalImages: [modernInterior, elegantSpace, kimberleyInterior]
    }
  ];

  const styles = [
    { id: 'all', name: 'All Styles' },
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'contemporary', name: 'Contemporary' },
    { id: 'minimalist', name: 'Minimalist' }
  ];

  const rooms = [
    { id: 'all', name: 'All Rooms' },
    { id: 'living', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'dining', name: 'Dining Room' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStyle = selectedStyle === 'all' || project.category === selectedStyle;
      const matchesRoom = selectedRoom === 'all' || project.category === selectedRoom;
      
      return matchesSearch && matchesStyle && matchesRoom;
    });
  }, [searchQuery, selectedStyle, selectedRoom]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const headerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const sidebarVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const gridVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const ctaVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <PageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header variants={headerVariants}>
        <HeaderContent>
          <BackLink 
            to="/"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </BackLink>
          <HeaderTitle variants={titleVariants}>Our Gallery</HeaderTitle>
          <HeaderSubtitle variants={subtitleVariants}>
            Explore our portfolio of stunning window treatment installations that have transformed spaces across residential properties.
          </HeaderSubtitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <Sidebar
          variants={sidebarVariants}
        >
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
          </SearchContainer>

          <FilterSection>
            <FilterTitle>Filter By</FilterTitle>
            
            <FilterGroup>
              <FilterLabel>Style</FilterLabel>
              <FilterSelect
                value={selectedStyle}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedStyle(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              >
                {styles.map(style => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>Room Type</FilterLabel>
              <FilterSelect
                value={selectedRoom}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedRoom(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              >
                {rooms.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </FilterSelect>
            </FilterGroup>
          </FilterSection>
        </Sidebar>

        <ProjectsGrid variants={gridVariants}>
          {filteredProjects.map((project) => (
            <Link to={`/product/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProjectCard
                variants={cardVariants}
                whileHover="hover"
              >
                <ProjectImage variants={imageVariants}>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectContent>
              </ProjectCard>
            </Link>
          ))}
        </ProjectsGrid>
      </MainContent>

      <CTASection variants={ctaVariants}>
        <CTAContent>
          <CTATitle>Ready to Transform Your Space?</CTATitle>
          <CTAText>
            Let our design experts help you create the perfect window treatment solution for your space.
          </CTAText>
          <CTAButton 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Projects;