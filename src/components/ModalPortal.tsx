import React, { ReactNode, useEffect } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeEvent: () => void;
}

function ModalPortal({ children, dialogRef, closeEvent }: Props) {
  const $modalRoot = document.getElementById('modal-root') as HTMLElement;

  useEffect(() => {
    dialogRef?.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
      dialogRef?.current?.close();
    };
  });

  const dialogKeyDownListener = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      closeEvent();
    }
  };

  const dialogBackdropListener = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeEvent();
    }
  };

  return ReactDom.createPortal(
    <dialog ref={dialogRef} onKeyDown={dialogKeyDownListener} onClick={dialogBackdropListener}>
      {children}
    </dialog>,
    $modalRoot
  );
}

export default ModalPortal;
