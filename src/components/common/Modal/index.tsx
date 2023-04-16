import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

const handleEscapeKeydown = (callback: () => void) => {
  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      callback();
    }
  });
};

const setModalCloseEvent = (props: Props) => {
  useEffect(() => handleEscapeKeydown(props.onCloseModal), []);

  useEffect(() => {
    return () => handleEscapeKeydown(props.onCloseModal);
  });
};

export default function Modal(props: Props) {
  setModalCloseEvent(props);

  return createPortal(
    <div role="dialog" aria-modal>
      <div className="modal-backdrop" onClick={props.onCloseModal}></div>
      <div className="modal-container">{props.children}</div>
    </div>,
    document.body,
  );
}
