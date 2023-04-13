import React, { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeEvent: () => void;
}

class ModalPortal extends React.Component<Props> {
  $modalRoot: HTMLElement;

  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.$modalRoot = document.getElementById('modal-root') as HTMLElement;
    this.dialogKeyDownListener = this.dialogKeyDownListener.bind(this);
    this.dialogBackdropListener = this.dialogBackdropListener.bind(this);
  }

  dialogKeyDownListener(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape') {
      this.props.closeEvent();
    }
  }

  dialogBackdropListener(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      this.props.closeEvent();
    }
  }

  componentDidMount(): void {
    this.props.dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount(): void {
    document.body.style.overflow = 'visible';
    this.props.dialogRef.current?.close();
  }

  render() {
    return ReactDom.createPortal(
      <dialog ref={this.props.dialogRef} onKeyDown={this.dialogKeyDownListener} onClick={this.dialogBackdropListener}>
        {this.props.children}
      </dialog>,
      this.$modalRoot
    );
  }
}

export default ModalPortal;
