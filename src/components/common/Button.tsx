import * as styled from './Button.styles';

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
> &
  React.PropsWithChildren<{
    variant?: 'primary' | 'outlined';
    disabled?: boolean;
  }>;

const Button = ({ children, variant, disabled, ...buttonProps }: ButtonProps) => {
  return (
    <styled.Button {...buttonProps} $variant={variant} $disabled={disabled}>
      {children}
    </styled.Button>
  );
};

export default Button;
