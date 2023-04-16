import React, { ReactNode, useEffect } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeEvent: () => void;
}

const ModalPortal:React.FC<Props>=(props)=> {
  const $modalRoot = document.getElementById('modal-root') as HTMLElement;

  const dialogKeyDownListener=(event: React.KeyboardEvent<HTMLDialogElement>)=>{
    if (event.key === 'Escape') {
      props.closeEvent();
    }
  }

  const dialogBackdropListener=(event: React.MouseEvent<HTMLDialogElement>)=>{
    if (event.target === event.currentTarget) {
      props.closeEvent();
    }
  }

  useEffect(() => {
    props.dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'visible';
      props.dialogRef.current?.close();
    };
  }, [props.dialogRef]);

    return ReactDom.createPortal(
      <dialog ref={props.dialogRef} onKeyDown={dialogKeyDownListener} onClick={dialogBackdropListener}>
        {props.children}
      </dialog>,
      $modalRoot
    );
}

export default ModalPortal;
