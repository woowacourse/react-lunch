import { KeyboardEvent, MouseEvent, useCallback, useState } from 'react';

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

  const handleCloseClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;

      if (
        target.classList.contains('modal-backdrop') ||
        target.classList.contains('modal-close-button')
      ) {
        close();
      }
    },
    [close]
  );

  const handleClosePress = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  return { isOpen, open, handleCloseClick, handleClosePress };
};

export { useModal };
