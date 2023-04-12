import React from 'react';
import './Modal.css';
import { ModalProps, ModalState } from '../../types';

class Modal extends React.Component<ModalProps, ModalState> {
  private modalRef: React.RefObject<HTMLDialogElement>;

  constructor(props: ModalProps) {
    super(props);
    this.modalRef = React.createRef<HTMLDialogElement>();
  }

  componentDidMount() {
    if (this.modalRef.current) {
      this.modalRef.current.showModal();
    }
  }

  componentDidUpdate() {
    if (this.modalRef.current) {
      this.modalRef.current.showModal();
    }
  }

  closeModal() {
    if (this.modalRef.current) {
      this.modalRef.current.close();
    }
  }

  onBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === this.modalRef.current) {
      this.closeModal();
    }
  };

  render() {
    return (
      <dialog ref={this.modalRef} onClick={this.onBackdropClick}>
        <div className="modal-container">
          {this.props.children}
          <button
            className="button button--primary text-caption"
            id="restaurant-detail-modal-close-button"
            onClick={() => this.closeModal()}
          >
            닫기
          </button>
        </div>
      </dialog>
    );
  }
}

export default Modal;
