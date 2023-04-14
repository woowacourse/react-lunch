import React from 'react';
import * as styled from './Button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren<{ variant?: 'primary' | 'outlined' }>;

const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <styled.Button {...buttonProps} $variant={variant ?? 'outlined'}>
      {children}
    </styled.Button>
  );
};

export default Button;
