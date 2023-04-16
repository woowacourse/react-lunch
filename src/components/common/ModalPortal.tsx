import React from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalType {
  children: React.ReactNode;
}

const ModalPortal = (props: ModalPortalType) => {
  const modalRoot = document.getElementById('modal-root') as Element;

  return ReactDOM.createPortal(props.children, modalRoot);
};

export default ModalPortal;
