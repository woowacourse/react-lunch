import styles from './style.module.css';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

function Button({ children, variant = 'primary', className, ...attributes }: ButtonProps) {
  const style = variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;

  return (
    <button className={`${className} ${style}`} {...attributes}>
      {children}
    </button>
  );
}

export default Button;
