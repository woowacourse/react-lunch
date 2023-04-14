import { Component, ReactNode } from 'react';
import styled from 'styled-components';

const Style = {
  BackDrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  `,
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;

    padding: 16px;

    border-radius: 8px 8px 0px 0px;
    background: var(--grey-100);
  `,
  CloseButton: styled.button`
    border: none;
    background-color: var(--primary-color);
    color: var(--grey-100);
    width: 100%;
    height: 44px;
    margin-right: 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  `,
};

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export class Modal extends Component<ModalProps> {
  componentDidMount() {
    window.onkeydown = (e) => {
      if (e.key === 'Escape' && this.props.isOpen) this.props.closeModal();
    };
  }

  render(): ReactNode {
    return (
      <>
        {this.props.isOpen && (
          <>
            <Style.BackDrop onClick={this.props.closeModal} />
            <Style.Wrapper>
              {this.props.children}
              <Style.CloseButton onClick={this.props.closeModal}>
                닫기
              </Style.CloseButton>
            </Style.Wrapper>
          </>
        )}
      </>
    );
  }
}
