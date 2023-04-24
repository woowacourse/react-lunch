import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as styled from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{ variant?: 'primary' | 'outlined' }>;

const Button = ({ children, variant = 'outlined', ...buttonProps }: ButtonProps) => {
  return (
    <styled.Button {...buttonProps} $variant={variant}>
      {children}
    </styled.Button>
  );
};

export default Button;
