import React from 'react';
import ReactDOM from 'react-dom';
import { $ } from '../../utils/domSelector';

const ModalPortal = (props: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(props.children, $<Element>('#modal-root'));
};

export default ModalPortal;
