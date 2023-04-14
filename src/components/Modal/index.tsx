import './style.css';
import { Component, KeyboardEvent, MouseEvent, ReactNode, RefObject, createRef } from 'react';

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  onToggle: CallableFunction;
}

class Modal extends Component<ModalProps> {
  modalContainerRef: RefObject<HTMLDivElement>;

  constructor(props: ModalProps) {
    super(props);

    this.modalContainerRef = createRef();
  }

  shouldComponentUpdate(nextProps: ModalProps) {
    return this.props.isModalOpen !== nextProps.isModalOpen;
  }

  componentDidUpdate() {
    if (this.modalContainerRef.current) {
      this.modalContainerRef.current.focus();
    }
  }

  handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      this.props.onToggle();
    }
  };

  handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      this.props.onToggle();
    }
  };

  render() {
    const { isModalOpen } = this.props;

    return (
      <>
        {isModalOpen && (
          <div className="modal" onClick={this.handleClose}>
            <div className="modal-backdrop" />
            <div
              ref={this.modalContainerRef}
              className="modal-container"
              onKeyDown={this.handleKeyPress}
              tabIndex={1}
            >
              {this.props.children}
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
