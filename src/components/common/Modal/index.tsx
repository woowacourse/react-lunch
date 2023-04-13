import { Component } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

class Modal extends Component<Props> {
  handleEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleEscapeKeydown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleEscapeKeydown);
  }

  render() {
    return createPortal(
      <div role="dialog" aria-modal>
        <div className="modal-backdrop" onClick={this.props.onCloseModal}></div>
        <div className="modal-container">{this.props.children}</div>
      </div>,
      document.body,
    );
  }
}

export default Modal;
