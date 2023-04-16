import React, { Component } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
}

class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
    this.closeModalCallback = this.closeModalCallback.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalCallback);
  }

  closeModalCallback(event: KeyboardEvent) {
    const { onClose } = this.props;

    if (event.key === 'Escape') {
      onClose();
    }
  }

  render() {
    const { children, onClose } = this.props;
    return (
      <div>
        <div onClick={onClose} aria-hidden="true" className={styles.background} />
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
