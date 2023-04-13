import React from 'react';
import ReactDOM from 'react-dom';

class ModalPortal extends React.Component<{ children: React.ReactNode }> {
  render(): React.ReactNode {
    const modalRoot = document.getElementById('modal-root') as Element;
    const children = this.props.children;

    return ReactDOM.createPortal(children, modalRoot);
  }
}

export default ModalPortal;
