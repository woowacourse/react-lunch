import * as styled from './Button.styles';

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
> &
  React.PropsWithChildren<{
    variant?: 'primary' | 'outlined';
  }>;

const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <styled.Button {...buttonProps} $variant={variant}>
      {children}
    </styled.Button>
  );
};

export default Button;
