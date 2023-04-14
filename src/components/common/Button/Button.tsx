import React from 'react';
import * as styled from './Button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren<{ variant?: 'primary' | 'outlined' }>;

const Button: React.FC<ButtonProps> = ({ children, variant, ...buttonProps }) => {
  return (
    <styled.Button {...buttonProps} $variant={variant ?? 'outlined'}>
      {children}
    </styled.Button>
  );
};

export default Button;
