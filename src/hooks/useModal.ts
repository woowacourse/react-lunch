import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add('hide-overflow');
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('hide-overflow');
  }, []);

  return { isModalOpen: isOpen, openModal: open, closeModal: close };
};

export { useModal };
