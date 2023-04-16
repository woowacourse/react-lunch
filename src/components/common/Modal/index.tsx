import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './style.css';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
}

const handleEscapeKeydown = (callback: () => void, event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    callback();
  }
};

const test = (props: Props) => {
  useEffect(() => {
    document.body.addEventListener('keydown', (e) =>
      handleEscapeKeydown(props.onCloseModal, e),
    );
  }, []);

  useEffect(() => {
    return () =>
      document.body.addEventListener('keydown', (e) =>
        handleEscapeKeydown(props.onCloseModal, e),
      );
  });
};

export default function Modal(props: Props) {
  test(props);

  return createPortal(
    <div role="dialog" aria-modal>
      <div className="modal-backdrop" onClick={props.onCloseModal}></div>
      <div className="modal-container">{props.children}</div>
    </div>,
    document.body,
  );
}
