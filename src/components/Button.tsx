import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;