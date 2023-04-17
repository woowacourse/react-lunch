import { useEffect } from 'react';

const useScrollStop = (shouldStop: boolean) => {
  useEffect(() => {
    if (!shouldStop) return;

    document.body.classList.add('hide-overflow');

    return () => {
      document.body.classList.remove('hide-overflow');
    };
  }, [shouldStop]);
};

export { useScrollStop };
