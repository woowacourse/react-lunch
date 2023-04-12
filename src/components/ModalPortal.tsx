import React, { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

class ModalPortal extends React.Component<Props> {
  $modalRoot: HTMLElement;
  $dialog: HTMLDialogElement;

  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.$modalRoot = document.getElementById('modal-root') as HTMLElement;
    this.$dialog = document.createElement('dialog');
    this.$dialog.className = 'modal';
  }

  componentDidMount(): void {
    this.$modalRoot.appendChild(this.$dialog);
    this.$dialog.showModal();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount(): void {
    this.$dialog.close();
    document.body.style.overflow = 'visible';
    this.$modalRoot.removeChild(this.$dialog);
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.$dialog);
  }
}

export default ModalPortal;
