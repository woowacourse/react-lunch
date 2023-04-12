import React, { Component, LegacyRef, RefObject } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
}

class Modal extends Component<ModalProps> {
  dialog: RefObject<HTMLDialogElement>;

  constructor(props: ModalProps) {
    super(props);
    this.dialog = React.createRef();
  }

  componentDidUpdate() {
    if (!this.dialog.current) return;

    const { onClose } = this.props;

    if (this.dialog.current.open) {
      this.dialog.current.close();
      onClose();
      return;
    }

    this.dialog.current.showModal();
  }

  render() {
    const { children } = this.props;
    return (
      <dialog className={styles.modal} ref={this.dialog}>
        {children}
      </dialog>
    );
  }
}

export default Modal;
