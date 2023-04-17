import styled from 'styled-components';

type ButtonProps = {
  $variant?: 'primary' | 'outlined';
  $disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  height: 44px;

  background: ${(props) => (props.$variant === 'primary' ? props.theme.primary : 'transparent')};
  border: ${(props) =>
    props.$variant === 'primary' ? 'none' : `1px solid ${props.theme.grey['300']}`};
  border-radius: 8px;

  color: ${(props) =>
    props.$variant === 'primary' ? props.theme.grey['100'] : props.theme.grey['300']};
  font-weight: 600;

  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'initial')};
`;
