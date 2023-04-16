import { useState } from 'react';
import {
  getSavedLocalStorageList,
  hasSavedLocalStorageList,
  saveLocalStorageList,
} from '../domain/initializeRestaurantList';

export const useLocalStorage = <Type>(
  key: string,
  initializeValue: Type,
): [value: Type, setValue: (newValue: Type) => void] => {
  const getSavedList = getSavedLocalStorageList(key);

  const initializeState = getSavedList || initializeValue;

  if (!hasSavedLocalStorageList(key)) {
    localStorage.setItem(key, JSON.stringify(initializeValue));
  }

  const [value, setState] = useState(initializeState);

  const setValue = (newValue: Type) => {
    setState(newValue);
    saveLocalStorageList<Type>(key, newValue);
  };

  return [value, setValue];
};
