import { useState } from "react";
import styled from "styled-components";
import addButton from "../assets/add-button.png";
import { Modal } from "./modal";
import { WarningModalContent } from "./warningModalContent";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Title
          onClick={() => {
            window.location.reload();
          }}
        >
          점심 뭐 먹지
        </Title>
        <AddButton aria-label="음식점 추가" onClick={openModal}>
          <AddIcon src={addButton} alt="음식점 추가" />
        </AddButton>
      </Container>
      {isModalOpen && (
        <Modal location="middle" closeModal={closeModal}>
          <WarningModalContent />
        </Modal>
      )}
    </>
  );
};

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
