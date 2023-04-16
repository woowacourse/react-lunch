import React from 'react';

import './Button.css';

interface ButtonProps {
  color: string;
  name: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ color, name, onClose }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${color} text-caption`}
      onClick={onClose}
    >
      {name}
    </button>
  );
};

export default Button;
