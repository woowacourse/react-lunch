import React from 'react';

interface Props {
  dialogRef: React.RefObject<HTMLDialogElement>;
}

function useModal({ dialogRef }: Props) {
  const openDialog = () => {
    const current = dialogRef.current;
    if (current) {
      current.showModal();
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDialog = () => {
    const current = dialogRef.current;
    if (current) {
      document.body.style.overflow = 'visible';
      current.close();
    }
  };

  return { openDialog, closeDialog };
}

export default useModal;
