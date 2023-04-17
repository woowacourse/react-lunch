import styled from 'styled-components';

interface ButtonType {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonType) => {
  return <ButtonWrapper onClick={props.onClick}>{props.text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 8px;

  background: var(--primary-color);

  font-weight: 600;
  color: var(--grey-100);

  transition: all 0.1s ease;

  cursor: pointer;
  :active {
    opacity: 50%;
    transform: scale(0.98);
  }
`;

export default Button;
