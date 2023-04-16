import { useState } from 'react';

export const useModalState = <Type>(
  initializeValue: Type,
): [value: Type | null, setValue: (newValue: NonNullable<Type> | null) => void] => {
  const [value, setState] = useState(initializeValue || null);

  const setHideScroll = (newValue: NonNullable<Type> | null) => {
    if (newValue === null) {
      document.body.dataset.hideScroll = 'false';
      return;
    }

    document.body.dataset.hideScroll = 'true';
  };

  const setValue = (newValue: NonNullable<Type> | null) => {
    setHideScroll(newValue);
    setState(newValue);
  };

  return [value, setValue];
};
