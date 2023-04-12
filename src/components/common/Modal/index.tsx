import { Component } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  isModalOpened: boolean;
  onCloseModal: () => void;
}

const modalRoot = document.getElementById('modal-root') ?? document.body;

class Modal extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    if (this.props.isModalOpened) {
      return createPortal(
        <div>
          <div
            className="modal-backdrop"
            onClick={this.props.onCloseModal}
          ></div>
          <div className="modal-container">{this.props.children}</div>
        </div>,
        modalRoot,
      );
    }

    return null;
  }
}

export default Modal;
