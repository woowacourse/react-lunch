import { useState } from 'react';

export const useSafeUnionTypeState = <Type extends string>(
  initializeValue: Type,
  typeOfArray: string[],
): [value: Type, setValue: (text: string) => void] => {
  const [value, setState] = useState(initializeValue);

  const isInCludes = (text: string): text is Type => {
    return typeOfArray.includes(text);
  };

  const setValue = (text: string) => {
    if (!isInCludes(text)) return;

    setState(text);
  };

  return [value, setValue];
};
