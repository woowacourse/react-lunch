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

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    console.log('!!');

    if (
      target.classList.contains('modal-backdrop') ||
      target.classList.contains('modal-close-button')
    ) {
      close();
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  return { isOpen, open, close, handleClose, handleKeyPress };
};

export { useModal };
