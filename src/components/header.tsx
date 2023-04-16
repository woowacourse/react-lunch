import styled from "styled-components";
import addButton from "../assets/add-button.png";
import useModal from "../utils/hooks/useModal";
import Modal from "./modal";
import WarningModalContent from "./warningModalContent";

export default function Header() {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Container>
        <Title
          onClick={() => {
            window.location.reload();
          }}>
          점심 뭐 먹지
        </Title>
        <AddButton aria-label="음식점 추가" onClick={openModal}>
          <AddIcon src={addButton} alt="음식점 추가" />
        </AddButton>
      </Container>
      {open && (
        <Modal location="middle" closeModal={closeModal}>
          <WarningModalContent />
        </Modal>
      )}
    </>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`;

const Title = styled.h1`
  color: #fcfcfd;

  ${({ theme }) => theme.fonts.title};
`;

const AddButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

const AddIcon = styled.img``;
