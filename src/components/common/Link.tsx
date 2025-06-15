import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href === '#' || !href) {
      e.preventDefault();
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a 
      href={href || '#'} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
};