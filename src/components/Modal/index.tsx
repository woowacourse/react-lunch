import { ModalProps } from '../../types';
import './style.css';
import { Component, MouseEvent } from 'react';

class Modal extends Component<ModalProps> {
  shouldComponentUpdate(nextProps: ModalProps) {
    return this.props.isModalOpen !== nextProps.isModalOpen;
  }

  handleClose(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      this.props.onToggle();
    }
  }

  render() {
    const { isModalOpen } = this.props;

    return (
      <>
        {isModalOpen && (
          <div className="modal" onClick={(event) => this.handleClose(event)}>
            <div className="modal-backdrop" />
            <div className="modal-container">
              {this.props.content}
              <button className="button button--primary text-caption modal-close-button">
                닫기
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
