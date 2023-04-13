import React, { ReactElement } from "react";
import styled from "styled-components";
import { ModalButton } from "./modalButton";

interface PropsType {
  closeModal: () => void;
  location: string;
  children: ReactElement;
}

export class Modal extends React.Component<PropsType> {
  closeModalByESC() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.props.closeModal();
      }
    });
  }

  componentDidMount() {
    this.closeModalByESC();
  }

  render() {
    return (
      <>
        <BackDrop onClick={this.props.closeModal} />
        <ModalContainer location={this.props.location}>
          {this.props.children}
          <ButtonContainer>
            <ModalButton
              text="닫기"
              baseColor="orange"
              handleClick={this.props.closeModal}
            />
          </ButtonContainer>
        </ModalContainer>
      </>
    );
  }
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
