import { useEffect, useRef } from 'react';

export const useModal = (setSelectedRestaurant: CallableFunction) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.focus();
      }
    };
  });

  const handleClickClose: React.MouseEventHandler = ({ target }) => {
    if (
      target instanceof Element &&
      (target.classList.contains('modal-backdrop') || target.classList.contains('modal-close-button'))
    ) {
      setSelectedRestaurant(null);
    }
  };

  const handleKeyPressClose: React.KeyboardEventHandler = event => {
    if (event.key === 'Escape') {
      setSelectedRestaurant(null);
    }
  };

  return { ref, handleClickClose, handleKeyPressClose };
};
