import { useState } from 'react';

export const useLocalStorage = <Type>(key: string, initializeValue: Type) => {
  const getSavedList = JSON.parse(localStorage.getItem(key) || '[]');

  const initializeState = getSavedList || initializeValue;

  if (!getSavedList || getSavedList.length === 0) {
    localStorage.setItem(key, JSON.stringify(initializeValue));
  }

  const [value, setState] = useState(initializeState);

  const setValue = (newValue: Type) => {
    setState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue];
};
