import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  span {
    color: #b45309;
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #b45309 0%, #f59e0b 100%);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: #1a1a1a;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  color: #1a1a1a;
  background: none;
  border: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: #1a1a1a;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  min-width: 200px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    transform: none;
    border-radius: 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: #1a1a1a;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f7f7f7;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.75rem 0;
  color: #1a1a1a;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileDropdownButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.75rem 0;
  color: #1a1a1a;
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileDropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  padding-left: 1rem;
  background: #f9f9f9;
`;

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close dropdowns when location changes
  useEffect(() => {
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Helper function to handle navigation clicks
  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Close both desktop and mobile product dropdowns when clicking a non-page link
      setIsProductsOpen(false);
      setIsMobileProductsOpen(false);
    }
  };

  // Helper function to handle dropdown item clicks
  const handleDropdownItemClick = () => {
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleMobileProductsClick = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Rest of the component...


  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/" onClick={() => handleNavClick('/')}>
          LUNA <span>DRAPES</span>
        </Logo>
        
        <NavLinks>
          <NavLink to="/" onClick={() => handleNavClick('/')}>Home</NavLink>
          <NavLink to="/about" onClick={() => handleNavClick('/about')}>About</NavLink>
          <DropdownContainer>
            <DropdownButton onClick={handleProductsClick}>
              Products <ChevronDown size={16} />
            </DropdownButton>
            <DropdownMenu isOpen={isProductsOpen}>
              <DropdownItem to="/collections/blinds" onClick={handleDropdownItemClick}>Blinds</DropdownItem>
              <DropdownItem to="/collections/drapery" onClick={handleDropdownItemClick}>Drapery</DropdownItem>
              <DropdownItem to="/collections/shades" onClick={handleDropdownItemClick}>Shades</DropdownItem>
              <DropdownItem to="/collections/accessories" onClick={handleDropdownItemClick}>Accessories</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
          <NavLink to="/projects" onClick={() => handleNavClick('/projects')}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => handleNavClick('/contact')}>Contact</NavLink>
        </NavLinks>

        <MobileMenuButton onClick={handleMobileMenuClick}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={() => handleNavClick('/')}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={() => handleNavClick('/about')}>About</MobileNavLink>
        <MobileDropdownButton onClick={handleMobileProductsClick}>
          Products <ChevronDown size={16} />
        </MobileDropdownButton>
        <MobileDropdownMenu isOpen={isMobileProductsOpen}>
          <MobileNavLink to="/collections/blinds" onClick={handleDropdownItemClick}>Blinds</MobileNavLink>
          <MobileNavLink to="/collections/curtains" onClick={handleDropdownItemClick}>Curtains</MobileNavLink>
          <MobileNavLink to="/collections/drapery" onClick={handleDropdownItemClick}>Drapery</MobileNavLink>
          <MobileNavLink to="/collections/shades" onClick={handleDropdownItemClick}>Shades</MobileNavLink>
          <MobileNavLink to="/collections/accessories" onClick={handleDropdownItemClick}>Accessories</MobileNavLink>
        </MobileDropdownMenu>
        <MobileNavLink to="/projects" onClick={() => handleNavClick('/projects')}>Gallery</MobileNavLink>
        <MobileNavLink to="/contact" onClick={() => handleNavClick('/contact')}>Contact</MobileNavLink>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;