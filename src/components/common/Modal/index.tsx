import { Component } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

class Modal extends Component<Props> {
  render() {
    return createPortal(
      <div>
        <div className="modal-backdrop" onClick={this.props.onCloseModal}></div>
        <div className="modal-container">{this.props.children}</div>
      </div>,
      document.body,
    );
  }
}

export default Modal;
