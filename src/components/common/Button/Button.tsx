import './style.css';
import { ButtonHTMLAttributes } from 'react';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...attributes } = props;

  return (
    <button className={`button text-caption ${className}`} {...attributes}>
      {children}
    </button>
  );
}

export default Button;
