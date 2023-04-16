import React, { useEffect } from 'react';

import * as S from './style';

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: Props) => {
  const onKeyDownEscape = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return;
    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEscape);

    return () => {
      window.removeEventListener('keydown', onKeyDownEscape);
    };
  }, []);

  return (
    <>
      <S.ModalBackdropBox onClick={closeModal} />
      {children}
    </>
  );
};

export default Modal;
