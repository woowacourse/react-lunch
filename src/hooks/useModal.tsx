import React, { useEffect, useRef, useState } from 'react';

function useModal<T>() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalContent, setModalContent] = useState<T | null>(null);

  useEffect(() => {
    const current = modalRef.current;

    if (modalContent) {
      current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
      current?.close();
    }
  }, [modalContent]);

  return { modalRef, modalContent, setModalContent };
}

export default useModal;
