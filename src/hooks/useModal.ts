import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      window.onkeydown = (e) => {
        if (e.key === 'Escape') closeModal();
      };
      return;
    }
    window.onkeydown = null;
  }, [isOpen]);

  return { openModal, closeModal, isOpen };
};
