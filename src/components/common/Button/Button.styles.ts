import styled from 'styled-components';

type ButtonProps = {
  $variant: 'primary' | 'outlined';
};

export const Button = styled.button<ButtonProps>`
  height: 44px;

  background: ${(props) => (props.$variant === 'primary' ? 'var(--primary-color)' : 'transparent')};
  border: ${(props) => (props.$variant === 'primary' ? 'none' : '1px solid var(--grey-300)')};
  border-radius: 8px;

  color: ${(props) => (props.$variant === 'primary' ? 'var(--grey-100)' : 'var(--grey-300)')};
  font-weight: 600;
`;
