import styled from "styled-components";

interface ModalButtonProps {
  text: string;
  baseColor: string;
  handleClick?: () => void;
}

export const ModalButton = ({
  text,
  baseColor = "orange",
  handleClick,
}: ModalButtonProps) => {
  return (
    <Button baseColor={baseColor} onClick={handleClick}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ baseColor: string }>`
  width: 100%;
  height: 44px;

  margin-right: 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  ${({ theme }) => theme.fonts.caption};
  ${({ theme, baseColor }) => theme.buttons[baseColor]}
`;
