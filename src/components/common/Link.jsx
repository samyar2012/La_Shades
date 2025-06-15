import React from 'react';

export const Link = ({ href, children, className = '', onClick }) => {
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - 100,
              behavior: 'smooth'
            });
            if (onClick) onClick();
          }
        }
      }}
    >
      {children}
    </a>
  );
};