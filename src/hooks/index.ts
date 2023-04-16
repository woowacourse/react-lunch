import { useEffect, useRef } from 'react';

export const useModalFocus = (isModalOpen: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isModalOpen]);

  return ref;
};
