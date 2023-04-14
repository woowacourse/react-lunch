import React from 'react';
import * as styled from './Button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.PropsWithChildren<{ variant?: 'primary' | 'outlined' }>;

class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, variant, ...buttonProps } = this.props;
    return (
      <styled.Button {...buttonProps} $variant={variant ?? 'outlined'}>
        {children}
      </styled.Button>
    );
  }
}

export default Button;
