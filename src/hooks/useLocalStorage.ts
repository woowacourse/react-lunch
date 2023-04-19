import { useEffect, useState } from 'react';
import {
  getSavedLocalStorageList,
  hasSavedLocalStorageList,
  saveLocalStorageList,
} from '../domain/initializeRestaurantList';

export const useLocalStorage = <Type>(
  key: string,
  initializeValue: Type,
): [value: Type, setValue: (newValue: Type) => void] => {
  const [value, setState] = useState(initializeValue);

  const setValue = (newValue: Type) => {
    setState(newValue);
    saveLocalStorageList<Type>(key, newValue);
  };

  useEffect(() => {
    const getSavedList = getSavedLocalStorageList(key);

    if (!hasSavedLocalStorageList(key)) {
      setValue(initializeValue);
      return;
    }

    setState(getSavedList);
  }, []);

  return [value, setValue];
};
