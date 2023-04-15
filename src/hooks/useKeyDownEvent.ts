import { useEffect } from 'react';

export const useKeyDownEvent = (key: string, callback: () => void) => {
  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    });
  }, [key, callback]);
};
