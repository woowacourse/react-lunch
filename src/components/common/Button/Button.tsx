import './style.css';
import { ButtonHTMLAttributes } from 'react';

function Button({ children, ...attributes }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...attributes}>{children}</button>;
}

export default Button;
