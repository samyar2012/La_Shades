import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, Search, User } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from './common/Link';
import styled from 'styled-components';

const NavContainer = styled.nav<{ $isTransparent: boolean; $isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => !props.$isTransparent ? 'white' : props.$isScrolled ? 'white' : 'transparent'};
  box-shadow: ${props => (!props.$isTransparent || props.$isScrolled) ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
  padding: ${props => (!props.$isTransparent || props.$isScrolled) ? '0.75rem 0' : '1.5rem 0'};
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Logo = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme === 'light' ? '#1a1a1a' : 'white'};
  
  span {
    color: #b45309;
  }
`;

const NavLink = styled(RouterLink)<{ $isTransparent: boolean; $isScrolled: boolean }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => !props.$isTransparent ? '#1a1a1a' : props.$isScrolled ? '#1a1a1a' : 'white'};
  transition: color 0.2s ease;
  position: relative;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    color: ${props => !props.$isTransparent || props.$isScrolled ? '#b45309' : '#fcd34d'};
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(0.5rem);
  margin-top: 0.5rem;
  min-width: 200px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1001;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`;

const DropdownItem = styled(RouterLink)`
  display: block;
  padding: 0.75rem 1.25rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8fafc;
    color: #b45309;
    padding-left: 1.5rem;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1001;
  padding-top: 4rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  
  &.open {
    transform: translateX(0);
  }
`;

const MobileMenuItem = styled(RouterLink)`
  display: block;
  padding: 1rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #1a1a1a;
  border-bottom: 1px solid #f3f4f6;
  
  &:hover {
    background-color: #f8fafc;
    color: #b45309;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isTransparentPage = location.pathname === '/' || location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products', hasDropdown: true },
    { name: 'About Us', href: '/about'},
    { name: 'Newsletter', href: '/newsletter'},
    { name: 'Contact', href: '/contact' },
    {name:  'Gallery', href: '/projects'}
  ];

  const productDropdowns = {
    products: [
      { name: 'Blinds', href: '/collections/blinds' },
      { name: 'Curtains', href: '/collections/curtains' },
      { name: 'Shades', href: '/collections/shades' },
      { name: 'Accessories', href: '/collections/accessories' }
    ]
  };

  return (
    <NavContainer $isTransparent={isTransparentPage} $isScrolled={isScrolled}>
      <NavContent>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <RouterLink to="/" className="flex items-center" onClick={handleHomeClick}>
              <Logo theme={!isTransparentPage || isScrolled ? 'light' : 'dark'}>
                LUNA <span>DRAPES</span>
              </Logo>
            </RouterLink>
          </div>
          
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <DropdownContainer key={link.name}>
                  {link.href.startsWith('#') ? (
                    <Link 
                      href={link.href}
                      className={`text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
                        !isTransparentPage || isScrolled ? 'text-gray-800 hover:text-amber-700' : 'text-white hover:text-amber-300'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Link>
                  ) : (
                    <NavLink 
                      to={link.href}
                      $isTransparent={isTransparentPage}
                      $isScrolled={isScrolled}
                      onClick={link.name === 'Home' ? handleHomeClick : undefined}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </NavLink>
                  )}
                  
                  {link.hasDropdown && (
                    <DropdownMenu className="dropdown-menu">
                      {productDropdowns[link.name.toLowerCase() as keyof typeof productDropdowns]?.map((item) => (
                        <DropdownItem
                          key={item.name}
                          to={item.href}
                        >
                          {item.name}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                !isTransparentPage || isScrolled ? 'text-gray-800' : 'text-white'
              } focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </NavContent>
      
      <MobileMenu className={isOpen ? 'open' : ''}>
        {navLinks.map((link) => (
          <MobileMenuItem
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </MobileMenuItem>
        ))}
        <div className="flex space-x-4 px-6 py-4 border-t border-gray-100">
          <button className="p-2 rounded-full text-gray-800 hover:text-amber-700 focus:outline-none">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full text-gray-800 hover:text-amber-700 focus:outline-none">
            <User className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full text-gray-800 hover:text-amber-700 focus:outline-none relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-amber-700 text-white text-xs">
              0
            </span>
          </button>
        </div>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;