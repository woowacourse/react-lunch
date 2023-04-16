import React, { ReactElement, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import useModal from "../utils/hooks/useModal";
import ModalButton from "./modalButton";

interface PropsType {
  location: string;
  children: ReactElement;
  closeModal: any;
}

export default function Modal(props: PropsType) {
  const { location, children, closeModal } = props;

  return (
    <>
      <BackDrop onClick={closeModal} />
      <ModalContainer location={location}>
        {children}
        <ButtonContainer>
          <ModalButton text="닫기" baseColor="orange" closeModal={closeModal} />
        </ButtonContainer>
      </ModalContainer>
    </>
  );
}

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;
const ModalContainer = styled.div<{ location: string }>`
  position: fixed;
  bottom: ${({ location }) => (location === "bottom" ? "0" : "40%")};
  right: 0;
  left: 0;

  padding: 32px 16px;

  background-color: ${({ theme }) => theme.colors.grey100};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
