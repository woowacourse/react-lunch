import React, { Component, RefObject } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalPortalProps {
  children: React.ReactNode;
  refModal: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

class ModalPortal extends Component<ModalPortalProps> {
  render() {
    return ReactDOM.createPortal(
      <dialog ref={this.props.refModal}>
        <ModalBackdrop
          className='modal-backdrop'
          onClick={this.props.onClose}
        />
        {this.props.children}
      </dialog>,
      document.body
    );
  }
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;

export default ModalPortal;
