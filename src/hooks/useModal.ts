import { KeyboardEvent, MouseEvent, useCallback, useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.classList.add('hide-overflow');
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.classList.remove('hide-overflow');
  }, []);

  const handleModalCloseClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;

      if (
        target.classList.contains('modal-backdrop') ||
        target.classList.contains('modal-close-button')
      ) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleModalClosePress = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  return {
    isModalOpen,
    openModal,
    handleModalCloseClick,
    handleModalClosePress,
  };
};

export { useModal };
