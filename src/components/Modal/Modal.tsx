import React from 'react';
import { ModalProps, ModalState } from '../../types';

class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (prevState.isOpen !== prevProps.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <dialog open={isOpen}>
        {this.props.children}
        <div className="button-container">
          <button
            type="button"
            id="restaurant-detail-modal-remove-button"
            className="button button--secondary text-caption"
          >
            삭제하기
          </button>
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
