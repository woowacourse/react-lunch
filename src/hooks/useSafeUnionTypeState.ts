import { useState } from 'react';

export const useSafeUnionTypeState = <Type>(
  initializeValue: Type,
  typeOfArray: string[],
): [value: Type, setValue: (text: unknown) => void] => {
  const [value, setState] = useState(initializeValue);

  const isInCludes = (text: unknown): text is Type => {
    if (typeof text !== 'string') return false;

    return typeOfArray.includes(text);
  };

  const setValue = (text: unknown) => {
    if (!isInCludes(text)) return;

    setState(text);
  };

  return [value, setValue];
};
