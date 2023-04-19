import { useState } from 'react';

export const useHideScrollState = <Type>(
  initializeValue: Type,
  predicate: (state: Type) => boolean,
): [value: Type, setValue: (newValue: Type) => void] => {
  const [value, setState] = useState(initializeValue);

  const setValue = (newValue: Type) => {
    document.body.dataset.hideScroll = predicate(newValue) ? 'true' : 'false';
    setState(newValue);
  };

  return [value, setValue];
};
