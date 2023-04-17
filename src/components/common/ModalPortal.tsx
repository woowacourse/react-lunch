import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal-root') as Element;
  const children = props.children;

  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
